
import useFetch  from "./useFetch"
export default function Main({users}) {

  const data=useFetch();
  console.log(data)

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
