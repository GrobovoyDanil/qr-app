import { SCAN_DATA } from "../../data";
import { QRCodeSVG } from "qrcode.react";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA)) || "[]";
  return (
    <div>
      <h2>Scanned QR Codes History</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <QRCodeSVG value={item} size={220} />
          </li>
        ))}
      </ul>
    </div>
  );
};
