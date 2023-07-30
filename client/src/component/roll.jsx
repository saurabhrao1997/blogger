import React ,{useEffect,useState,createContext,useContext} from 'react'
import Modal from './modal';
import { RollContext } from './ApiContext/createContext'
import RestrictionPage from './RestrictionPage'

export default function Roll() {

  const [message,setMessage] = useState("");
  const [showModal,setShowModal] = useState(false)
const aa = useContext(RollContext)
console.log("aa restriction",aa)

  const [userList,setUserList] = useState([])
  
  const user = localStorage.getItem("user")
 


  const [restriction,setRestriction] = useState()

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

setRestriction(response2?.data)

  }
  fetchRoleRestriction()
  },[])


 
useEffect(()=>{

  const onuserlist = async ()=>{
    const responce = await fetch("http://localhost:5000/userlist",{
      method:"GET",
      // body:JSON.stringify(form),
      headers:{
        "Content-Type":"application/json"
      }
     })
   
  const response2  = await responce.json()
  response2 && setUserList(response2?.data)
  // console.log("response2",response2)
  }
  onuserlist()
 

},[])


 


const onSubmit =  async(e)=>{
  e.preventDefault()
  
   

 

  const responce = await fetch("http://localhost:5000/role",{
    method:"POST",
    body:JSON.stringify(restriction),
    headers:{
      "Content-Type":"application/json"
    }
   })
 
const response2  = await responce.json()

console.log("responce",response2)
if(response2?.code == 200){
  setShowModal(true)
  setMessage("roll status update successfully")

}else{
  setShowModal(true)
  setMessage("roll status update failed")
}



}

const onChange = (e,id) =>{

 const checked = e?.target?.checked ;
 const name = e?.target?.name;
 console.log("name",e?.target?.name,id)


 console.log("rolll",restriction)
 let updatedRestraction = restriction
 let index = updatedRestraction.findIndex((val)=> val?.userId == id)
 updatedRestraction[index][name] = checked
console.log( "updatedRestraction",updatedRestraction)
setRestriction(updatedRestraction)

}

  return (
    <>{ 
      aa?.role == true ?
  <div>
     <div className='text-[24px] font-bold text-center my-6'>Roll</div>
     <form className=' w-[80%] m-auto' onSubmit={onSubmit}>
      <table className='w-full' >
        <thead >
          <tr className='border-2'>
            <th className='border-2'>Name</th>
            <th className='border-2'>Home</th>
            <th className='border-2'>Blogs</th>
            <th className='border-2'>Edit Blogs</th>
            <th className='border-2'>Role</th>
            <th className='border-2'>contact</th>
          </tr>
          
        </thead>
        <tbody>
          {
            userList.map((item)=>{
            return  restriction.map((role)=>{
                
              if(role?.userId === item?._id){
                
                return (
                  <tr key={item?._id} className='border-2 text-center'>
                    <td className={`${user === (`${item?.name} ${item?.lname}`) ? "font-bold" :""}`}>{`${item?.name} ${item?.lname}`}</td>
                    <td className='border-2'><input type="checkbox" defaultChecked={role?.home == false ? role?.home : true} name="home" onChange={(e)=>{ onChange(e,item?._id)}}  /></td>
                    <td className='border-2'><input type="checkbox" defaultChecked={role?.blogs == false ? role?.blogs : true } name="blogs" onChange={(e)=>{ onChange(e,item?._id)}}   /></td>
                    <td className='border-2'><input disabled={(item?.user == "admin") ? true : false} name="editblog"  type="checkbox" defaultChecked={(item?.user == "admin" || item?.user == "manager") ? role?.editblog ? true :false : false} onChange={(e)=>{ onChange(e,item?._id)}}/></td>
                    <td className='border-2'><input disabled={(item?.user == "admin") ? true : false} type="checkbox" name="role" defaultChecked={(item?.user == "admin" || item?.user == "manager") ? role?.role ?  true : false : false } onChange={(e)=>{ onChange(e,item?._id)}}/></td>
                    <td className='border-2'><input type="checkbox" defaultChecked={role?.contact == false ? role?.contact :   true} name="contact"  onChange={(e)=>{ onChange(e,item?._id)}} /></td>
                  </tr>
                )

              }
                

              })
           
            })
          }

        </tbody>

      </table>
      <div className='w-full flex justify-center my-4'>
      <button className='outline outline-white px-4 py-1 bg-blue-400 rounded-[10px] text-white' type='submit'>submit</button>
      </div>
     
     </form>
{showModal &&  <Modal massage={message}  setShowModal={setShowModal} onClick={()=>{setShowModal(false);window.location.reload()}}/>}
  </div> : <RestrictionPage/>}
</>   
  )
}
