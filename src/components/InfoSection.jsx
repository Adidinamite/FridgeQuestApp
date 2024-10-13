import "../styles/infoSection.css";

const InfoSection = () => {
    return (
        <section className={"infoContainer"}>
            <h3>How to Use?</h3>
            <ol>
                <li className={"infoContainerItem"}>
                    <span>
                        Step 1: Enter the ingredients.
                    </span>
                    <p>
                        You can enter the ingredients you have in your kitchen and get a recipe based on them.
                    </p>
                </li>
                <li className={"infoContainerItem"}>
                    <span>
                        Step 2: Generate your Recipe.
                    </span>
                    <p>
                        Click on the Generate button to get a recipe based on the ingredients you entered.
                    </p>
                </li>
                <li className={"infoContainerItem"}>
                    <span>
                        Step 3: Enjoy your meal.
                    </span>
                    <p>
                        Follow the recipe and enjoy your meal.
                    </p>
                </li>
            </ol>
        </section>
    );
}

export default InfoSection;
