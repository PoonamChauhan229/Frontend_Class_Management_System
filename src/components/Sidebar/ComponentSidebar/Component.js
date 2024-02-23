import React,{useState} from 'react'
import Dropdown from '../Dropdown'
import { Link } from 'react-router-dom'

const Component = () => {
    const [open,setOpen]=useState(false)
    const ComponentDropdownData=[
        {
          first:"CUSTOM COMPONENTS",
          second:"Button",
          third:"Cards",
          linkredirect1:"button",
          linkredirect2:"cards"
        }       
      ]
      const handleDropdown=()=>{
        setOpen(!open)
         console.log("show dropdown")
         console.log(open)
     }
  return (
   <>
   <li className="nav-item">
                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo"
                    onClick={handleDropdown}
                    >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                     </Link>
                {/* Dropdown start */}
                {
                   open && ComponentDropdownData.map((element)=>
                    <Dropdown {...element}/>
                    )
                }
                {/* Dropdown end */}
            </li>
   </>
  )
}

export default Component