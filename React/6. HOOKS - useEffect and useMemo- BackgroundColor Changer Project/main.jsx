import ReactDOM from "react-dom/client";
import ColorChanger from "./component/ColorChanger";
import INC_DEC from "./component/INC_DEC";

function App() {
  return (
    <>
      <INC_DEC />
      <ColorChanger name="XYZ" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
