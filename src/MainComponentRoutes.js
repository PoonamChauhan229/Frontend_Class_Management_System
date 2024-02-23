import React from 'react'
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom"
import AllButtons from "./components/Sidebar/ComponentSidebar/Button/AllButtons";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import AllCards from "./components/Sidebar/ComponentSidebar/Cards/AllCards";
import AllColor from "./components/Sidebar/UtilitiesSidebar/Color/AllColor";
import AllBorders from "./components/Sidebar/UtilitiesSidebar/Borders/AllBorders";
import AllAnimation from "./components/Sidebar/UtilitiesSidebar/Animation/AllAnimation";
import AllOther from "./components/Sidebar/UtilitiesSidebar/Other/AllOther";
import Table from "./components/Sidebar/Table";
import Charts from "./components/Sidebar/Charts";

const MainComponentRoutes = () => {


    return (
    <>
      
       {/* <!-- Page Wrapper --> */}
       <div id="wrapper">
        {/* sidebar */}
        <Sidebar />
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* Topbar  */}
            <Topbar />
            {/* /* <!-- Begin Page Content --> */}
           
            {/* {/* <!-- End of Begin Page Content --> */}
        
          {/* <!-- End of Main Content --> */}        
        
    <Routes>

        <Route path="/"element={<Body/>}/>
        <Route path="/button" element={ <AllButtons/> } />
        <Route path="/cards" element={ <AllCards/> } />
        <Route path="/colors" element={<AllColor/>} />
        <Route path="/borders" element={<AllBorders/>} />
        <Route path="/animations" element={<AllAnimation/>} />
        <Route path="/other" element={<AllOther/>}/>
        <Route path="/tables" element={<Table/>}/>
        <Route path="/charts" element={<Charts/>}/>

    </Routes>
    </div>
    {/* {/* <!-- Footer --> */}
    <Footer/>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}
    </>
  );
}

export default MainComponentRoutes