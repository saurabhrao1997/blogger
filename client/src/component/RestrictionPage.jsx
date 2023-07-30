import React,{useState} from 'react'
import Modal from './modal';
import { useNavigate,NavLink } from 'react-router-dom'
export default function RestrictionPage() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate()
  const [showModal,setShowModal]= useState(false)
  return (
    <>
   { user ? <div className='w-full h-screen flex flex-col justify-center items-center'>
        


        <div className='w-full text-center font-bold text-[24px]'>{user} you don't have permission access</div>

        <span className='text-gray-600 text-[14px]'>please contact your Admin regarding to this issue</span>
    </div>: <Modal massage={"Please login"}  setShowModal={setShowModal} onClick={()=>{setShowModal(false);navigate("/")}}/>} 
</>
  )
}
