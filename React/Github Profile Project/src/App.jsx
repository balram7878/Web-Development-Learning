import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [users, setUsers] = useState(20);


  return (
    <>
      <Header setUsers={setUsers} />
      <Main users={users}  />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
