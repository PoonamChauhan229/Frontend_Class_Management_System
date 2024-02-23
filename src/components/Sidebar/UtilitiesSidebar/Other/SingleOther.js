import React, { useState } from "react";

const SingleOther = ({otherDataHeader,cardbodydata,cardbody1,cardbody2,dropdown1,dropdown2,dropdown3}) => {
    const[open,setOpen]=useState(false)

    const handleOpen=()=>{
        setOpen(!open)
        console.log(open)
    }
  return (
    <div className="col-lg-6">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            {otherDataHeader}
          </h6>
        </div>
        <div className="card-body">
          {cardbody2 &&
            <span>
              <div className="mb-1 small">{cardbody1}</div>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="mb-1 small">{cardbody2}</div>
              <div className="progress progress-sm mb-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </span>
          }
          { dropdown1 &&
            <div className="dropdown no-arrow mb-4">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={handleOpen}
              >
                {cardbody1}
              </button>
              {
                open && 
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/">
                 {dropdown1}
                </a>
                <a className="dropdown-item" href="/">
                 {dropdown2}
                </a>
                <a className="dropdown-item" href="/">
                  {dropdown3}
                </a>
              </div>
              }
            </div>
          }
          {cardbodydata}
        </div>
      </div>
    </div>
  );
};

export default SingleOther;
