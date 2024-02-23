
import { useEffect, useState } from "react";
import { dashboardCardList } from "../../../utilis/constant";
import TaskStatusCard from "./TaskStatusCard";
import { URL } from "../../../utilis/constant";
import axios from "axios";
import AdmissionStatusCard from "./AdmissionStatusCard";


const FourTaskStatusCard = () => {
  const [income,setIncome]=useState(null)
  const [admissionCount,setAdmissionCount]=useState(null)

  useEffect(()=>{
    getIncome_admission()
  },[])
  const getIncome_admission=async()=>{
      const res=await axios.get(`${URL}/getdetailedadmissionlist`)
      // console.log(res.data)
      setIncome(res.data)

      const res1=await axios.get(`${URL}/admissions`)
      setAdmissionCount(res1.data)
  }
  // console.log(income)
  
   return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h5 mb-0 text-gray-600"><u>Earnings:</u></h1>
        </div>

          {/* Card List */}
        <div className="row">
          
          {income?.map((element,index)=>(
            <TaskStatusCard {...element} key={index}/>
          ))}
        </div>

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h5 mb-0 text-gray-600"><u>Admissions:</u></h1>
        </div>
        <div className="row">
          {admissionCount?.map((element,index)=>(
            <AdmissionStatusCard {...element} key={index}/>
          ))}
        </div>


        
      </div>
    </>
  );
};
export default FourTaskStatusCard;
