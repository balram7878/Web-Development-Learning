import { Link, Outlet } from "react-router"
export default function Contact(){
    return<>
    <Link to="Email">Email</Link>
    <Link to="Mobile">Mobile</Link>
    <Outlet></Outlet>
    <div className="container">
        <h1>This is our contact page</h1>
    </div>
    
    
    
    </>
}