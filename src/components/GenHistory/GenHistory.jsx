import { GENERATE_DATA } from "../../data";
import { QRCodeSVG } from "qrcode.react";
import s from "./GenHistory.module.css";

export const GenHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
  const history = [...data].reverse();
  return (
    <div className={s.qrPage}>
      <h2 className={s.qrTitle}>Generated QR Codes History</h2>
      {history.length === 0 ? (
        <p className={s.qrEmpty}>History is empty.</p>
      ) : (
        <ul className={s.qrList}>
          {history.map((item, index) => (
            <li key={index} className={s.qrItem}>
              {item}
              <QRCodeSVG className={s.qrCode} value={item} size={200} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
