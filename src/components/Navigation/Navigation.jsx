import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const getLinkClassName = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.active}` : s.navLink;

export const Navigation = () => {
  return (
    <header className={s.navWrap}>
      <nav className={s.navBar}>
        <NavLink to="/" className={getLinkClassName} end>
          Home
        </NavLink>
        <NavLink to="/generate" className={getLinkClassName}>
          Generate QR Code
        </NavLink>
        <NavLink to="/scan" className={getLinkClassName}>
          Scan QR Code
        </NavLink>
      </nav>
    </header>
  );
};
