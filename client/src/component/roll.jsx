import React ,{useEffect,useState,createContext,useContext} from 'react'



const RollContext =createContext()
export const RollState = (props) =>{

  const state ={
    name:"saurabh",
    class:"A1"
  }
  return (
    <RollContext.Provider value={state}>
      {props?.children}
    </RollContext.Provider>
  )
}
export default function Roll() {


const aa = useContext(RollContext)
console.log("aa",aa)

  const [userList,setUserList] = useState([])
  const [roll,setRoll] = useState({})
  const user = localStorage.getItem("user")
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
  console.log("response2",response2)
  }
  onuserlist()

},[])




const onSubmit =  async(e)=>{
  e.preventDefault()
  const formData = 
    userList.map((item)=>{
      return {
        home: roll?.home?.id
          ? roll?.home?.id == item?._id
            ? roll?.home?.check
            : true
          : true,
        blogs: roll?.blogs?.id
          ? roll?.blogs?.id == item?._id
            ? roll?.blogs?.check
            : true
          : true,
        editblog:
          item?.user == "admin" || item?.user == "manager"
            ? roll?.editblog?.id
              ? roll?.editblog?.id == item?._id
                ? roll?.editblog?.check
                : true
              : true
            : roll?.editblog?.id
            ? roll?.editblog?.id == item?._id
              ? roll?.editblog?.check
              : false
            : false,
        role:
          item?.user == "admin" || item?.user == "manager"
            ? roll?.role?.id
              ? roll?.role?.id == item?._id
                ? roll?.role?.check
                : true
              : true
            : roll?.role?.id
            ? roll?.role?.id == item?._id
              ? roll?.role?.check
              : false
            : false,
        contact: roll?.contact?.id
          ? roll?.contact?.id == item?._id
            ? roll?.contact?.check
            : true
          : true,
        name: `${item?.name} ${item?.lname}`,
        userId: item?._id,
      };
    })
  
   

 
 console.log("formData",formData ,roll)
  const responce = await fetch("http://localhost:5000/role",{
    method:"POST",
    body:JSON.stringify(formData),
    headers:{
      "Content-Type":"application/json"
    }
   })
 
const response2  = await responce.json()
console.log("responce",response2)




}

const onChange = (e,id) =>{

 const checked = e?.target?.checked ;
 const name = e?.target?.name;
 console.log("name",e?.target?.name,)
 setRoll({...roll,[e.target.name]:{check: checked,id:id}})

}

  return (
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
            return (
              <tr key={item?._id} className='border-2 text-center'>
                <td className={`${user === (`${item?.name} ${item?.lname}`) ? "font-bold" :""}`}>{`${item?.name} ${item?.lname}`}</td>
                <td className='border-2'><input type="checkbox" defaultChecked={true} name="home" onChange={(e)=>{ onChange(e,item?._id)}}  /></td>
                <td className='border-2'><input type="checkbox" defaultChecked={ true } name="blogs" onChange={(e)=>{ onChange(e,item?._id)}}   /></td>
                <td className='border-2'><input disabled={(item?.user == "admin") ? true : false} name="editblog"  type="checkbox" defaultChecked={(item?.user == "admin" || item?.user == "manager") ? true : false} onChange={(e)=>{ onChange(e,item?._id)}}/></td>
                <td className='border-2'><input disabled={(item?.user == "admin") ? true : false} type="checkbox" name="role" defaultChecked={(item?.user == "admin" || item?.user == "manager") ? true : false } onChange={(e)=>{ onChange(e,item?._id)}}/></td>
                <td className='border-2'><input type="checkbox" defaultChecked={true} name="contact"  onChange={(e)=>{ onChange(e,item?._id)}} /></td>
              </tr>
            )
            })
          }

        </tbody>

      </table>
      <button className='border-2 px-4 py-1 bg-blue-400' type='submit'>submit</button>
     </form>

  </div>
   
  )
}
