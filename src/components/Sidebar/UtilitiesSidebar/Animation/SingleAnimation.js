import React from "react";

const SingleAnimation = ({animationheader,cardbody1,cardbody2,cardbody3,cardbody4,cardbody5,dropDown1,dropDown2,dropDown3}) => {
  return (
    <div className="col-lg-6">
      <div className="card position-relative">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            {animationheader}
          </h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <code>{cardbody1}</code>
          </div>
          <div className="small mb-1">{cardbody2}</div>
          <nav className="navbar navbar-expand navbar-light bg-light mb-4">
            <a className="navbar-brand" href="/">
              {cardbody3}
            </a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {cardbody4}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right animated--grow-in"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="/">
                   {dropDown1}
                  </a>
                  <a className="dropdown-item" href="/">
                    {dropDown2}
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                   {dropDown3}
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <p className="mb-0 small">{cardbody5}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleAnimation;
