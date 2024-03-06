import React,{useState} from 'react'
import Dropdown from '../Dropdown'
import { Link } from 'react-router-dom'

const Batches = () => {
    const [open,setOpen]=useState(false)
    const ComponentDropdownData=[
        {
          first:"Batch Creation",
          second:"View Batches",
          linkredirect1:"createbatches",
          linkredirect2:"viewbatches"
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
                    <span>Batches</span>
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

export default Batches