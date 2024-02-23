import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({linkredirect5,linkredirect6,linkredirect4,linkredirect3,linkredirect2,linkredirect1,first,second,third,fourth,fifth,sixth,seventh}) => {

  
    return (
    <div id="collapsePages" className="collapse show" aria-labelledby="headingPages"
    data-parent="#accordionSidebar">
    <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">{first}</h6>
        <Link className="collapse-item" to={"/"+linkredirect1}>{second}</Link>
        <Link className="collapse-item" to={`/${linkredirect2}`}>{third}</Link>
       {fourth && <Link className="collapse-item" to={`/${linkredirect3}`}>{fourth}</Link>}
        <div className="collapse-divider"></div>
        {fifth &&<Link to ={`/${linkredirect4}`}><h6 className="collapse-header">{fifth}:</h6></Link>}
        {sixth && <Link className="collapse-item" to={`/${linkredirect5}`}>{sixth}</Link>}
        {seventh && <Link className="collapse-item active" to={`/${linkredirect6}`}>{seventh}</Link>}
  
  </div>
</div>
  )
}

export default Dropdown