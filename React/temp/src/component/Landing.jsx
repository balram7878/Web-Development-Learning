import { Link } from "react-router"
export default function Landing(){
    return<>
      <Link to="/">Landing Page</Link>
        <Link to="/home">Home Page</Link>
        <Link to="/contact">Contact Page</Link>
        <Link to="/details">Details</Link>
    <h1>Landing Page</h1>
    </>
}