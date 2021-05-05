import React,{useState} from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";


const Navbar = () => {

    const [slidebar, setSlidebar] = useState(false)

    const showSideBar =() =>{
        setSlidebar(!slidebar)
    }

    return (
        <>
        <div className="container">
            <div className="title">
            <p>Pizza</p>

            </div>

            <div className="icon">

                <p>Menu</p>
                <FaBars onClick={showSideBar}/>
            </div>

            {/* <nav className={slidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className="nav-menu-items">

            </ul>


            </nav> */}
            

           

           
            
        </div>
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="pizza"></img>
        </>
    )
}

export default Navbar