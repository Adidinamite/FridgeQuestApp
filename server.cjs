const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

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
                        content: `Generate a recipe based on the following ingredients: ${inputText}. The recipe should be easy to follow, require no special equipment, and include only common kitchen ingredients. Please provide the recipe as a series of steps separated by periods, with each step starting with a capital letter. as exmaple: 1. Cook it at medum heat. 2. Add salt and pepper. 3. Serve hot.`,
                    },
                ],
            }),
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error while fetching response from OpenAI:', error.message);
    }
});

app.get('/api/get-response', (req, res) => {
    res.status(404).send('This endpoint only supports POST requests.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
