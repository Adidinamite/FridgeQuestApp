# FridgeQuestApp

FridgeQuestApp is a user-friendly web application that helps you create delicious recipes based on the ingredients you have in your fridge. With an intuitive interface, you can add ingredients, generate recipes, and explore cooking instructions tailored for beginner cooks.


## Features
- **Ingredient Management**: Easily add and delete ingredients.
- **Recipe Generation**: Generate recipes based on your available ingredients.
- **Step-by-Step Instructions**: Receive clear cooking instructions formatted for ease of use.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aparaschiveiadrian/FridgeQuestApp.git
   cd FridgeQuestApp
   ```
2. Install the dependencies:
   ```bash
    npm install
    ```
3. Start the React app:
    ```bash
    npm run dev
    ```
4. Start the Proxy server for making the API calls:
    ```bash
    npm start
    ```
   
5. How to add the ChatGPT API key:
    - Create a `.env` file in the root directory of the project.
    - Add the following line to the `.env` file:
        ```bash
        VITE_API_KEY="YOUR_API_KEY"
        ```
    - Replace `YOUR_API_KEY` with your ChatGPT API key.
    - Save the file and restart the React app.