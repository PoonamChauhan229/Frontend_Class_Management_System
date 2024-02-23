import React from "react";
import Singlecolor from "./Singlecolor";
import { ColorDataFirstColumn, ColorDataSecondColumn, ColorDataThirdColumn } from "./ColorData";
const AllColor = () => {
  return (
    
      <div className="container-fluid">
        <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
        <p className="mb-4">
          Bootstrap's default utility classes can be found on the official{" "}
          <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
          page. The custom utilities below were created to extend this theme
          past the default utility classes built into Bootstrap's framework.
        </p>

        <div className="row">
        <div className="col-lg-4">
       {
        ColorDataFirstColumn.map((element)=>(
            <Singlecolor {...element}/>
        ))
       }
       </div>

       <div className="col-lg-4">
       {
        ColorDataSecondColumn.map((element)=>(
            <Singlecolor {...element}/>
        ))
       }
        </div>

        <div className="col-lg-4">
       {
        ColorDataThirdColumn.map((element)=>(
            <Singlecolor {...element}/>
        ))
       }
        </div>
      </div>
      </div>
   
  );
};

export default AllColor;
