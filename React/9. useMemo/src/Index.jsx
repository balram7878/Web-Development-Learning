import ReactDOM from "react-dom/client";
import INC from "./component/INC"

function App() {
  return (
    <>
      <INC/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
