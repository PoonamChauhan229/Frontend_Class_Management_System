import React from "react";
  
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage ,useFormik} from "formik";
import { URL } from "../../../../utilis/constant";
import axios from "axios";

const CreateBatch = () => {
 

    const submitBatchCreationForm = async (values) => {
      console.log("Create Button Pressed");
      try {
        const res = await axios.post(`${URL}/addbatch`, values);
        console.log("Response:", res);
      } catch (error) {
        console.error("Error:", error);
      }
    }

  // console.log({...formik})

  const initialValues = {
    batch_start_date: "",
    batch_end_date: "",
    course_type: "",
    batch_target_size: "",
    batch_actual_size: "",
    status: "active",
    trainer_name: "",
    batch_type: "All days",
    installments_applicable: "Yes",
    batch_session: "",
    classroom_start_time: "",
    classroom_end_time: "",
    placement_applicable: "Yes",
    assessment_applicable: "Yes",
    student_enrollment_fee: "",
    coordinator_name: "", // Added coordinator_name
    course_name: "", // Added course_name
    batch_location: "", // Added batch_location
  };
  
const validationSchema = Yup.object().shape({
  batch_start_date: Yup.date().required('Please provide a valid start date for the batch.'),
  batch_end_date: Yup.date().required('Please provide a valid end date for the batch.'),
  course_type: Yup.string().required('Please specify the course type.'),
  batch_target_size: Yup.number().required('Please specify the target size for the batch.'),
  batch_actual_size: Yup.number().required('Please specify the actual size for the batch.'),
  trainer_name: Yup.string().required('Please provide the name of the trainer for the batch.'),
  batch_session: Yup.string().required('Please specify the session for the batch.'),
  classroom_start_time: Yup.string().required('Please specify the start time for the classroom.'),
  classroom_end_time: Yup.string().required('Please specify the end time for the classroom.'),
  student_enrollment_fee: Yup.number().required('Please specify the student enrollment fee.'),
  coordinator_name: Yup.string().required('Please provide the name of the coordinator for the batch.'),
  course_name: Yup.string().required('Please specify the name of the course.'),
  batch_location: Yup.string().required('Please specify the location for the batch.')
});


const handleSubmit=(values)=>{
    console.log(values)
    submitBatchCreationForm(values)
  }

  
  return (
    <div className="container border">
      <div className="row justify-content-center">
        <div className="col-xl-11 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg">
            {/* forms start*/}
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>           
              <Form>
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="px-4 pt-2">
                        <h1 className="h5 text-gray-900 mb-4 mt-2">
                          Add New Batch
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/* forms */}
                  <div className="row mx-1">
                    <div className="col-lg-4" style={{ fontSize: "14px" }}>
                      <div className="px-3">
                        <div className="user">
                          <div className="form-group">
                            <label
                              htmlFor="batch_start_date"
                              className="form-label"
                            >
                              Batch Start Date
                            </label>
                            <Field
                              type="date"
                              className="form-control"
                              id="batch_start_date"
                              name="batch_start_date"
                              style={{ fontSize: "14px" }}
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="batch_end_date"
                              className="form-label"
                            >
                              Batch End Date
                            </label>
                            <Field
                              type="date"
                              className="form-control"
                              id="batch_end_date"
                              name="batch_end_date"
                              style={{ fontSize: "14px" }}
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="status" className="form-label">
                              Course Type
                            </label>
                            <Field
                              as="select"
                              className="form-control"
                              id="status"
                              name="course_type" // Add name attribute here
                              style={{ fontSize: "14px" }}
                            >
                              <option value="Self Learning">Self Learning</option>
                              <option value="Live Session">Live Session</option>
                            </Field>
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="batch_target_size"
                              className="form-label"
                            >
                              Batch Target Size
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="batch_target_size"
                              name="batch_target_size"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="batch_actual_size"
                              className="form-label"
                            >
                              Batch Actual Size
                            </label>
                            <Field
                              type="text"
                              className="form-control "
                              id="batch_actual_size"
                              name="batch_actual_size"
                            />
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="batch_actual_size"
                              className="form-label"
                            >
                              batch_location
                            </label>
                            <Field
                              type="text"
                              className="form-control "
                              id="batch_location"
                              name="batch_location"
                            />
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4" style={{ fontSize: "14px" }}>
                      <div className="px-2">
                        <div className="user">
                          <div className="form-group">
                            <label htmlFor="status" className="form-label">
                              Status
                            </label>
                            <Field
                              as="select"
                              className="form-control"
                              id="status"
                              name="status" // Add name attribute here
                              style={{ fontSize: "14px" }}
                            >
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                              <option value="pending">Pending</option>
                            </Field>
                          </div>

                          <div className="form-group">
                            <label htmlFor="trainer_name" className="form-label">
                              Trainer
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="trainer_name"
                              name="trainer_name"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="coordinator_name" className="form-label">
                              Coordinator
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="coordinator_name"
                              name="coordinator_name"
                            />
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="course_name"
                              className="form-label"
                            >
                              Course Name
                            </label>
                            <Field
                              type="text"
                              className="form-control "
                              id="course_name"
                              name="course_name"
                            />
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="installments_applicable"
                              className="form-label"
                            >
                              Installments Applicable
                            </label>
                            <select
                              className="form-control"
                              id="installments_applicable"
                              style={{ fontSize: "14px" }}
                            >
                              <option className="form-select-option">
                                Yes
                              </option>
                              <option className="form-select-option">No</option>
                            </select>
                          </div>

                          <div className="form-group py-2">
                            <label className="form-label">Batch Type</label>
                            <br />
                            <div className="d-flex flex-wrap">
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-Field"
                                  type="radio"
                                  name="batch_type" // Add name attribute here
                                  id="type1"
                                  value="All days"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="type1"
                                >
                                  All_days
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-Field"
                                  type="radio"
                                  name="batch_type" // Add name attribute here
                                  id="type2"
                                  value="Weekdays"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="type2"
                                >
                                  Weekdays
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-Field"
                                  type="radio"
                                  name="batch_type" // Add name attribute here
                                  id="type3"
                                  value="WeekEnds"
                                />
                                <label
                                  className="form-check-label fs-6"
                                  htmlFor="type3"
                                >
                                  WeekEnds
                                </label>
                              </div>
                            </div>
                          </div> 
                          
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4" style={{ fontSize: "14px" }}>
                      <div className="px-3">
                        <div className="user">
                          <div className="form-group">
                            <label
                              htmlFor="classroom_start_time"
                              className="form-label"
                            >
                              Classroom Start Time
                            </label>
                            <Field
                              type="time"
                              className="form-control "
                              id="classroom_start_time"
                              name="classroom_start_time"
                              style={{ fontSize: "14px" }}
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="classroom_end_time"
                              className="form-label"
                            >
                              Classroom End Time
                            </label>
                            <Field
                              type="time"
                              className="form-control "
                              id="classroom_end_time"
                              name="classroom_end_time"
                              style={{ fontSize: "14px" }}
                            />
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="placement_applicable"
                              className="form-label"
                            >
                              Placement Applicable
                            </label>
                            <select
                              className="form-control "
                              id="placement_applicable"
                              style={{ fontSize: "14px" }}
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="form-group mt-3">
                            <label
                              htmlFor="assessment_applicable"
                              className="form-label"
                            >
                              Assessment Applicable
                            </label>
                            <select
                              className="form-control"
                              id="assessment_applicable"
                              style={{ fontSize:"14px"}}
                            >
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="student_enrollment_fee"
                              className="form-label"
                            >
                              Student Enrollment Fee
                            </label>
                            <Field
                              type="text"
                              className="form-control "
                              id="student_enrollment_fee"
                              name="student_enrollment_fee"
                            />
                          </div>

                          <div className="form-group py-2">
                            <label className="form-label">Batch Session</label>
                            <br />
                            <div className="d-flex ">
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-Field"
                                  type="radio"
                                  name="batch_session"
                                  id="session1"
                                  value="Morning"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="session1"
                                >
                                  Morning
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-Field"
                                  type="radio"
                                  name="batch_session"
                                  id="session2"
                                  value="Afternoon"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="session2"
                                >
                                  Afternoon
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-Field"
                                  type="radio"
                                  name="batch_session"
                                  id="session3"
                                  value="Evening"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="session3"
                                >
                                  Evening
                                </label>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                {/*forms end*/}
                {/* Button start */}
                <div className="mx-2">
                  <hr />
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"                    
                  >
                    Create Batch
                  </button>
                </div>
                {/* Button End */}
              </Form>             
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBatch;
