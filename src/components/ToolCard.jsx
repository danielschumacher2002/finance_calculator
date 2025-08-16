import { Link } from "react-router-dom";
import LinkArrow from "./LinkArrow";

export default function ToolCard({
  title,
  desc,
  to,
  children,
  disabled = false,
}) {
  return (
    <Link
      to={to}
      className={`flex flex-col gap-1 rounded-xl border border-white/10 bg-[#181818] p-4 ${disabled ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
    >
      <div className="flex items-center gap-3">
        <span className={`text-special`}>{children}</span>
        <h3 className="font-semibold text-white text-xl">{title}</h3>
      </div>
      <p className="mt-3 text-md text-neutral-300">{desc}</p>
      <span className={`mt-2 flex items-center gap-1 text-md text-special`}>
        Öffnen
        <LinkArrow></LinkArrow>
      </span>
    </Link>
  );
}
