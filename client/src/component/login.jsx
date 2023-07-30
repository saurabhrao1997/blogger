import React,{useEffect, useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import Modal from './modal';
export default function Login() {
     const Navigate =  useNavigate()
    const [backendData,setBackEndData] = useState({});
    const [form,setForm] = useState({})
    const [showModal,setShowModal] = useState(false)
    const [error,setError] = useState("")
    
    console.log("backendData",backendData)

    useEffect(()=>{
      const user = localStorage.getItem("user")
          if(user){
            console.log("user",user)
            Navigate("/blogs")
          }
    },[])
    
    const onSubmit =  async(e)=>{
      e.preventDefault()

      const responce = await fetch("http://localhost:5000/login",{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
          "Content-Type":"application/json"
        }
       })
     
    const response2  = await responce.json()
    console.log("responce",response2)
   localStorage.setItem("user",`${response2?.data?.name} ${response2?.data?.lname}`)
   response2?.data?.name && setShowModal(true)
  if(response2?.status){
    setError(response2?.msg)
  }
    setBackEndData(response2)
    response2?.data?.name && Navigate("/blogs")
   window.location.reload()

    
    }
    
    const hadleForm = (e) =>{
    console.log("e",e)
    setForm({
    ...form,
    [e.target.name] :e?.target.value
    })
    }
    
      return (
        <>
        <div className="App bg-[url('https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?auto=compress&cs=tinysrgb&w=1500')] w-full h-screen flex justify-center items-center">
       {/* { backendData && <> <h1>{backendData.name}</h1>
          <h1>{backendData.lname}</h1>
          <h1>{backendData.email}</h1>
      
          
          </>} */}
          <form    onSubmit={onSubmit}  className="bg-gradient-to-r from-purple-500 to-pink-500 pt-32" style={{
            width:"700px",
            height:"500px",
            display:"flex",
          flexDirection:"column" ,
          // justifyContent:"center",
          justifyItems:"center",
          // margin:"50px auto",
          alignContent:"space-around",
          border:"1px solid gray"}}>
           
           
            <div style={{marginTop:"20px"}}>
              {error && <div className='text-white'>{error}</div> }
            <span  className='text-white'>email :</span> <input type='email' name="email" className='border-2 rounded-[5px]'  onChange={hadleForm}/>
            </div>
            <div style={{marginTop:"20px"}}>
            <span  className='text-white'>password :</span> <input type='password' name="password" className='border-2 rounded-[5px]'  onChange={hadleForm}/>
            </div>
         
           <div>
            <button className='bg-blue-400 rounded-[5px] mt-5 px-4 py-1 text-white hover:bg-blue-600' type="submit">submit </button>
           </div>
          </form>
        </div>

        {/* {showModal && <Modal setShowModal={setShowModal} onClick={ Navigate("/blogs")}/>} */}
        </>
      );}
