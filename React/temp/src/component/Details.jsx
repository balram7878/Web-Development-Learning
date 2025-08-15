import { Link, Outlet } from "react-router";
export default function Details() {
  return (
    <>
    
      <Link to="hi">Hi</Link>
      <Link to="hello">Hello</Link>
      <h1>Details page</h1>
      <Outlet></Outlet>
    </>
  );
}
