import React from "react";
import { ButtonsDataComponent } from "./ButtonsData";
import { ButtonsDataComponent2 } from "./ButtonsData";
import SingleButton from "./SingleButton";

const AllButtons = () => {
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}

        <div className="row">
          <div className="col-lg-12">

        {
            ButtonsDataComponent.map((element)=>
          
            <SingleButton {...element}/>
            )
        }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AllButtons;
