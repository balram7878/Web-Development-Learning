import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <div className="border-[2px] border-solid border-black h-[320px] w-[220px] rounded-xl m-2 flex-1 justify-center items-center ">
        <div>
          <img
            className="h-[190px] w-[210] p-1 rounded-2xl"
            src="https://th.bing.com/th?q=Cat+Eating+Food&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
          ></img>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-2xl">Cat</h1>
          <p className="text-grey-200">Cats are beautiful creatures but not honest like dogs</p>
          <button className="bg-blue-400 h-[30px] w-[90px] rounded-lg text-white p-[3px] m-2">Know more</button>
        </div>
      </div>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
