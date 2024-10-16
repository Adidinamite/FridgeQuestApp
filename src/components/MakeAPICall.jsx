const MakeAPICall = async (ingredientsListAsString) => {
    try {
        const response = await fetch('http://localhost:3000/api/get-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputText: ingredientsListAsString })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message || error);
        return 'An error occurred while processing your request.';
    }
};

export default MakeAPICall;
