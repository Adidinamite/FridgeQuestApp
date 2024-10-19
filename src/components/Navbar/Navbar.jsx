import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="mainNav">
          <a href="/home" className={"logo"}>
            FridgeQuestApp
          </a>
          <ul className={"navbar"}>
            <li className={"menuItem"}>
              <a href="/home" className={"menuLink active"}>
                Home
              </a>
            </li>
            <li className={"menuItem"}>
              <a href="/home" className={"menuLink"}>
                About
              </a>
            </li>
            <li className={"menuItem"}>
              <a href="/recipes" className={"menuLink"}>
                Recipes
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;