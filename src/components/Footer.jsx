import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-25 px-6 py-5 border-t border-special md:py-10 md:px-8">
      <Link to={"/"} className="text-2xl text-special">
        Impressum
      </Link>
    </footer>
  );
}
