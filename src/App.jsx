import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="bg-[var(--bg-color-outer)] h-screen md:py-20">
        <div className="flex flex-col flex- bg-[var(--bg-color-inner)] h-full mx-auto font-[Inter] md:max-w-5xl md:rounded-xl">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="h-17 flex items-center justify-between px-6 py-5 border-b border-special md:py-10 md:px-8">
      <Burgermenu></Burgermenu>
      <Title></Title>
      <NavBar></NavBar>
    </header>
  );
}

function Burgermenu() {
  return (
    <button className="md:hidden">
      <svg
        className="w-6 h-6 fill-special"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        {/*Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2025
          Fonticons, Inc.*/}
        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
      </svg>
    </button>
  );
}

function NavBar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-x-7">
        <NavItem text={`Investment`}></NavItem>
        <NavItem text={`Kredit`}></NavItem>
        <NavItem text={`Presets`}></NavItem>
      </ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="text-special text-xl tracking-wide font-semibold">
      {props.text}
    </li>
  );
}

function Title() {
  return (
    <h1 className="absolute left-1/2 -translate-x-1/2 text-special text-xl font-bold tracking-wide whitespace-nowrap md:static md:translate-x-0 md:left-auto md:text-3xl">
      Finance Calculator
    </h1>
  );
}

function Main(){
  return(   
  <div className="m-10 flex-1">
      HI
  </div>
  )
}

function Footer(){
  return(
    <footer className="h-17 px-6 py-5 border-t border-special text-special md:py-10 md:px-8">I am the Footer</footer>
  )
}
