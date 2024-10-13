import '../styles/HomeSection.css';

const HomeSection = () => {
    return (
            <section id="about" className="content">
                <div className={"rightContainer"}>
                    <h1>
                        Do not know what to cook?
                    </h1>
                    <h2>
                        FridgeQuest is here to help!
                    </h2>
                    <p>
                        FridgeQuest is a dynamic web app designed to revolutionize how you cook by making the most out of ingredients you already have at home. With FridgeQuest, you simply input the ingredients you have on hand, and the app instantly generates a customized recipe tailored to your selection.

                        Using the powerful ChatGPT API, FridgeQuest analyzes your chosen ingredients and creates a step-by-step recipe that you can follow to create a delicious meal. Whether you have a few random items in your fridge or a fully stocked pantry, FridgeQuest transforms your ingredients into culinary inspiration, saving you time, reducing food waste, and sparking creativity in the kitchen.

                        So, whether you are an experienced chef looking to experiment or a busy individual searching for a quick dinner solution, FridgeQuest is here to make cooking easier, more fun, and incredibly personalized!
                    </p>
                </div>
                <div className={"leftContainer"}>
                    <img src={"./images/fridgeQuest.png"} alt={"FridgeQuest"} />
                </div>
            </section>
    )
        ;
};

export default HomeSection;
