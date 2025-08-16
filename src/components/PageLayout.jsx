import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PageLayout(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className="bg-[#121212] min-h-screen flex 
                        md:py-20 md:items-center"
      >
        <div
          className=" relative flex flex-col flex-1
                         bg-[#1e1e1e] mx-auto font-[Inter] 
                         md:max-w-5xl md:rounded-xl"
        >
          <SideMenu menuOpen={menuOpen} toggleMenu={toggleMenu}></SideMenu>

          <Header toggleMenu={toggleMenu}></Header>

          <div className="mx-6 my-14 flex-1 md:mx-10 md:my-20">
            {props.children}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

function SideMenu({ menuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-full z-10 bg-[#1e1e1e]
                  transform transition-transform duration-300 ease-out
                  ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-5 text-white">
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="p-2 rounded hover:bg-white/10">
            <svg className="w-8 h-8 fill-special" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">{/*<!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}<path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>

          </button>
        </div>

        <nav className="mt-10 text-6xl text-special 
                        flex flex-col gap-40">
          <Link to={"/about"}>About</Link>
          <Link to={"/"}>Github</Link>
          <Link to={"/feedback"}>Feedback</Link>

        </nav>
      </div>
    </div>
  );
}
