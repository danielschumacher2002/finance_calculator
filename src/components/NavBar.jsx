export default function NavBar(props) {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-x-7">{props.children}</ul>
    </nav>
  );
}
