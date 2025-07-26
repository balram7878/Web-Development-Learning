import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./component/Store";
import Counting from "./component/Counting";

function App(){
    return<>
    <Provider store={store}>
        <Counting/>
    </Provider>
    </>
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);