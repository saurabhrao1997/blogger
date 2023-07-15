import React,{useState} from 'react'
import { Typography } from "@material-tailwind/react";
export default function Footer() {
    const [show ,setShow] = useState(false)
  return (
    <div className=" w-full sticky bottom-0 left-0" onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
     { <div className={`transition duration-1000 ease-in-out delay-200 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between px-4 ${show ? "bg-gray-400" : "invisible "}`}>
        {/* <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
        <span className='text-blod text-[20px] text-white hover:text-blue-400'>saurabh.com</span>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>}
      <hr className=" border-blue-gray-50 " />
      <Typography color="blue-gray" className="text-center font-normal bg-gray-400 py-4 text-white">
        &copy; 2023 Material Tailwind
      </Typography>
    </div>

  )
}
// @material-tailwind/react