import { Link } from "react-router-dom";

export default function Title() {
  return (
    <Link to={"/"} className="absolute left-1/2 -translate-x-1/2 text-special text-2xl font-bold tracking-wide whitespace-nowrap md:static md:translate-x-0 md:left-auto md:text-3xl">
      Finance Calculator
    </Link>
  );
}
