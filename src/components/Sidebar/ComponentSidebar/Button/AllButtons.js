import React from "react";
import { ButtonsDataComponent } from "./ButtonsData";
import { ButtonsDataComponent2 } from "./ButtonsData";
import SingleButton from "./SingleButton";

const AllButtons = () => {
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

        <div className="row">
          <div className="col-lg-6">

        {
            ButtonsDataComponent.map((element)=>
          
            <SingleButton {...element}/>
            )
        }
            
          </div>

          <div className="col-lg-6">
          {
            ButtonsDataComponent2.map((element)=>
          
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
