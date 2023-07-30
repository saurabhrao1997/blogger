import React,{useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import Modal from './modal';

export default function Register() {
          const navigate =  useNavigate()
    const [register,setRegister] = useState({})
    const [showModal,setShowModal] = useState(false)

    const handleRegister =(e) =>{
        setRegister({
            ...register,
            [e?.target?.name] : e?.target?.value})
    }
    console.log("register",register)
const handleForm = async(e)=>{
    e. preventDefault()


    const responce = await fetch("http://localhost:5000/register",{
        method:"POST",
        // body:JSON.stringify(form),
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(register)
       })
     
    const response2  = await responce.json()

    console.log("register",register,response2)
    setShowModal(true)
    

}
  return (
    <>
    <form onSubmit={handleForm} className='w-[60%] flex flex-col border-2 justify-center items-center mt-[100px] mx-auto'>
        <h1 className='font-bold text-lg'>Registertion</h1>

  <label htmlFor="">User</label> 
  <select className='border-2 rounded-[10px] w-[50%]' name='user' onChange={handleRegister}>
    <option value=""></option>
    <option value="admin">admin</option>
    <option value="manager">manager</option>
    <option value="member">member</option>
    <option value="student">student</option>
    </select>     

  <label htmlFor="">Name</label>      <input className='border-2 rounded-[10px] w-[50%]' type="text" name='name'  onChange={handleRegister}/>
  <label htmlFor="">Last name</label>      <input className='border-2 rounded-[10px] w-[50%]' type="text" name='lname' onChange={handleRegister} />
  <label htmlFor="">Email</label>      <input className='border-2 rounded-[10px] w-[50%]' type="email" name='email' onChange={handleRegister}/>
  <label htmlFor="">Phone</label>      <input className='border-2 rounded-[10px] w-[50%]' type="text" name='phone' onChange={handleRegister}/>
  <label htmlFor="">Password</label>      <input className='border-2 rounded-[10px] w-[50%]' type="password"  name='password' onChange={handleRegister}/>
  <label htmlFor="">Conform password</label>      <input className='border-2 rounded-[10px] w-[50%]' type="password" name='conformPassword' onChange={handleRegister}/>
  <input className='text-lg border-2 bg-blue-300 px-4 py-1 my-2 rounded-[10px] ' type="submit" value={"Submit"} />
    </form>


    
{/* <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}

{showModal &&  <Modal massege={" Register successfully done"}  setShowModal={setShowModal} onClick={()=>{navigate("/")}}/>}

    </>
  )
}
