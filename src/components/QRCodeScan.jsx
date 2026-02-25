import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "../css/QRCodeScan.module.css";

export const QRCodeScan = () => {
  const [scanned, setResult] = useState(null);

  const onScanHandler = (result) => {
    setResult(result[0].rawValue);
  };

  const settings = {
    audio: false,
    finder: false,
  };

  return (
    <div className={s.qrPage}>
      <div className={s.qrCard}>
        <h1 className={s.qrTitle}>QR Code Scanner</h1>

        <div className={s.qrScannerWrap}>
          <Scanner
            allowMultiple
            onScan={onScanHandler}
            settings={settings}
            styles={{
              container: {
                width: 350,
                height: 350,
                borderRadius: 16,
                overflow: "hidden",
              },
            }}
          />
        </div>

        <p className={s.qrResult}>Result: {scanned || "No data yet"}</p>
      </div>
    </div>
  );
};
