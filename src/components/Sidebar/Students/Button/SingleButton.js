
const SingleButton = ({btnName,btnBody1,btnBody2,btnCode1,btnBody3}) => {
    console.log(btnName,btnBody1,btnBody2,btnCode1)
  return (
    
    <>
        <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Batch creation</h6>
                </div>
                <div className="card-body">
                    <p>{btnBody1}</p>
                    {<p>{btnBody2}</p>}
                    
                    {btnCode1  &&
                    <span>
                     <div className="mb-2">
                        <code>.btn-circle</code>
                    </div>
                    
                    <a href="/" className="btn btn-primary btn-circle">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="btn btn-success btn-circle">
                        <i className="fas fa-check"></i>
                    </a>
                    <a href="/" className="btn btn-info btn-circle">
                        <i className="fas fa-info-circle"></i>
                    </a>
                    <a href="/" className="btn btn-warning btn-circle">
                        <i className="fas fa-exclamation-triangle"></i>
                    </a>
                    <a href="/" className="btn btn-danger btn-circle">
                        <i className="fas fa-trash"></i>
                    </a>
                  
                    <div className="mt-4 mb-2">
                        <code>.btn-circle .btn-sm</code>
                    </div>
                    <a href="/" className="btn btn-primary btn-circle btn-sm">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="btn btn-success btn-circle btn-sm">
                        <i className="fas fa-check"></i>
                    </a>
                    <a href="/" className="btn btn-info btn-circle btn-sm">
                        <i className="fas fa-info-circle"></i>
                    </a>
                    <a href="/" className="btn btn-warning btn-circle btn-sm">
                        <i className="fas fa-exclamation-triangle"></i>
                    </a>
                    <a href="/" className="btn btn-danger btn-circle btn-sm">
                        <i className="fas fa-trash"></i>
                    </a>
                  
                    <div className="mt-4 mb-2">
                        <code>.btn-circle .btn-lg</code>
                    </div>
                    <a href="/" className="btn btn-primary btn-circle btn-lg">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="btn btn-success btn-circle btn-lg">
                        <i className="fas fa-check"></i>
                    </a>
                    <a href="/" className="btn btn-info btn-circle btn-lg">
                        <i className="fas fa-info-circle"></i>
                    </a>
                    <a href="/" className="btn btn-warning btn-circle btn-lg">
                        <i className="fas fa-exclamation-triangle"></i>
                    </a>
                    <a href="/" className="btn btn-danger btn-circle btn-lg">
                        <i className="fas fa-trash"></i>
                    </a>
                    </span>
    }

    { btnBody2 &&
        <span>
        <a href="/" className="btn btn-google btn-block"><i className="fab fa-google fa-fw"></i>
                        .btn-google</a>
                    <a href="/" className="btn btn-facebook btn-block"><i
                            className="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>


        </span>
    }

    { btnBody3 &&
        <span>
            <a href='/' className="btn btn-primary btn-icon-split">
                        <span className="icon text-white-50">
                            <i className="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Primary</span>
                    </a>
                    <div className="my-2"></div>
                    <a href='/' className="btn btn-success btn-icon-split">
                        <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                        </span>
                        <span className="text">Split Button Success</span>
                    </a>
                    <div className="my-2"></div>
                    <a href='/' className="btn btn-info btn-icon-split">
                        <span className="icon text-white-50">
                            <i className="fas fa-info-circle"></i>
                        </span>
                        <span className="text">Split Button Info</span>
                    </a>
                    <div className="my-2"></div>
                    <a href='/' className="btn btn-warning btn-icon-split">
                        <span className="icon text-white-50">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                        <span className="text">Split Button Warning</span>
                    </a>
                    <div className="my-2"></div>
                    <a href='/' className="btn btn-danger btn-icon-split">
                        <span className="icon text-white-50">
                            <i className="fas fa-trash"></i>
                        </span>
                        <span className="text">Split Button Danger</span>
                    </a>
                    <div className="my-2"></div>
                    <a href='/' className="btn btn-secondary btn-icon-split">
                        <span className="icon text-white-50">
                            <i className="fas fa-arrow-right"></i>
                        </span>
                        <span className="text">Split Button Secondary</span>
                    </a>
                    <div className="my-2"></div>
                    <a href='/' className="btn btn-light btn-icon-split">
                        <span className="icon text-gray-600">
                            <i className="fas fa-arrow-right"></i>
                        </span>
                        <span className="text">Split Button Light</span>
                    </a>
                    <div className="mb-4"></div>
                    <p>{btnBody3}</p>
                    <a href='/' className="btn btn-primary btn-icon-split btn-sm">
                        <span className="icon text-white-50">
                            <i className="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Small</span>
                    </a>
                    <div className="my-2"></div>
                    <a href='/' className="btn btn-primary btn-icon-split btn-lg">
                        <span className="icon text-white-50">
                            <i className="fas fa-flag"></i>
                        </span>
                        <span className="text">Split Button Large</span>
                    </a>
        </span>
    }
                </div>
            </div>
    </>    
     
  )
}

export default SingleButton