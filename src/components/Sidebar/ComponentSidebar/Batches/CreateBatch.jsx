import React from 'react';

const CreateBatch = () => {
  return (
    <div className="container border">
      <div className="row justify-content-center">
        <div className="col-xl-11 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className='col-lg-12'>
                  <div className="px-4 pt-2">
                    <h1 className="h5 text-gray-900 mb-4 mt-2">Add New Batch!</h1>
                  </div>
                </div>
              </div>
              <div className="row mx-1">
                <div className="col-lg-4"  style={{fontSize:"14px"}}>
                  <div className="px-3">
                    <form className="user">
                      <div className="form-group">
                        <label htmlFor="batchStartDate" className="form-label">Batch Start Date</label>
                        <input
                          type="date"
                          className="form-control "
                          id="batchStartDate"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="batchCode" className="form-label">Batch Code</label>
                        <input
                          type="text"
                          className="form-control "
                          id="batchCode"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="batchTargetSize" className="form-label">Batch Target Size</label>
                        <input
                          type="text"
                          className="form-control "
                          id="batchTargetSize"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="batchActualSize" className="form-label">Batch Actual Size</label>
                        <input
                          type="text"
                          className="form-control "
                          id="batchActualSize"
                        />
                      </div> 
                      <div className="form-group">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                        />
                      </div>                     
                    </form>
                  </div>
                </div>

                <div className="col-lg-4" style={{fontSize:"14px"}}>
                  <div className="px-2">
                    <form className="user">
                      
                      <div className="form-group">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-control " id="status">
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="pending">Pending</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="trainer" className="form-label">Trainer</label>
                        <input
                          type="text"
                          className="form-control "
                          id="trainer"
                        />
                      </div>
                      <div className="form-group py-2">
                        <label className="form-label">Batch Type</label><br />
                        <div className='d-flex flex-wrap'>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="batchType" id="type1" value="All days" />
                          <label className="form-check-label" htmlFor="type1">All_days</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="batchType" id="type2" value="Weekdays" />
                          <label className="form-check-label" htmlFor="type2">Weekdays</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="batchType" id="type3" value="WeekEnds" />
                          <label className="form-check-label fs-6" htmlFor="type3">WeekEnds</label>
                        </div>

                        </div>
                      </div>
                                            
                      <div className="form-group">
                        <label htmlFor="installmentsApplicable" className="form-label">Installments Applicable</label>
                        <select className="form-control" id="installmentsApplicable">
                            <option className="form-select-option">Yes</option>
                            <option className="form-select-option">No</option>
                        </select>
                        </div>

                        <div className="form-group py-2">
                        <label className="form-label">Batch Session</label><br />
                        <div className='d-flex '>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="batchSession" id="session1" value="Session 1" />
                          <label className="form-check-label" htmlFor="session1">Morning</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="batchSession" id="session2" value="Session 2" />
                          <label className="form-check-label" htmlFor="session2">Afternoon</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="batchSession" id="session3" value="Session 3" />
                          <label className="form-check-label" htmlFor="session3">Evening</label>
                        </div>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>

                <div className="col-lg-4"  style={{fontSize:"14px"}}>
                  <div className="px-3">
                    <form className="user">
                      <div className="form-group">
                        <label htmlFor="classroomStartTime" className="form-label">Classroom Start Time</label>
                        <input
                          type="time"
                          className="form-control "
                          id="classroomStartTime"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="classroomEndTime" className="form-label">Classroom End Time</label>
                        <input
                          type="time"
                          className="form-control "
                          id="classroomEndTime"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="placementApplicable" className="form-label">Placement Applicable</label>
                        <select className="form-control " id="placementApplicable">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="assessmentApplicable" className="form-label">Assessment Applicable</label>
                        <select className="form-control form-select" id="assessmentApplicable">
                          <option  className="form-select-option" value="yes">Yes</option>
                          <option className="dropdown-item" value="no">No</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="studentEnrollmentFee" className="form-label">Student Enrollment Fee</label>
                        <input
                          type="text"
                          className="form-control "
                          id="studentEnrollmentFee"
                        />
                      </div>                      
                    </form>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <div className='mx-2'>
                <hr/>
                <a href="/" className="btn btn-primary btn-user btn-block">
                            Create Batch
                </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBatch;
