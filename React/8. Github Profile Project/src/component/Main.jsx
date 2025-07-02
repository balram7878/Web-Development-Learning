import { useEffect, useState } from "react";
export default function Main({users}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.github.com/users?since=${Math.ceil(Math.random()*1000)}per_page=${users}`);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    fetchData();
  }, [users]);

  return (
    <>
      {data.map((value) => {
        return (
          <div id="container" key={value.id}>
            <div id="photo">
              <img src={value.avatar_url} />
            </div>
            <div id="info">
              <h2>{value.login}</h2>
              <a href={value.html_url}>Profile</a>
            </div>
          </div>
        );
      })}
    </>
  );
}
