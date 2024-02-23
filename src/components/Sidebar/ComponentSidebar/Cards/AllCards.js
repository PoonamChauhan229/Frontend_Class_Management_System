import React from "react";
import { dashboardCardList } from "../../../../utilis/constant";
import FourCardsExample from "./FourCardsExample";
import TaskStatusCard from "../../../Dashboard/FirstStatusCards_EPT/TaskStatusCard";


const AllCards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Cards</h1>
        </div>
        <div className="row">
        {dashboardCardList.map((element,index)=>(
            <TaskStatusCard {...element} key={index}/>
          ))}
        </div>
   <FourCardsExample/>
      </div>
    </>
  );
};

export default AllCards;
