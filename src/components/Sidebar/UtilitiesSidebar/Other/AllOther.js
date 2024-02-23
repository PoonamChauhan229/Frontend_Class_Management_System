import React from "react";
import { OtherData } from "./OtherData";
import SingleOther from "./SingleOther";

const AllOther = () => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
        <p className="mb-4">
          Bootstrap's default utility classes can be found on the official{" "}
          <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
          page. The custom utilities below were created to extend this theme
          past the default utility classes built into Bootstrap's framework.
        </p>
        <div className="row">
            {
                OtherData.map((element)=>(
                    <SingleOther {...element}/>
                ))
            }

        </div>
      </div>
    </>
  );
};

export default AllOther;
