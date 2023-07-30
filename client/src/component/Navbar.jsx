
import React, { useEffect, useState } from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
export default function Navbar() {
  const [user,setUser] = useState("")
  useEffect(()=>{
  const user1 =  localStorage.getItem("user")
  if(user1){
    setUser(user1)
  }

 
  },[localStorage.getItem("user")])
    const navigate =  useNavigate()
  return (
    <div className='sticky top-0  flex items-center justify-end  w-full h-[50px] bg-blue-800 z-10'>
        <div className='flex gap-4 items-center mr-4 '>
            <NavLink
            to="/home"
            className={({isActive})=> isActive ? "text-Orange-400 px-[20px] py-[5px] bg-blue-400 rounded-full hover:text-black" : "text-white hover:text-black"}
            >Home</NavLink>
           
              <NavLink
            to="/blogs"
            className={({isActive})=> isActive ? "text-Orange-400 px-[20px] py-[5px] bg-blue-400 rounded-full hover:text-black" : "text-white hover:text-black"}
            >Blogs</NavLink>
              <NavLink
            to="/editblog"
            className={({isActive})=> isActive ? "text-Orange-400 px-[20px] py-[5px] bg-blue-400 rounded-full hover:text-black" : "text-white hover:text-black"}
            >Create Blog</NavLink>
              <NavLink
            to="/role"
            className={({isActive})=> isActive ? "text-Orange-400 px-[20px] py-[5px] bg-blue-400 rounded-full hover:text-black" : "text-white hover:text-black"}
            >Role</NavLink>
              <NavLink
            to="/contact"
            className={({isActive})=> isActive ? "text-Orange-400 px-[20px] py-[5px] bg-blue-400 rounded-full h" : "text-white hover:text-black"}
            >Contact</NavLink>
             <NavLink
            to="/register"
            className={({isActive})=> isActive ? "text-Orange-400 px-[20px] py-[5px] bg-blue-400 rounded-full h" : "text-white hover:text-black"}
            >Register</NavLink>
             { user ?
             
             <button className="text-white hover:text-black " onClick={()=>{
              localStorage.removeItem("user")
              setUser("")
              navigate("/")
             }}>Logout</button>
             
             :<NavLink
            to="/"
            className={({isActive})=> isActive ? "text-Orange-400 px-[20px] py-[5px] bg-blue-400 rounded-full" : "text-white"}
            >Login</NavLink> }
       

        </div>
        
        
    </div>
  )
}
