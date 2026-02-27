import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const getLinkClassName = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.active}` : s.navLink;

export const Navigation = () => {
  return (
    <header className={s.navWrap}>
      <nav className={s.navBar}>
        <NavLink to="/qr-app/" className={getLinkClassName} end>
          Home
        </NavLink>
        <NavLink to="/qr-app/generate" className={getLinkClassName}>
          Generate QR Code
        </NavLink>
        <NavLink to="/qr-app/scan" className={getLinkClassName}>
          Scan QR Code
        </NavLink>
        <NavLink to="/qr-app/generateHistory" className={getLinkClassName}>
          Generate History
        </NavLink>
        <NavLink to="/qr-app/scanHistory" className={getLinkClassName}>
          Scan History
        </NavLink>
      </nav>
    </header>
  );
};
