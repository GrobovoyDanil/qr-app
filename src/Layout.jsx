import { QRCodeGen } from "./components/Generete/QRCodeGen.jsx";
import { QRCodeScan } from "./components/Scan/QRCodeScan.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import { GenHistory } from "./components/GenHistory/GenHistory.jsx";
import { ScanHistory } from "./components/ScanHistory/ScanHistory.jsx";
import { Home } from "./components/Home/Home.jsx";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/qr-app/" element={<Home />} />
        <Route path="/qr-app/generate" element={<QRCodeGen />} />
        <Route path="/qr-app/scan" element={<QRCodeScan />} />
        <Route path="/qr-app/generateHistory" element={<GenHistory />} />
        <Route path="/qr-app/scanHistory" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};
