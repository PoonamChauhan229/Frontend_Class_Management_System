import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown'
import '../dropdown.css' 
import { useNavigate } from "react-router-dom";

const Pages = () => {
  const navigate = useNavigate();
    const PagesDropDownData=[{
        first:"LOGIN SCREEN",
        second:"Login",
        third:"Register",
        fourth:"Forgot Password",
        fifth:"Other Pages",
        sixth:"404 Page",
        seventh:"Blank Page",
        linkredirect1:"login",
        linkredirect2:"register",
        linkredirect3:"forgotPassword",
        linkredirect5:"404",
        linkredirect6:"BlankPage",
      }]
    const [open,setOpen]=useState(false)

    const handleDropdown=()=>{
       setOpen(!open)
        console.log("show dropdown")
        console.log(open)
    }
  return (
   <>
    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item active">
                <Link className="nav-link" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
                    aria-controls="collapsePages"
                    onClick={handleDropdown}
                    >
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                  
                </Link>
                {/* Dropdown start */}
                {
                   open && PagesDropDownData.map((element)=>
                    <Dropdown {...element}/>
                    )
                }
                {/* Dropdown end */}
            </li>
   </>
  )
}

export default Pages