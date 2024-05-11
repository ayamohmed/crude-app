import {Link} from "react-router-dom"


function Sidebar(){
 return(
    <>
    <ul>
       <li className="list-unstyled">
            <Link  to="/Products">Get All Products</Link>
        </li>
       <li>
            <a href="#">Get All Categories</a>
        </li>
    </ul>
    
    </>
 )
}
export default Sidebar;