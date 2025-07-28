import ReactDOM from "react-dom/client";
import store from "./component/Store";
import { Provider } from "react-redux";
import Counting from "./component/Counting";

function App() {
  // console.log(store);
  return (
    <>
      <Provider store={store}>
        <Counting />
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
