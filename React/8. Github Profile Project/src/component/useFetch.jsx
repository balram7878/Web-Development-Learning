import { useEffect, useState } from "react";
export default function useFetch(){
      const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.github.com/users?since=${Math.ceil(Math.random()*1000)}per_page=${20}`);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return data;
}