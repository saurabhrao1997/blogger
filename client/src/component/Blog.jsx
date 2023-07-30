
import React ,{useEffect,useState,createContext,useContext} from 'react'
import { RollContext } from './ApiContext/createContext'
import RestrictionPage from './RestrictionPage'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
  const aa = useContext(RollContext);
  const user = localStorage.getItem("user")
  console.log("aa restriction home",aa,user)
  const [backendData,setBackEndData] = useState({});
 const [newTitle,setNewTilte] = useState("Bollywood");
 const [letstNews,setLetestNews] = useState([])
const Navigate = useNavigate()
const onSubmit =  async()=>{

      const responce = await fetch("http://localhost:5000/news",{
        method:"GET",
        // body:JSON.stringify(form),
        headers:{
          "Content-Type":"application/json"
        }
       })
     
    const response2  = await responce.json()
console.log("new data",response2)
setLetestNews(response2?.letestnews)
    setBackEndData(response2?.data)
    

    
    }


console.log("news",letstNews)

    useEffect(()=>{
      onSubmit()
    },[])

    const newList = ["Bollywood","Sport","Technology","Helth","Business"]
  return (
    <>
    {aa?.blogs === true ?

    <div className="flex flex-col  items-center">
      <h1 className="text-center font-bold py-2 text-[24px]">Blogs</h1>

      <div className="flex gap-2 mx-10 justify-around w-[60%] mt-4">
        {newList.map((val) => {
          return (
            <div
              className={`hover:text-blue-400 ${
                val == newTitle ? "text-blue-400" : ""
              }`}
              onClick={() => {
                setNewTilte(val);
              }}
            >
              {val}
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex grid grid-cols-3 gap-4 px-10">
        {console.log("lenght", Object.keys(letstNews).length)}

        {letstNews.map((val) => {
       
          return (
            <>
              {val?.type == newTitle && (
                <div className='bg-gray-50 shadow-xl' onClick={()=>{Navigate(`/blogs/details/${val?._id}`)}}>
                  <img
                    src={val?.image}
                    className="h-[200px] w-full object-cover border-2"
                    alt="image is loading"
                  />
                  <div className="px-4">
                    <h1 className="font-bold text-lg my-2 trancate">{val.title.slice(0,70)}...</h1>
                    <p className='text-gray-400'>{val?.subtitle}</p>
                    <p className="trancate">{val.discription.slice(0,100)}...</p>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>:<RestrictionPage/>}
  </>
  );
}
