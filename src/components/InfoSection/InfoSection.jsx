import "./InfoSection.css";

const HelpfulSteps = ({ stepCounter, stepTitle, stepDescription }) => (
  <li className="infoContainerItem">
    <span>
      {stepCounter}: {stepTitle}
    </span>
    <p>{stepDescription}</p>
  </li>
);
const InfoSection = () => {
  return (
    <section className="infoContainer">
      <h2>How to Use?</h2>
      <ol>
        <HelpfulSteps
          stepCounter="Step 1"
          stepTitle="Enter Ingredients."
          stepDescription="Enter the ingredients you have in your kitchen."
        />
        <HelpfulSteps
          stepCounter="Step 2"
          stepTitle="Generate your Recipe."
          stepDescription="Click on the Generate button to get a recipe based on the ingredients you entered."
        />
        <HelpfulSteps
          stepCounter="Step 3"
          stepTitle="Enjoy your meal."
          stepDescription="Follow the recipe and enjoy your meal."
        />
      </ol>
    </section>
  );
};
export default InfoSection;
