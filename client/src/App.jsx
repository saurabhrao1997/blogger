import React,{useEffect,useState} from "react"
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./component/home"
import Login from "./component/login";
import Blogs from "./component/Blog";
import Contact from "./component/Contact";
import NoPage from "./component/Nopage";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import Register from "./component/Register";
import Roll from "./component/roll";
import EditBlogs from "./component/editBlogs";
import FullDetails from "./component/FullDetails";
import {RollState} from "./component/ApiContext/RollState"
function App() {
return(
  <>
<RollState>
  <BrowserRouter>
  <Navbar/>
      <Routes>
      
          <Route exact path="/" element={<Login />}/>
          <Route  exact path="/home" element={<Home />} />
          <Route exact  path="/blogs" element={<Blogs />} />
          <Route exact path="/blogs/details/:id" element={<FullDetails/>}/>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register" element={< Register/>} />
          <Route exact path="/role" element={<Roll/>} />
          <Route exact path="/editblog" element={< EditBlogs/>} />
          
          <Route path="*" element={<NoPage />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
    </RollState>
    
    </>
)
}

export default App;
