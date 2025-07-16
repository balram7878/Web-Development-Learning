import ReactDOM from "react-dom/client";
import Fibonnaci from "./component/Fibonnaci";
import INC from "./component/INC"

function App() {
  return (
    <>
      <INC/>
      <Fibonnaci/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
