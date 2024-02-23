const Singlecolor=({colorHeader,cardbody1,cardbody2,cardbody3,cardbody4,cardbody5,cardbody6,cardbody7,cardbody8,cardbody9,cardbodytext1,cardbodytext2,cardbodytext3,cardbodytext4,cardbodytext5,cardbodytext6,cardbodytext7,cardbodytext8,cardbodytext9})=>{
    return(
        
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{colorHeader}</h6>
                </div>
                <div className="card-body">
                    <p className={cardbody1}>{cardbodytext1}</p>
                    <p className={cardbody2}>{cardbodytext2}</p>
                    <p className={cardbody3}>{cardbodytext3}</p>
                    <p className={cardbody4}>{cardbodytext4}</p>
                    <p className={cardbody5}>{cardbodytext5}</p>
                    <p className={cardbody6}>{cardbodytext6}</p>
                    <p className={cardbody7}>{cardbodytext7}</p>
                    <p className={cardbody8}>{cardbodytext8}</p>
                    <p className={cardbody9}>{cardbodytext9}</p>
                </div>
            </div>
       
    )
}
export default Singlecolor