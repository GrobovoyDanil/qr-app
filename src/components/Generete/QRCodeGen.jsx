import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QRCodeGen.module.css";
import { GENERATE_DATA } from "../../data";

export const QRCodeGen = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
    setResult(value);
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={s.qrPage}>
      <div className={s.qrCard}>
        <h1 className={s.qrTitle}>QR Code Generator</h1>

        <div className={s.qrPreview}>
          <QRCodeSVG value={result || " "} size={220} />
        </div>

        <input
          className={s.qrInput}
          type="text"
          placeholder="Enter text to generate QR code"
          value={value}
          onChange={onChangeHandler}
        />

        <button className={s.qrButton} onClick={onClickHandler}>
          Generate QR Code
        </button>
      </div>
    </div>
  );
};
