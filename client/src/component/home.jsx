
import React ,{useEffect,useState,createContext,useContext} from 'react'
import { RollContext } from './ApiContext/createContext'
import RestrictionPage from './RestrictionPage'
import { useNavigate } from 'react-router-dom'

// import LogoSvg from '../asset/logoSvg'
export default function Home() {
    const Navigate = useNavigate()
    const aa = useContext(RollContext);
    const user = localStorage.getItem("user")
    console.log("aa restriction home",aa,user)


    window.addEventListener("scroll",()=>{
        const heading = document.getElementById("heading")
        const image = document.getElementById("image")
        const value = window.scrollY
        if(heading){
            heading.style.marginTop = value * 1.5 +"px";
        }
      
      
        

    })


  return (
    <>
    {aa?.home === true ?
    <div>
      <div className="relative flex w-full  h-screen overflow-auto">
        <div
          className=" w-[50%] flex flex-col justify-center items-center h-[500px]  overflow-hidden"
          style={{ backgroundColor: "#0099ff" }}
        >
          {/* <div><LogoSvg/></div> */}
          <h1
            id="heading"
            className="text-white text-[32px] font-bold  transition-all  hover:text-pink-200 "
          >
            {" "}
            Read today news feed
          </h1>
          <p className="px-4 text-slate-200">
            we alway try to feed letest new around world and stay updated to
            you....{" "}
          </p>
          <p className="px-4 text-slate-200">
            we provided nnews update regarding <b>sports</b> ,<b>tecnology</b>{" "}
            <b>,helth</b> <b>,business</b> <b>,bollywood</b>{" "}
          </p>
          <p className="text-slate-200">stay tune us....</p>
        </div>
        <div className="w-[50%] h-[500px] overflow-hidden">
          <img
            id="image"
            className="object-cover "
            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_1280.jpg"
            alt=""
          />
        </div>
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="">
        <div className="flex w-[70%] rounded-[20px] m-auto bg-blue-300 px-10 py-4 my-10 flex">
          <div className="flex w-4/6 justify-center mx-4 shadow-xl shadow-black-500">
            <img
              className="rounded-[20px] transition-all hover:animate-bounce rounded-[20px]"
              src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=360&t=st=1689500345~exp=1689500945~hmac=f8874ff3dd940d8d064ad025c7fdf9bf7915e99e6671af47ebf6b844ce0e2ac7"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum odio
            ipsa deserunt tenetur accusantium culpa sunt voluptas velit, neque
            eum assumenda, eaque quia obcaecati iure, dolor aliquid sint quidem
            non aspernatur doloribus vel. Mollitia accusamus atque distinctio
            ducimus accusantium doloribus natus, fugiat animi culpa, ullam magni
            illum ex amet aspernatur ab eos alias asperiores cupiditate dolores
            ipsa, similique eum aut tenetur. Beatae voluptatum quo rem sunt
            natus. Dicta velit cumque deleniti, facere quam maiores numquam
            cupiditate, similique molestias sunt cum nisi nam adipisci
            aspernatur officiis? Temporibus eum quo sit voluptatem quam quos
            quod pariatur rerum nihil tempore ad, perspiciatis quaerat.
          </p>
        </div>
        <div className="flex w-[70%] rounded-[20px] m-auto bg-blue-300 px-10 py-4 my-10">
          <div className="flex w-4/6 justify-center mx-4 shadow-xl shadow-black-500 rounded-[20px]">
            <img
              className="rounded-[20px] transition-all hover:animate-bounce "
              src="https://img.freepik.com/free-photo/young-woman-working-laptop-isolated-white-background_231208-1838.jpg?w=996&t=st=1689501299~exp=1689501899~hmac=f9a0341aeb60c31c232496c5ab857f8970df59834b04442af80f4b224a8e215f"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum odio
            ipsa deserunt tenetur accusantium culpa sunt voluptas velit, neque
            eum assumenda, eaque quia obcaecati iure, dolor aliquid sint quidem
            non aspernatur doloribus vel. Mollitia accusamus atque distinctio
            ducimus accusantium doloribus natus, fugiat animi culpa, ullam magni
            illum ex amet aspernatur ab eos alias asperiores cupiditate dolores
            ipsa, similique eum aut tenetur. Beatae voluptatum quo rem sunt
            natus. Dicta velit cumque deleniti, facere quam maiores numquam
            cupiditate, similique molestias sunt cum nisi nam adipisci
            aspernatur officiis? Temporibus eum quo sit voluptatem quam quos
            quod pariatur rerum nihil tempore ad, perspiciatis quaerat.
          </p>
        </div>
        <div className="flex w-[70%] rounded-[20px] m-auto bg-blue-300 px-10 py-4 my-10">
          <div className="flex w-4/6 justify-center mx-4 shadow-xl shadow-black-500 rounded-[20px]">
            <img
              className="rounded-[20px] transition-all hover:animate-bounce"
              src="https://img.freepik.com/free-photo/young-happy-smiling-businesswoman-holding-laptop-isolated_231208-241.jpg?w=996&t=st=1689501463~exp=1689502063~hmac=e289a3fa38ed43e7d957580c1e69a91e60c3cd56f66e1aea14ee503a76eaa3e5"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum odio
            ipsa deserunt tenetur accusantium culpa sunt voluptas velit, neque
            eum assumenda, eaque quia obcaecati iure, dolor aliquid sint quidem
            non aspernatur doloribus vel. Mollitia accusamus atque distinctio
            ducimus accusantium doloribus natus, fugiat animi culpa, ullam magni
            illum ex amet aspernatur ab eos alias asperiores cupiditate dolores
            ipsa, similique eum aut tenetur. Beatae voluptatum quo rem sunt
            natus. Dicta velit cumque deleniti, facere quam maiores numquam
            cupiditate, similique molestias sunt cum nisi nam adipisci
            aspernatur officiis? Temporibus eum quo sit voluptatem quam quos
            quod pariatur rerum nihil tempore ad, perspiciatis quaerat.
          </p>
        </div>
        <div className="flex w-[70%] rounded-[20px] m-auto bg-blue-300 px-10 py-4 my-10">
          <div className="flex w-4/6 justify-center mx-4 shadow-xl shadow-black-500 rounded-[20px]">
            <img
              className="rounded-[20px] transition-all hover:animate-bounce"
              src="https://img.freepik.com/free-photo/young-attractive-woman-modern-office-desk-working-with-laptop-thinking-about-something_1258-104524.jpg?w=996&t=st=1689502236~exp=1689502836~hmac=12a34095e7336d5e0c12beec324d2d9b7b9cd7f2d3ceb989c98adbc4fc02a016"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum odio
            ipsa deserunt tenetur accusantium culpa sunt voluptas velit, neque
            eum assumenda, eaque quia obcaecati iure, dolor aliquid sint quidem
            non aspernatur doloribus vel. Mollitia accusamus atque distinctio
            ducimus accusantium doloribus natus, fugiat animi culpa, ullam magni
            illum ex amet aspernatur ab eos alias asperiores cupiditate dolores
            ipsa, similique eum aut tenetur. Beatae voluptatum quo rem sunt
            natus. Dicta velit cumque deleniti, facere quam maiores numquam
            cupiditate, similique molestias sunt cum nisi nam adipisci
            aspernatur officiis? Temporibus eum quo sit voluptatem quam quos
            quod pariatur rerum nihil tempore ad, perspiciatis quaerat.
          </p>
        </div>
        <div className="flex w-[70%] rounded-[20px] m-auto bg-blue-300 px-10 py-4 my-10">
          <div className="flex w-4/6 justify-center mx-4 shadow-xl shadow-black-500 rounded-[20px]">
            <img
              className="rounded-[20px] transition-all hover:animate-bounce w-full"
              src="https://img.freepik.com/free-photo/young-happy-smiling-businesswoman-holding-laptop-isolated_231208-237.jpg?w=996&t=st=1689502257~exp=1689502857~hmac=7abeb52cf900af640d6bdc792f096bb75707c10e7bfe1cf37a9a8d174bbc2066"
              alt=""
            />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum odio
            ipsa deserunt tenetur accusantium culpa sunt voluptas velit, neque
            eum assumenda, eaque quia obcaecati iure, dolor aliquid sint quidem
            non aspernatur doloribus vel. Mollitia accusamus atque distinctio
            ducimus accusantium doloribus natus, fugiat animi culpa, ullam magni
            illum ex amet aspernatur ab eos alias asperiores cupiditate dolores
            ipsa, similique eum aut tenetur. Beatae voluptatum quo rem sunt
            natus. Dicta velit cumque deleniti, facere quam maiores numquam
            cupiditate, similique molestias sunt cum nisi nam adipisci
            aspernatur officiis? Temporibus eum quo sit voluptatem quam quos
            quod pariatur rerum nihil tempore ad, perspiciatis quaerat.
          </p>
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet porro exercitationem ea perspiciatis eligendi. Placeat libero qui nesciunt voluptas inventore expedita quia ab delectus animi consequatur dignissimos fugiat reiciendis adipisci, doloribus explicabo vitae sequi porro tenetur aliquam facilis vero hic? Reprehenderit laborum quam laboriosam, quas, inventore iure corrupti possimus fugiat sapiente itaque nemo tempore omnis molestias, aliquid facere id! Vitae beatae error eum blanditiis voluptas, id, obcaecati inventore et reiciendis, dolorum corrupti quisquam soluta amet eos officia quis nostrum placeat praesentium quas ab quasi non. Minima, officiis deserunt consequatur expedita ipsum aperiam fuga incidunt? Dignissimos corporis nisi exercitationem, iusto ipsum eum culpa sint eveniet. Molestias soluta atque saepe ut ratione voluptas assumenda doloribus in ad perferendis facere, facilis totam odio reprehenderit quas nam incidunt voluptatum hic culpa voluptatem architecto eaque amet! Ea suscipit recusandae voluptates, dolores possimus perspiciatis, at exercitationem maxime reprehenderit pariatur quis assumenda, commodi a quam? Debitis facere a eaque iste consequatur nihil quae illo. Doloremque modi animi perspiciatis quibusdam ipsa, nemo mollitia soluta, nesciunt adipisci aut, exercitationem maxime deleniti temporibus reiciendis quaerat eius praesentium pariatur deserunt iure unde nulla explicabo commodi! Rerum, quis! Quam facere obcaecati consequatur explicabo ipsa culpa harum quis maiores maxime iusto deserunt, animi nisi ad. Expedita ducimus praesentium quia, eveniet dignissimos illum provident minus nisi rerum molestias cum error id totam possimus unde maxime qui distinctio voluptatem! Corporis id, eligendi delectus debitis vel optio blanditiis at? Ab, aliquam! Excepturi corrupti numquam deserunt accusantium laborum mollitia fuga eligendi, ipsa blanditiis quidem fugit non minima laboriosam aliquam? Earum fugit maiores optio, reiciendis nisi nostrum distinctio officia et officiis sequi dolorem, blanditiis, vitae exercitationem voluptate vero. Ut quis cum, perspiciatis porro eaque magnam non expedita quibusdam corrupti maxime et nisi deserunt optio delectus. Voluptate totam voluptatum facere? Beatae, odio ipsam. Quisquam error laboriosam fuga quas odit sint aliquid nam. Reprehenderit ipsum id suscipit adipisci quas reiciendis voluptate. Dolorem, quae vitae laudantium sint modi voluptatem autem quis aliquam? Deserunt ullam reprehenderit aperiam nobis! Beatae voluptates rem magni est. Ratione unde tenetur numquam optio porro voluptatibus. Commodi numquam perspiciatis voluptate impedit atque possimus nostrum laudantium, voluptas facere! Maxime reiciendis error deleniti facere aperiam corporis molestiae doloribus quisquam doloremque dicta voluptate, vitae quasi voluptatem ullam blanditiis facilis consequuntur aspernatur vel iure iste tempora! Libero quae velit aspernatur labore omnis! Mollitia nisi asperiores eaque enim tenetur voluptatem quia quas atque itaque, reprehenderit similique doloremque dolorum architecto sit ex sed, eius quo modi quisquam autem expedita odit? Expedita odio nihil, iure deleniti vel, consequatur officiis illum excepturi architecto recusandae optio. Itaque tempora eveniet dignissimos exercitationem sed, laudantium a aliquam, quasi eum voluptas quo dicta adipisci? Laudantium exercitationem ipsa, eius esse repellat voluptatibus suscipit quo nesciunt omnis, praesentium error facere delectus ex ab dignissimos doloribus. Accusamus delectus repellendus cupiditate debitis! Explicabo ducimus nam illum delectus? Illo quam ipsa rerum, facilis, deleniti repellat possimus asperiores tempore voluptatem molestias hic recusandae accusantium omnis vero. Quae unde excepturi harum! Itaque eum suscipit labore voluptatibus quasi. Atque veniam, nesciunt quia incidunt praesentium quibusdam veritatis. Soluta, molestiae! Atque ipsa aliquam aperiam corrupti. Animi necessitatibus eaque dicta nobis temporibus enim veritatis? Similique non ut magni facilis exercitationem eum cumque, veritatis minus totam, doloremque enim nesciunt. Laborum distinctio aliquam omnis asperiores molestias facilis maxime recusandae vitae voluptatibus excepturi. Sapiente at magni eaque similique ratione, porro quod praesentium ex iusto nam vero laboriosam cum molestiae dolores aspernatur dolorem explicabo quasi mollitia laudantium accusantium suscipit reprehenderit placeat nisi nostrum. Maiores neque tempore assumenda ex soluta odit, voluptates consequatur dicta aut vitae necessitatibus magni ullam quam molestias optio dolorum culpa quod. Hic ipsum, repellat architecto, eum iusto dignissimos vitae molestiae velit quasi praesentium corrupti illum aut repellendus saepe aperiam nostrum quos omnis voluptatum pariatur consequuntur assumenda tempore culpa magni. Minima voluptatem animi ad delectus tempore perferendis at atque dicta deleniti! Molestias amet expedita rem consequatur, fugiat id minus earum fuga tempora debitis incidunt eveniet cum repellat reprehenderit eum eius laboriosam repellendus eos accusantium esse nisi possimus veniam quisquam soluta. Maiores eligendi delectus voluptatibus adipisci quas iste totam aperiam repellendus culpa placeat, esse et, vero, explicabo deserunt velit asperiores aut architecto beatae inventore corporis aliquid? Dolor culpa vitae quibusdam debitis nemo mollitia, earum soluta cupiditate. Quam fuga nemo quod laborum eius ducimus nobis, possimus debitis, velit qui ea tempore illum nulla blanditiis nam nostrum eveniet sit vitae, eos dicta dolorem. Mollitia, atque culpa. Iure neque, corrupti inventore, nihil doloribus dolore sed aperiam dolores quam architecto, dolor nisi libero atque temporibus. Nemo hic ipsum nulla blanditiis eveniet ipsa, veniam quaerat? Dignissimos voluptas dolorem soluta. Impedit, suscipit! Eveniet odio veniam suscipit cupiditate officiis, sint sed facere, doloribus ratione ea hic aliquam excepturi, rerum voluptatum nulla autem aliquid molestiae id quidem reiciendis iure. Velit, magnam, doloremque sint fugiat cum placeat iure a voluptas molestias rem ut totam at sunt beatae adipisci iste dignissimos repellat ratione. Nesciunt error itaque iure adipisci, nisi architecto, unde, officiis repellendus accusamus eum nihil illum similique alias quasi. Labore beatae facilis nihil reprehenderit earum voluptas ea molestias placeat ratione saepe quas provident doloribus laboriosam nam necessitatibus aliquid voluptate ducimus non sequi quod eaque numquam, rerum quaerat. Culpa, laborum animi. Explicabo rem iure officia exercitationem, ea amet? Rem mollitia natus excepturi voluptas maiores ut explicabo dolorum earum error asperiores atque voluptatum similique laboriosam commodi nemo, nesciunt laborum dolores sed quis dolor et? Placeat vitae recusandae animi magnam dolores aut commodi nostrum blanditiis veniam aperiam quidem voluptate, amet adipisci at incidunt neque eius atque. Neque vitae, minus, in veniam numquam a maiores temporibus blanditiis, debitis magnam tempore eos optio sunt. Beatae accusamus nemo eaque consequuntur repellendus, autem provident quasi qui assumenda fugiat, esse ullam quibusdam alias minima magnam perspiciatis nihil eius! Sunt fuga libero consequuntur quaerat nesciunt nobis dolores doloribus iure perferendis accusantium illum, quod et. Porro provident veritatis sunt est placeat ea accusamus odit, possimus, ducimus a esse, maxime quis quae qui eligendi. Laudantium aliquid alias mollitia aliquam adipisci et nobis totam aut. Dignissimos obcaecati odit quas rerum, facilis distinctio inventore voluptatibus culpa facere ipsum iure tempora numquam laborum autem eaque alias.</p> */}
      </div>
    </div>: <RestrictionPage/>
    
    
    
    
    }
    </>
  );
}
