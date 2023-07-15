import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { useLocation,useParams } from "react-router-dom";
export default function FullDetails() {


const params = useParams()

console.log("paramas",params)
    
    const [details,setDetails] = useState([])
   const Navigate = useNavigate()
   const onSubmit =  async()=>{
   
         const responce = await fetch(`http://localhost:5000/details/${params?.id}`,{
           method:"GET",
           // body:JSON.stringify(form),
           headers:{
             "Content-Type":"application/json"
           }
          })
        
       const response2  = await responce.json()
   console.log("new data",response2)
   setDetails(response2?.data)
       
       
   
       
       }
       useEffect(()=>{
        onSubmit()
       },[])
   
       console.log("letstNews",details)
  return (
    <div className=' flex flex-col items-center mx-auto mt-20 gap-y-10 w-2/3'>
  <h1 className='text-[30px] font-bold'>{details?.title}</h1>
  <img src={details?.image} className='w-[800px]'  alt="" /> 
  <p className='text-gray-400 '>{details?.subtitle}</p>

    <p>{details?.discription}</p>   

    
      
        
    </div>

  )
}
