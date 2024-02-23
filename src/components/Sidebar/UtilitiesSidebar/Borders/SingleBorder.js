import React from "react";

const SingleBorder = ({cardbody1,cardbody2,cardbody3,cardbody4,cardbody5,cardbody6,cardbody7,cardbody8,cardbody9,cardbodytext1,cardbodytext2,cardbodytext3,cardbodytext4,cardbodytext5,cardbodytext6,cardbodytext7,cardbodytext8,cardbodytext9}) => {
  return (
    <>
      <div className="col-lg-6">
        <div className={cardbody1}>
                 <div className="card-body">{cardbodytext1}</div>
        </div>

        <div className={cardbody2}>

          <div className="card-body">{cardbodytext2}</div>
        </div>

        <div className={cardbody3}>
                 <div className="card-body">{cardbodytext3}</div>
        </div>

        <div className={cardbody4}>
              <div className="card-body">{cardbodytext4} </div>
        </div>

        <div className={cardbody5}>
        <div className="card-body">{cardbodytext5}</div>
        </div>

        <div className={cardbody6}>
          <div className="card-body">{cardbodytext6}</div>
        </div>

        <div className={cardbody7}>
          <div className="card-body">{cardbodytext7} </div>
        </div>
      </div>
    </>
  );
};

export default SingleBorder;
