import { Link } from "react-router-dom";

export default function NavItem(props) {
  return (
    <li className="text-special text-xl tracking-wide font-semibold">
      <Link to={props.path}>{props.text}</Link>
    </li>
  );
}
