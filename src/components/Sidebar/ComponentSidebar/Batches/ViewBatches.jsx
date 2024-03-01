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
                                                <th>Batch Code</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Course Name</th>
                                                <th>Student Count</th>
                                                <th>Enrollment Fee</th>
                                                <th>Mentor</th>
                                            </tr>
                                        </thead>
                                       
                                        <tbody>
                                        {
                                            batches.map((element) => {
                                                const { batch_id, batch_code, start_date, end_date, student_count, trainer_name, student_fee, course_name } = element;
                                                const startDate = new Date(start_date);
                                                const formattedStartDate = startDate.toLocaleDateString("en-US");

                                                const endDate = new Date(start_date);
                                                const formattedEndDate = endDate.toLocaleDateString("en-US");


                                                return (
                                                    <tr key={batch_id}>
                                                        <td>{batch_code}</td>
                                                        <td>{formattedStartDate}</td>
                                                        <td>{formattedEndDate}</td>
                                                        <td>{course_name}</td>
                                                        <td>{student_count}</td>
                                                        <td>{student_fee}</td>
                                                        <td>{trainer_name}</td>
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