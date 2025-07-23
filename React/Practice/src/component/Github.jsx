import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Github() {
  const { user } = useParams();
  const [profile, setProfile] = useState(null);

  async function githubUser() {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    githubUser();
  },[]);
 
  return (
    <>
      <h1>GitHub Profile</h1>
      <img src={profile?.avatar_url}/>
      <h1>{profile?.name}</h1>
      <h2>{profile?.login}</h2>
    </>
  );
}
