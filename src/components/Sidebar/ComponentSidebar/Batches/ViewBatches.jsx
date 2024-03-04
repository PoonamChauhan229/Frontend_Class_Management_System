import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../../../../utilis/constant'

const ViewBatches = () => {
    const [batches,setBatches]=useState([])
    useEffect(()=>{
        batchesData()
    },[])
    const batchesData=async()=>{
        const res=await axios.get(`${URL}/viewbatches`);
        console.log(res.data)
        setBatches(res.data)
    }
  return (
        <div className="container-fluid">
                        
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">View All Batches</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Sr.No</th>
                                                <th>Batch Code</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Course Name</th>
                                                <th>Student Count</th>
                                                <th>Classroom Start Time </th>
                                                <th>Classroom End Time </th>
                                                <th>Enrollment Fee</th>
                                                <th>Mentor</th>
                                                <th>Batch Target Size </th>
                                                <th>Coordinator Name </th>
                                                <th>Batch Location</th>
                                                <th>Status </th>
                                                <th>Batch Type </th>
                                                <th>Course Type </th>
                                                <th>Batch Session </th> 
                                                <th>Installments Applicable </th>             
                                                <th>Placement Applicable </th>
                                                <th>Assessment Applicable </th>
                                         </tr>
                                        </thead>
                                       
                                        <tbody>
                                        {
                                            batches.map((element) => {
                                                const { batch_id, batch_code, batch_start_date,batch_end_date, course_name,batch_actual_size,classroom_start_time,classroom_end_time, student_enrollment_fee,trainer_name,batch_target_size,coordinator_name,batch_location, status, batch_type, course_type,batch_session,installments_applicable,assessment_applicable,placement_applicable } = element;
                                                const startDate = new Date(batch_start_date);
                                                const formattedStartDate = startDate.toLocaleDateString("en-US");

                                                const endDate = new Date(batch_end_date);
                                                const formattedEndDate = endDate.toLocaleDateString("en-US");


                                                return (
                                                    <tr key={batch_id}>
                                                        <td>{batch_id}</td>
                                                        <td>{batch_code}</td>
                                                        <td>{formattedStartDate}</td>
                                                        <td>{formattedEndDate}</td>
                                                        <td>{course_name}</td>                                                        
                                                        <td>{batch_actual_size}</td>
                                                        <td>{classroom_start_time}</td>
                                                        <td>{classroom_end_time}</td>
                                                        <td>{student_enrollment_fee}</td>
                                                        <td>{trainer_name}</td>
                                                        <td>{batch_target_size}</td>
                                                        <td>{coordinator_name}</td>
                                                        <td>{batch_location}</td>
                                                        <td>{status}</td>
                                                        <td>{batch_type}</td>
                                                        <td>{course_type}</td>
                                                        <td>{batch_session}</td>
                                                        <td>{installments_applicable}</td>
                                                        <td>{assessment_applicable}</td>
                                                        <td>{placement_applicable}</td>
                                                    </tr>
                                                );
                                            })
                                        }

                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    
                    </div>
      )
  
}

export default ViewBatches  