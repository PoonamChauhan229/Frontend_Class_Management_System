import "./App.css";
import { Routes, Route } from "react-router-dom"

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ForgotPassword from "./components/Sidebar/Pages/ForgotPassword";
import Page404 from "./components/Sidebar/Pages/Page404";
import BlankPage from "./components/Sidebar/Pages/BlankPage";

import MainComponentRoutes from "./MainComponentRoutes";
import loginContext from "./utilis/useContext/loginContext";
import { useState } from "react";


function App() {
  const [login,setLogin]=useState()
  return (
    <>                      
    <loginContext.Provider value={[login,setLogin]}>
        <Routes>
        <Route  path ='/dashboard*' element={<MainComponentRoutes/>}/>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route exact path="/404" element={<Page404/>}/>
        <Route exact path="/BlankPage" element={<BlankPage/>}/>
        

    </Routes>
    </loginContext.Provider>
  </>
      
  


  );
}

export default App;
