import React, { useContext, useState } from 'react'
import { URL } from '../../utilis/constant'
import axios from 'axios'
import loginContext from '../../utilis/useContext/loginContext'
import { Link } from 'react-router-dom'

const Login = () => {

   
    const [login,setLogin]=useContext(loginContext)
    const googleAuth=async ()=>{
        console.log("Hello World")        
        window.location.href = `${URL}/auth/google`
     
    }

  return (
    <div class="container">
    <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                            <label class="custom-control-label" for="customCheck">Remember
                                                Me</label>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary btn-user btn-block">
                                        Login
                                    </button>
                                    <hr/>
                                   
                                    <button class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </button>
                                </form>
                                {/* <button  class="btn btn-google btn-user btn-block"
                                    onClick={()=>{handleLoginSuccess(googleAuth)}}                                    
                                    >
                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                    </button> */}

                                    <button  class="btn btn-google btn-user btn-block"
                                    onClick={()=>{googleAuth()}}                                    
                                    >
                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                    </button>
                                <hr/>
                                <div class="text-center">
                                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <Link class="small" to="/register">Create an Account!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
   

</div>
  )
}

export default Login