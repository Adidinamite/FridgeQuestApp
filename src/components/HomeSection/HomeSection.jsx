import "./HomeSection.css";

const HomeSection = () => {
  const BulletPointList = ({ items }) => {
    return (
      <ul className="bulletPoints">
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
    );
  };
  const keyFeatures = [
    {
      title: "Ingredient-based recipes",
      description:
        "Input the ingredients you have, and FridgeQuest will generate a recipe for you.",
    },
    {
      title: "Powered by ChatGPT",
      description:
        "Uses the powerful ChatGPT API to create step-by-step recipes tailored to your ingredients.",
    },
    {
      title: "Reduces food waste",
      description:
        "Make the most of the ingredients you already have, minimizing waste.",
    },
    {
      title: "Personalized and creative",
      description:
        "Whether you are an experienced chef or a busy individual, FridgeQuest helps spark creativity in the kitchen.",
    },
  ];

  const whyUseFridgeQuest = [
    {
      title: "Time-saving",
      description:
        "Quickly generate recipes without searching for new ones online.",
    },
    {
      title: "Fun and interactive",
      description: "Turn everyday ingredients into exciting meal ideas.",
    },
    {
      title: "Effortless cooking",
      description: "No need to plan ahead—just use what’s in your fridge.",
    },
  ];

  return (
    <section id="about" className="content">
      <div className="leftContainer">
        <h1>Do not know what to cook?</h1>
        <h2>FridgeQuest is here to help!</h2>
        <p>
          FridgeQuest is a web app which comes in help with how you cook by
          making the most out of ingredients you already have at home.
        </p>
        <h2>Key Features:</h2>
        <BulletPointList items={keyFeatures} />

        <h2>Why Use FridgeQuest?</h2>
        <BulletPointList items={whyUseFridgeQuest} />
      </div>
      <div className="rightContainer">
        <img src="/images/fridgeQuest.png" alt="FridgeQuest" />
      </div>
    </section>
  );
};

export default HomeSection;
