import { useState } from "react";
export default function Header({ setUsers,setUsername }) {
  const [value, setValue] = useState(10);
  return (
    <>
      <div id="header">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"></img>
        <h2>Github Profile User Data</h2>
        <div id="search-bar">
          <input
            type="text"
            placeholder="Number of users"
            onChange={(e) => setValue(parseInt(e.target.value))}
          ></input>
          <button id="search" onClick={() => setUsers(value)}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
