import React, { useState } from 'react'
import Modal from './modal';
import { useNavigate,NavLink } from 'react-router-dom'
export default function EditBlogs() {
    const [form,setForm] = useState({})
    const [showModal,setShowModal] = useState(false)
    const navigate = useNavigate()
    console.log("form",form)
    const handleChange = (e) =>{
      
        setForm({
        ...form,
        [e.target.name] :e?.target.value
        })
        }

        const onSubmit =  async(e)=>{
            e.preventDefault()
          
            const responce = await fetch("http://localhost:5000/api",{
              method:"POST",
              body:JSON.stringify(form),
              headers:{
                "Content-Type":"application/json"
              }
             })
           
          const response2  = await responce.json()
          response2 && setShowModal(true)
          console.log("responce",response2)
       
        
      
      
          
          }





  return (
    <div className='w-full h-screen overflow-scroll flex justify-center items-center'>
        
            
        <form  className='border-2 px-2 py-2 flex flex-col' onSubmit={onSubmit}>
            <div className='flex w-full justify-center'>
                <select className='border-2 w-[90%] place-self-center' name="type" id="" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Sport">Sport</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Helth">Helth</option>
                    <option value="Bollywood">Bollywood</option>
                </select>
            </div>
            <div className='my-2'>
                title : <input type="text" name="title" onChange={handleChange} className='border-2 rounded-[5px]' />
            </div>
            <div className='my-2'>
                image : <input type="text" name="image" onChange={handleChange} className='border-2 rounded-[5px]' />
            </div>
            <div className='my-2'>
               sub title : <input type="text" name="subtitle" onChange={handleChange} className='border-2 rounded-[5px]'  />
            </div>
            <div className='my-2'>
                discription : <input type="text" name="discription" onChange={handleChange} className='border-2 rounded-[5px]'  />
            </div>
            
            <div className='my-2 place-self-center'>
                <button type='submit' className='bg-blue-400 text-white rounded-[5px] px-2 py-1'>submit</button>
            </div>

        </form> 
        {showModal &&  <Modal massege={"blog successfully created"} setShowModal={setShowModal} onClick={()=>{navigate("/")}}/>}

    </div>
  )
}
