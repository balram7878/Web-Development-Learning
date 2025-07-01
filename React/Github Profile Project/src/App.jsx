import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
