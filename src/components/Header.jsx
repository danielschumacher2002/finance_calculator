import Burgermenu from "./BurgerMenu";
import Title from "./Title";
import NavBar from "./NavBar";
import NavItem from "./NavItem";

export default function Header({ toggleMenu }) {
  return (
    <header className="h-25 flex items-center justify-between px-6 py-5 border-b border-special md:py-10 md:px-8">
      <Burgermenu toggleMenu={toggleMenu}></Burgermenu>
      <Title></Title>
      <NavBar>
        <NavItem text={`About`} path={"/about"}></NavItem>
        <NavItem
          text={`Github`}
          path={"https://github.com/danielschumacher2002/finance_calculator"}
        ></NavItem>
        <NavItem text={`Feedback`} path={"/feedback"}></NavItem>
      </NavBar>
    </header>
  );
}
