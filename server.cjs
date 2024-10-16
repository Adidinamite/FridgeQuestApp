const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/get-response', async (req, res) => {
    const { inputText } = req.body;

    if (!inputText) {
        return res.status(400).json({ error: 'No input text provided.' });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.VITE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `Generate a recipe based on the following ingredients: ${inputText}`,
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        res.json(data.choices[0].message.content);
    } catch (error) {
        console.error('Error while fetching response from OpenAI:', error.message);
        res.status(500).json({ error: 'Failed to generate recipe. Please try again later.' });
    }
});

app.get('/api/get-response', (req, res) => {
    res.status(404).send('This endpoint only supports POST requests.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
