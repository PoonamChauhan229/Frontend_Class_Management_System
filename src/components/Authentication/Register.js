import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {

const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [repeatPassword,setRepeatPassword]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    const formData={
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        repeat_password: repeatPassword

    }
    console.log(formData)
    submitFormData()
}

const submitFormData=async()=>{
    let res=axios.post()
}

  return (
    <div className="container">

    <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control " id="exampleFirstName"
                                        placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control " id="exampleLastName"
                                        placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control " id="exampleInputEmail"
                                    placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" className="form-control "
                                        id="exampleInputPassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control "
                                        id="exampleRepeatPassword" placeholder="Repeat Password" value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)}/>
                                </div>
                            </div>
                            <button type='submit' className="btn btn-primary  btn-block">
                                Register Account
                            </button>
                            <hr/>
                            <a href="index.html" className="btn btn-google btn-block">
                                <i className="fab fa-google fa-fw"></i> Register with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-block">
                                <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                            </a>
                        </form>
                        <hr/>
                        <div className="text-center">
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                            <a className="small" href="login.html">Already have an account? Login!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Register