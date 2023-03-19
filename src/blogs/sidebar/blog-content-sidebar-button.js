import { NavLink } from "react-router-dom";
import { MdOutlineArticle } from "react-icons/md";
export default function SidebarButton({ to, text, icon }) {
  const Icon = icon;
  return (
    <NavLink
      to={to}
      className="flex items-center py-3 text-white rounded-lg hover:bg-black/100 transition-all ease-in duration-150"
    >
      {({ isActive }) => (
        <>
          <div
            className={"w-1 h-10 rounded-r-sm " + (isActive && "bg-yellow-300")}
          ></div>
          <div
            className={
              "p-2 ml-14 rounded-lg " +
              (isActive && "bg-cyan-900/40 text-yellow-300")
            }
          >
            <Icon className="w-6 h-6" />
          </div>
          <span className={"ml-4 text-lg " + (isActive && "text-yellow-300")}>
            {text}
          </span>
        </>
      )}
    </NavLink>
  );
}
