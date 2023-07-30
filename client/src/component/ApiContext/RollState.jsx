import React ,{useEffect,useState,createContext,useContext} from 'react'
import { RollContext } from './createContext';


export const RollState = (props) =>{
    const user = localStorage.getItem("user")
    console.log("user",user)
const [restriction,setRestriction] = useState();

  useEffect(()=>{
  const fetchRoleRestriction = async() =>{
    const responce = await fetch("http://localhost:5000/restriction",{
      method:"GET",
      // body:JSON.stringify(form),
      headers:{
        "Content-Type":"application/json"
      }
     })
   
  const response2  = await responce.json()
// console.log("role restriction",response2?.data)
response2?.data.map((val)=>{
   if(val?.name == user){
    setRestriction(val)
   }
})


  }
  fetchRoleRestriction()
  },[])


  return (
    <RollContext.Provider value={restriction}>
      {props?.children}
    </RollContext.Provider>
  )
}