import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./css/QRCodeGen.css";

export const QRCodeGen = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    setResult(value);
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="qr-page">
      <div className="qr-card">
        <h1 className="qr-title">QR Code Generator</h1>

        <div className="qr-preview">
          <QRCodeSVG value={result || " "} size={220} />
        </div>

        <input
          className="qr-input"
          type="text"
          placeholder="Enter text to generate QR code"
          value={value}
          onChange={onChangeHandler}
        />

        <button className="qr-button" onClick={onClickHandler}>
          Generate QR Code
        </button>
      </div>
    </div>
  );
};
