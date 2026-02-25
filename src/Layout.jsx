import { QRCodeGen } from "./components/QRCodeGen.jsx";
import { QRCodeScan } from "./components/QRCodeScan.jsx";

export const Layout = () => {
  return (
    <div>
      <QRCodeScan />
      {/* <QRCodeGen /> */}
    </div>
  );
};
