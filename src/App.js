import "./App.css";
import { Routes, Route } from "react-router-dom"

import Login from "./components/Sidebar/Pages/Login";
import Register from "./components/Sidebar/Pages/Register";
import ForgotPassword from "./components/Sidebar/Pages/ForgotPassword";
import Page404 from "./components/Sidebar/Pages/Page404";
import BlankPage from "./components/Sidebar/Pages/BlankPage";

import MainComponentRoutes from "./MainComponentRoutes";

function App() {
  return (
    <>
                        

    <Routes>
        <Route  path ='/*' element={<MainComponentRoutes/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route exact path="/404" element={<Page404/>}/>
        <Route exact path="/BlankPage" element={<BlankPage/>}/>
        

    </Routes>
  </>
      
  


  );
}

export default App;
