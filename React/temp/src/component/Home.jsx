import { Link } from "react-router"
export default function Home(){
    return<>
      <Link to="/">Landing Page</Link>
        <Link to="/home">Home Page</Link>
        <Link to="/contact">Contact Page</Link>
        <Link to="/details">Details</Link>
    <h1>Home Page</h1>
    </>
}