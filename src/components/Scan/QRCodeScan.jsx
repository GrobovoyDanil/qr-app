import { Scanner } from "@yudiel/react-qr-scanner";
import { useRef, useState } from "react";
import s from "./QRCodeScan.module.css";
import { SCAN_DATA } from "../../data";

export const QRCodeScan = () => {
  const [scanned, setResult] = useState(null);
  const lastScannedRef = useRef(null);

  const onScanHandler = (result) => {
    if (!result || result.length === 0) {
      return;
    }

    const rawValue = result[0].rawValue;
    if (!rawValue || rawValue === lastScannedRef.current) {
      return;
    }

    lastScannedRef.current = rawValue;
    setResult(rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, rawValue]));
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
