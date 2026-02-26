import { SCAN_DATA } from "../../data";
import { QRCodeSVG } from "qrcode.react";
import s from "./ScanHistory.module.css";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA)) || "[]";
  return (
    <div className={s.qrPage}>
      <h2 className={s.qrTitle}>Scanned QR Codes History</h2>
      <ul className={s.qrList}>
        {data.map((item, index) => (
          <li key={index} className={s.qrItem}>
            {item}
            <QRCodeSVG className={s.qrCode} value={item} size={220} />
          </li>
        ))}
      </ul>
    </div>
  );
};
