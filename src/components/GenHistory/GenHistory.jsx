import { GENERATE_DATA } from "../../data";
import { QRCodeSVG } from "qrcode.react";

export const GenHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA)) || "[]";
  return (
    <div>
      <h2>Generated QR Codes History</h2>
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
