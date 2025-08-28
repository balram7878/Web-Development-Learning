import Header from "./Header";
import { Outlet } from "react-router";


export default function Shome(){
return(<>
<Header/>
<Outlet></Outlet>
</>)
}