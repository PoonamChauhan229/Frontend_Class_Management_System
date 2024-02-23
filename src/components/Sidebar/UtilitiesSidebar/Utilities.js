import React ,{useState}from 'react'
import Dropdown from '../Dropdown'
import { Link } from 'react-router-dom'
import '../dropdown.css' 

const Utilities = () => {
    const UtilitiesDropDownData=[
        {
            first:"CUSTOM UTILITIES",
            second:"colors",
            third:"Borders",
            fourth:"Animations",
            fifth:"Other",
            linkredirect1:"colors",
            linkredirect2:"borders",
            linkredirect3:"animations",
            linkredirect4:"other"
          }
    ]
    
    const [open,setOpen]=useState(false)

    const handleDropdown=()=>{
       setOpen(!open)
        console.log("show dropdown")
        console.log(open)
    }
  return (
    <>
     <li className="nav-item">
                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities"
                    onClick={handleDropdown}
                    >
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </Link>
                {/* Dropdown start */}
                {
                   open && UtilitiesDropDownData.map((element)=>
                    <Dropdown {...element}/>
                    )
                }
                {/* Dropdown end */}
                
            </li>
    </>
  )
}

export default Utilities