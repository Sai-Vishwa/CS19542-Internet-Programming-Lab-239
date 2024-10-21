import { useEffect, useState, Suspense   } from 'react'
import '../index.css'
import { useNavigate ,Link } from "react-router-dom"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { MeshNormalMaterial } from 'three';
import Select from 'react-select';

const Model = () => {
  // Load the GLB file
  const { scene, animations } = useGLTF('/elasto_proxy_-_bus.glb');
  // Load the animations using the useAnimations hook
  const { actions } = useAnimations(animations, scene);

  // scene.traverse((child) => {
  //   if (child.isMesh) {
  //     // Apply a new material with the desired color
  //     child.material = new MeshNormalMaterial(); // Set the color to red, or any color you like
  //   }
  // });

  // Play the animation once the model is loaded
  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return <primitive object={scene} />;
};

function Home(){
   localStorage.setItem("login",false)
   const locationarr = [{'value':'chennai','label':"Chennai"},{'value':'kanchipuram','label':'Kanchipuram'},{'value':'trichy','label':'Trichy'},{'value':'salem','label':'Salem'}];
   const locationarr2 = ['Chennai','Kanchipuram','Trichy','Salem']
   const [source , setsource] = useState("From Station");
   const [sourceerr,setsourceerr] = useState("");
   const [dest , setdest] = useState("To Station");
   const [desterr,setdesterr] = useState("");
   const [date,setdate] = useState("dd/mm/yyyyy");
   const [dateerr,setdateerr] = useState("");
   const [bus,setbus] = useState("../bus (3).png");
   const [loc,setloc] = useState("../gps.png");
   const [dt,setdt] = useState("../calendar.png");


   const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      color:'#000000',
  }),
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      border: 'none', // Tailwind's border-gray-300
      boxShadow: 'none',
      padding: 'none',
      width: '100%',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#edf2f7' : 'white', // Tailwind's bg-gray-100
      color: '#000000', // Tailwind's text-gray-800
      padding: '0.5rem',
      '&:hover': {
        backgroundColor: '#ee0000',
        color: '#ffffff' // Tailwind's hover bg-gray-300
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Tailwind's shadow-md
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#000000', // Tailwind's text-gray-800
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#ee0000', // Change dropdown arrow color to red
      '&:hover': {
        color: '#ee0000', // Make sure it stays red on hover
      },
    }),
    indicatorSeparator: () => ({ // Remove the separator line next to the arrow
      display: 'none',
    }),
  };

   const nav = useNavigate();

   useEffect(()=>{
    if(source===""){
      setsource("From Station");
    }
    if(dest===""){
      setdest("To Station");
    }
   },[source,dest])

   function check(){
    const today = new Date();
    const maxdate = new Date();
    const inpdate = new Date(date);
    maxdate.setDate(today.getDate()+30);
    let flag=0;
    if(!locationarr2.includes(source)){
      flag=1;
      setsourceerr("* Choose a valid starting point");
    }
    else{
      setsourceerr("");
    }
    if(!locationarr2.includes(dest)){
        flag=1;
      setdesterr("* Choose a valid destination");
    }
    else if(source===dest){
        flag=1;
      setdesterr("* Destination is same as starting point");
    }
    else{
      setdesterr("");
    }
    if(isNaN(inpdate.getTime())){
        flag=1;
      setdateerr("* Enter a valid date");
    }
    else if(inpdate<today){
        flag=1;
      setdateerr("* Cannot book tickets for the past");
    }
    else if(inpdate>maxdate){
        flag=1;
      setdateerr("* Advance booking available only for 30 days")
    }
    else{
      setdateerr("");
    }
    if(flag===0){
        localStorage.setItem("source",source);
        localStorage.setItem("dest",dest);
        localStorage.setItem("date",date);
        nav("/search-result",{state:{"source":source,"dest":dest,"date":date}});
    }
   }

  return (
    <>

    <style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Oxygen:wght@300;400;700&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
</style>

    <div className='block h-screen '>
        <div className='bg-red-600 w-full h-1/5 block'>
        <div className='w-full  flex justify-center relative'>
        <button onClick={()=>{nav("/login-signup")}} className='absolute text-white right-0 bottom-1/2 transform -translate-x-1/2 translate-y-1/2  hover:bg-slate-100 hover:text-red-600  font-oxy bg-red-600 border-2 border-white rounded-lg pl-2 pr-2 pt-1 pb-1'>Login/SignUp</button>
        <div className='block'>
        <p className='font-pw text-5xl text-white mt-3'>Cache Bus</p>
        <p className='font-oxy ml-1.5 text-sm text-white'>fast, reliable and ready like cached data.</p>
        </div>
        </div>
        <div className='flex w-2/5 ml-4 justify-between'>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/')}}>Home</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#about-us')}}>About Us</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#faq')}}>FAQ</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/reviews#testimonials')}}>Testimonials</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#contct-us')}}>Contact Us</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/reviews#support')}}>Support</p>
        </div>
        </div>
    <div className='flex h-4/5 '>
    <div className='w-3/5 h-full '>
      {/* <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas> */}
    </div>
    {/* <div className="w-3/5 h-full sketchfab-embed-wrapper"> <iframe title="City Bus - rigged" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/36646fcf41da498ca24a02f4b6fb1d95/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/city-bus-rigged-36646fcf41da498ca24a02f4b6fb1d95?utm_medium=embed&utm_campaign=share-popup&utm_content=36646fcf41da498ca24a02f4b6fb1d95" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> City Bus - rigged </a> by <a href="https://sketchfab.com/grox777?utm_medium=embed&utm_campaign=share-popup&utm_content=36646fcf41da498ca24a02f4b6fb1d95" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Yo.Ri </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=36646fcf41da498ca24a02f4b6fb1d95" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div> */}
        
    <div className='block w-1/3 p-5 relative border-red-500 border-2 mt-12 h-fit rounded-3xl mx-auto'>
      
      
      <div className='border-2 border-red-500 flex mt-6 rounded-lg'>


      
        <div className='flex items-center'>
        <img src={bus} alt="" className='max-h-5  px-1'/>
        
        </div>
        <Select options={locationarr} isSearchable={true} placeholder={source} onChange={(e)=>{setsource(e.label)}} onBlur={()=>{setbus("../bus (3).png")}} onFocus={()=>{setbus("../bus (4).png");}} className='border-none font-oxy focus:border-none focus:outline-none pl-5 focus:caret-red-600 w-full' styles={customStyles}/>

      </div>

      <p className='text-xs text-red-600 m-0 font-oxy'>{sourceerr}</p>

      <div className='border-2 border-red-500 flex mt-10 rounded-lg'>
        <div className='flex items-center'>
        <img src={loc} alt="" className='max-h-5 pl-1'/>
        </div>
        <Select options={locationarr} isSearchable={true} placeholder={dest} onChange={(e)=>{setdest(e.label)}} onBlur={()=>{setloc("../gps.png")}} onFocus={()=>{setloc("../gps (1).png");}} className='border-none font-oxy focus:border-none focus:outline-none pl-5 focus:caret-red-600 w-full' styles={customStyles}/>
      </div>

      <p className='text-xs text-red-600 m-0 font-oxy'>{desterr}</p>

      <div className='border-2 border-red-500 flex mt-10 rounded-lg p-2'>
        <div className='flex items-center'>
        <img src={dt} alt="" className='max-h-4  px-1'/>
        </div>
        <input type="date" onFocus={()=>{setdt("../calendar (1).png");}} onBlur={()=>{setdt("../calendar.png")}} onChange={(e)=>{setdate(e.target.value)}} placeholder={date} className='font-oxy appearance-none border-none focus:border-none focus:outline-none pl-5 focus:caret-red-600'/>
      </div>

      <p className='text-xs text-red-600 m-0 font-oxy'>{dateerr}</p>
      <div className='mb-6'></div>


      <input type="button" value="Check" onClick={check}  className='font-oxy absolute bottom-0 left-1/2 transform  -translate-x-1/2 translate-y-1/2 bg-white text-red-600 pt-1 pb-1 pl-2 pr-2 hover:bg-red-600 hover:text-white cursor-pointer  border-2 border-red-600 rounded-lg'/>


    </div>
    </div>
    </div>
    </>
  )
}

export default Home;