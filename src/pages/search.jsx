import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../index.css'
import Select from 'react-select';


function Search() {
    const location = useLocation();
    const nav = useNavigate();
    const locationarr = [{'value':'chennai','label':"Chennai"},{'value':'kanchipuram','label':'Kanchipuram'},{'value':'trichy','label':'Trichy'},{'value':'salem','label':'Salem'}];
    const locationarr2 = ['Chennai','Kanchipuram','Trichy','Salem']
    const timearr = [{'value':'Any',"label":'Any'},{'value':'00:00',label:'00:00'},
        {'value':'00:30',label:'00:30'},{'value':'01:00',label:'01:00'},{'value':'01:30',label:'01:30'},
        {'value':'02:00',label:'02:00'},{'value':'02:30',label:'02:30'},{'value':'03:00',label:'03:00'},
        {'value':'03:30',label:'03:30'},{'value':'04:00',label:'04:00'},{'value':'04:30',label:'04:30'},
        {'value':'05:00',label:'05:00'},{'value':'05:30',label:'05:30'},{'value':'06:00',label:'06:00'},
        {'value':'06:30',label:'06:30'},{'value':'07:00',label:'07:00'},{'value':'07:30',label:'07:30'},
        {'value':'08:00',label:'08:00'},{'value':'08:30',label:'08:30'},{'value':'09:00',label:'09:00'},
        {'value':'09:30',label:'09:30'},{'value':'10:00',label:'10:00'},{'value':'10:30',label:'10:30'},
        {'value':'11:00',label:'11:00'},{'value':'11:30',label:'11:30'},{'value':'12:00',label:'12:00'},
        {'value':'12:30',label:'12:30'},{'value':'13:00',label:'13:00'},{'value':'13:30',label:'13:30'},
        {'value':'14:00',label:'14:00'},{'value':'14:30',label:'14:30'},{'value':'15:00',label:'15:00'},
        {'value':'15:30',label:'15:30'},{'value':'16:00',label:'16:00'},{'value':'16:30',label:'16:30'},
        {'value':'17:00',label:'17:00'},{'value':'17:30',label:'17:30'},{'value':'18:00',label:'18:00'},
        {'value':'18:30',label:'18:30'},{'value':'19:00',label:'19:00'},{'value':'19:30',label:'19:30'},
        {'value':'20:00',label:'20:00'},{'value':'20:30',label:'20:30'},{'value':'21:00',label:'21:00'},
        {'value':'21:30',label:'21:30'},{'value':'22:00',label:'22:00'},{'value':'22:30',label:'22:30'},
        {'value':'23:00',label:'23:00'},{'value':'23:30',label:'23:30'}]
    const pricearr =[{'value':'Any',"label":'Any'},{'value':'50',label:'50'},{'value':'100',label:'100'},
        {'value':'150',label:'150'},{'value':'200',label:'200'},{'value':'250',label:'250'},
        {'value':'300',label:'300'},{'value':'400',label:'400'},{'value':'500',label:'500'},
        {'value':'600',label:'600'},{'value':'700',label:'700'},{'value':'800',label:'800'},
        {'value':'900',label:'900'},{'value':'1000',label:'1000'}
    ]
    const typearr =[{'value':'Any',"label":'Any'},{'value':'NON AC',label:'NON AC'},{'value':'AC-SLP',label:'AC-SLP'}]
    let source = localStorage.getItem("source");
    let dest = localStorage.getItem("dest");
    let date = localStorage.getItem("date");
    const [data , setdata] = useState({"source":"","dest":"","date":""});
    const [ddata , setddata] = useState({"source":"","dest":"","date":""})
    const [buses,setbuses] = useState([]);
    const [fbus , setfbus] = useState([]);
    const [filter , setfilter] = useState({"timefrom":"Any","timeto":"Any","farefrom":"Any","fareto":"Any","type":"Any"})
    const [dfilter , setdfilter] = useState({"timefrom":"Any","timeto":"Any","farefrom":"Any","fareto":"Any","type":"Any"})
    const [bus,setbus] = useState("../bus (3).png");
    const [loc,setloc] = useState("../gps.png");
    const [dt,setdt] = useState("../calendar.png");
    const [sourceerr,setsourceerr] = useState("");
    const [desterr,setdesterr] = useState("");
    const [dateerr,setdateerr] = useState("");
    const [profileview,setprofileview] = useState("hidden");
    const [profilecontent,setprofilecontent] =useState(true);

    useEffect(()=>{
        if(!source || !dest || date=="dd/mm/yyyy"){
            alert("you cant directly access this page");
            nav("/");
        }
        else{
            setdata({"source":source,"dest":dest,"date":date});
            setddata({"source":source,"dest":dest,"date":date});
        }
    },[])

    useEffect(()=>{
        //FETCH FROM DB SHOULD BE DONE
        if(data.source=="Chennai" && data.dest=="Kanchipuram"){
            setbuses([{"name":"Regular Cache","from":"Chennai CMBT","to":"Kanchipuram MainBusStand","time":"07:00","etime":"10:00","type":"NON AC","fare":"80","sleft":"18","seats":["y","y","n","n","y","n","y","y","y","y","y","n","y","n","y","n","n","n","y","y","n","n","y","y","y","y","y","n","n","n","n","y"]},
                      {"name":"AC Cache","from":"Chennai Kilambakkam","to":"Kanchipuram MainBusStand","time":"11:00","etime":"14:00","type":"AC-SLP","fare":"150","sleft":"26","seats":["y","y","y","y","n","y","n","y","y","y","n","y","n","y","y","y","y","y","n","y","y","y","y","n","y","y","y","y","y","y","y","y"]},
                      {"name":"Express Non AC","from":"Chennai Kilambakkam","to":"Kanchipuram MainBusStand","time":"15:00","etime":"18:00","type":"NON AC","fare":"80","sleft":"18","seats":["y","y","n","n","y","n","y","y","y","y","y","n","y","n","y","n","n","n","y","y","n","n","y","y","y","y","y","n","n","n","n","y"]}])
            setfilter({"timefrom":"Any","timeto":"Any","farefrom":"Any","fareto":"Any","type":"Any"})
            setfbus([{"name":"Regular Cache","from":"Chennai CMBT","to":"Kanchipuram MainBusStand","time":"07:00","etime":"10:00","type":"NON AC","fare":"80","sleft":"18","seats":["y","y","n","n","y","n","y","y","y","y","y","n","y","n","y","n","n","n","y","y","n","n","y","y","y","y","y","n","n","n","n","y"]},
                {"name":"AC Cache","from":"Chennai Kilambakkam","to":"Kanchipuram MainBusStand","time":"11:00","etime":"14:00","type":"AC-SLP","fare":"150","sleft":"26","seats":["y","y","y","y","n","y","n","y","y","y","n","y","n","y","y","y","y","y","n","y","y","y","y","n","y","y","y","y","y","y","y","y"]},
                {"name":"Express Non AC","from":"Chennai Kilambakkam","to":"Kanchipuram MainBusStand","time":"15:00","etime":"18:00","type":"NON AC","fare":"80","sleft":"18","seats":["y","y","n","n","y","n","y","y","y","y","y","n","y","n","y","n","n","n","y","y","n","n","y","y","y","y","y","n","n","n","n","y"]}]);
            }
    },[data])

    useEffect(()=>{
        let temp = buses;
        if(filter.farefrom!="Any"){
            temp=temp.filter((bus)=>{
                if(parseInt(bus.fare)>=parseInt(filter.farefrom)){
                    return true;
                }
                else{
                    return false;
                }
            })
        }
        if(filter.fareto!="Any"){
            temp= temp.filter((bus)=>{
                if(parseInt(bus.fare)<=parseInt(filter.fareto)){
                    return true;
                }
                else{
                    return false;
                }
            })
        }
        if(filter.timefrom!="Any"){
            temp = temp.filter((bus)=>{
                if(parseInt(bus.time.split(":")[0])>parseInt(filter.timefrom.split(":")[0])){
                    return true;
                }
                else if(parseInt(bus.time.split(":")[0])==parseInt(filter.timefrom.split(":")[0])){
                    if(parseInt(bus.time.split(":")[1])>=parseInt(filter.timefrom.split(":")[1])){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else{
                    return false;
                }
            })
        }

        if(filter.timeto!="Any"){
            temp = temp.filter((bus)=>{
                if(parseInt(bus.time.split(":")[0])<parseInt(filter.timeto.split(":")[0])){
                    return true;
                }
                else if(parseInt(bus.time.split(":")[0])==parseInt(filter.timeto.split(":")[0])){
                    if(parseInt(bus.time.split(":")[1])<=parseInt(filter.timeto.split(":")[1])){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else{
                    return false;
                }
            })
        }
        if(filter.type!="Any"){
            temp = temp.filter((bus)=>{
                if(bus.type==filter.type){
                    return true;
                }
                else{
                    return false;
                }
            })
        }
        temp.map(i=>(console.log(i)));
        setfbus(temp);

    },[filter])

    const customStylesFilter = {
        input: (provided) =>({
            ...provided,
            caretColor : '#ffffff'
        }),
        placeholder: (provided) => ({
            ...provided,
            color:'white',
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: '#991b1b',
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
            backgroundColor: '#991b1b',
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
          color: '#ffffff', // Tailwind's text-gray-800
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: '#ffffff', // Change dropdown arrow color to red
          '&:hover': {
            color: '#ffffff', // Make sure it stays red on hover
          },
        }),
        indicatorSeparator: () => ({ // Remove the separator line next to the arrow
          display: 'none',
        }),
      };

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


    function errfunc(){
        const today = new Date();
    const maxdate = new Date();
    const inpdate = new Date(ddata.date);
    maxdate.setDate(today.getDate()+30);
    let flag=0;
    if(!locationarr2.includes(ddata.source)){
      flag=1;
      setsourceerr("* Choose a valid starting point");
    }
    else{
      setsourceerr("");
    }
    if(!locationarr2.includes(ddata.dest)){
        flag=1;
      setdesterr("* Choose a valid destination");
    }
    else if(ddata.source===ddata.dest){
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
    if(flag==0 && data!=ddata){
        localStorage.setItem("source",ddata.source);
        localStorage.setItem("dest",ddata.dest);
        localStorage.setItem("date",ddata.date);
        setdata(ddata);
    }
}

function filterfunc (){
    let flag=0;
    if(parseInt(dfilter.farefrom)>parseInt(dfilter.fareto)){
        flag=1;
        alert("Min Fare can't be higher than Max Fare");
    }
    else if(parseInt(dfilter.timefrom.split(":")[0])>parseInt(dfilter.timeto.split(":")[0])){
        flag=1;
        alert("Min Time can't be higher than Max Time");
    }
    else if(parseInt(dfilter.timefrom.split(":")[0])==parseInt(dfilter.timeto.split(":")[0])){
        if(parseInt(dfilter.timefrom.split(":")[1])>parseInt(dfilter.timeto.split(":")[1])){
            flag=1;
            alert("Min Time can't be higher than Max Time");
        }
    }
    else{
        console.log(JSON.stringify(dfilter));
        setfilter(dfilter);
    }
}

function profile(){
    console.log("inside profile")
    if(profileview=="hidden"){setprofileview("block")}
    else{setprofileview("hidden")}
    setprofilecontent(localStorage.getItem("login"))
}

    return(
    <>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Oxygen:wght@300;400;700&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
</style>
    





<div className="w-screen h-screen block overflow-x-hidden overflow-y-scroll">
        <div className="block h-1/6  bg-red-600 relative">
        <div className='flex w-2/5 ml-4 justify-between mb-4'>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/')}}>Home</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#about-us')}}>About Us</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#faq')}}>FAQ</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/reviews#testimonials')}}>Testimonials</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#contct-us')}}>Contact Us</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/reviews#support')}}>Support</p>
        </div>
        <p className='text-white cursor-pointer hover:underline font-oxy absolute right-0 top-0 transform -translate-x-1/2 translate-y-1/4' onClick={profile}>My Profile</p>
        <div className={`absolute bg-red-500 border-2 border-white ${profileview} rounded-xl p-3 transform right-0 top-0 -translate-x-1/6 translate-y-1/2`} >
            {profilecontent=="false"?(
                <div className="block">
                <div className="text-sm font-oxy text-white mx-auto w-full mb-2">Seems like You haven't Logged In yet.</div>
                <div className="text-sm font-oxy text-white hover:underline mx-auto w-5/6" onClick={()=>{nav("/login-signup")}}>Click here to SignUp/Login</div>
                </div>
            ):(<div className="block">
                    <div className="text-sm font-oxy text-white hover:underline mx-auto w-5/6" onClick={()=>{nav("/cancel")}}>Click here to Cancel a booking</div>
                    <div className="text-sm font-oxy text-white hover:underline mx-auto w-5/6" onClick={()=>{nav("/history")}}>Click here to see Previous Booking History</div>
            </div>)}
            </div>
        <div className="flex justify-around ">
            <div className="block m-0 p-0 w-1/6">
            <div className="bg-white flex p-0 items-center border-none rounded-lg w-full">
                <div className='flex items-center'>
                    <img src={bus} alt="" className='max-h-5 pl-1'/>
                </div>
                <Select options={locationarr} isSearchable={true} placeholder={ddata.source} onChange={(e)=>{setddata((pre)=>{return ({"source":e.label,"dest":pre.dest,"date":pre.date})})}} onBlur={()=>{setbus("../bus (3).png")}} onFocus={()=>{setbus("../bus (4).png");}} className='border-none font-oxy focus:border-none focus:outline-none pl-5 focus:caret-red-600 w-full' styles={customStyles}/>
            </div>
            <p className="text-xs font-oxy m-0 text-white">{sourceerr}</p>
            </div>

            <div className="block m-0 p-0 w-1/6">
            <div className="bg-white flex p-0 items-center border-none rounded-lg w-full">
                <div className='flex items-center'>
                    <img src={loc} alt="" className='max-h-5 pl-1'/>
                </div>
                <Select options={locationarr} isSearchable={true} placeholder={ddata.dest} onChange={(e)=>{setddata((pre)=>{return ({"source":pre.source,"dest":e.label,"date":pre.date})})}} onBlur={()=>{setloc("../gps.png")}} onFocus={()=>{setloc("../gps (1).png");}} className='border-none font-oxy focus:border-none focus:outline-none pl-5 focus:caret-red-600 w-full' styles={customStyles}/>
            </div>
            <p className="text-xs font-oxy m-0 text-white">{desterr}</p>
            </div>
            
            <div className="block m-0 p-0 w-1/6">
            <div className="bg-white flex p-1 items-center border-none rounded-lg w-full">
                <div className='flex items-center'>
                    <img src={dt} alt="" className='max-h-4 pl-1'/>
                </div>
                <input type="date" onFocus={()=>{setdt("../calendar (1).png");}} onBlur={()=>{setdt("../calendar.png")}} onChange={(e)=>{setddata((pre)=>{return ({"source":pre.source,"dest":pre.dest,"date":e.target.value})})}} value={ddata.date} className='font-oxy appearance-none border-none focus:border-none focus:outline-none pl-5 focus:caret-red-600'/>
            </div>
            <p className="text-xs font-oxy m-0 text-white">{dateerr}</p>
            </div>
            <div>
            <button className="cursor-pointer bg-white text-red-600 rounded-lg font-oxy hover:bg-red-500 hover:text-white px-6 py-1.5" onClick={errfunc}>Search</button>
            </div>
            
        </div>
        </div>

        <div className="w-full flex h-5/6">
            <div className="block w-1/5 bg-red-800 h-screen overflow-y-auto">
                <div className="flex items-center justify-center rounded-lg border-2 border-white w-1/2 mt-3 mx-auto">
                    <p className="text-white font-oxy text-lg">Filters</p>
                </div>
                <div className="block w-full">
                    <div className="flex w-5/6 border-2 border-white mx-auto mt-6 rounded-lg">
                        <div className="block py-1  w-1/2">
                            <div className="text-sm font-oxy text-white flex justify-center">Min Time</div>
                            <Select options={timearr} isSearchable={true} placeholder={dfilter.timefrom} onChange={(e)=>{setdfilter((pre)=>{return ({...pre , "timefrom":e.label})})}}  styles={customStylesFilter}/>
                        </div>
                        <div className="block py-1 w-1/2">
                        <div className="text-sm font-oxy text-white flex justify-center">Max Time</div>
                        <Select options={timearr} isSearchable={true} placeholder={dfilter.timeto} onChange={(e)=>{setdfilter((pre)=>{return ({...pre , "timeto":e.label})})}}  styles={customStylesFilter}/>
                        </div>
                        
                    </div>


                    <div className="flex w-5/6 border-2 border-white mx-auto mt-6 rounded-lg">
                        <div className="block py-1  w-1/2">
                            <div className="text-sm font-oxy text-white flex justify-center">Min Fare</div>
                            <Select options={pricearr} isSearchable={true} placeholder={dfilter.farefrom} onChange={(e)=>{setdfilter((pre)=>{return ({...pre , "farefrom":e.label})})}}  styles={customStylesFilter}/>
                        </div>
                        <div className="block py-1 w-1/2">
                        <div className="text-sm font-oxy text-white flex justify-center">Max Fare</div>
                        <Select options={pricearr} isSearchable={true} placeholder={dfilter.fareto} onChange={(e)=>{setdfilter((pre)=>{return ({...pre , "fareto":e.label})})}}  styles={customStylesFilter}/>
                        </div>
                    
                    </div>

                    <div className="flex w-5/6 border-2 border-white mx-auto mt-6 rounded-lg justify-center">
                        <div className="block py-1">
                            <div className="text-sm font-oxy text-white flex justify-center">Bus Type</div>
                            <Select options={typearr} isSearchable={true} placeholder={dfilter.type} onChange={(e)=>{setdfilter((pre)=>{return ({...pre , "type":e.label})})}}  styles={customStylesFilter}/>
                        </div>
                        
                    </div>

                    <div className="flex justify-center my-6">
                        <button className="border-2 border-white rounded-lg bg-red-800 text-white font-oxy px-2 py-1 hover:bg-white hover:text-red-800 cursor-pointer" onClick={filterfunc}>Apply</button>
                    </div>

                </div>

            </div>

            <div className="w-5/6 block">
                <div className="justify-center text-lg mt-2 ml-2 w-1/2 text-red-500">Search Results :</div>
                <ul>
                    {fbus.map((bus,index)=>(
                        <li key={index} className="block border-2 group border-red-500 bg-red-500 text-white cursor-pointer hover:border-red-400 hover:shadow-2xl rounded-xl w-5/6 mx-auto my-10" onClick={()=>{localStorage.setItem("bus",JSON.stringify(fbus[index]));
                            nav("/book-ticket")}}>
                            <div className="flex justify-between">
                                <div className="p-2 text-lg">{bus.name}</div>
                                <div className="p-2 text-lg">{bus.time+" - "+bus.etime}</div>
                            </div>
                            <div className="flex justify-around">
                                <div className="border-2 border-red-400 group-hover:border-red-400 block w-1/6 mb-4 relative rounded-lg">
                                    <div className="absolute border-2 border-red-400 group-hover:border-red-400 bg-red-500 text-white text-sm rounded-lg px-2 py-1 top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">From</div>
                                    <div className="text-lg pt-3 pb-1 px-2">{bus.from.split(" ")[0]}</div>
                                    <div className="text-sm py-1 px-2">{bus.from.split(" ")[1]}</div>
                                </div>
                                <div className="border-2 border-red-400 group-hover:border-red-400 block w-1/6 mb-4 relative rounded-lg">
                                <div className="absolute border-2 border-red-400 group-hover:border-red-400 bg-red-500 text-white text-sm rounded-lg px-2 py-1 top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">To</div>
                                <div className="text-lg pt-3 pb-1 px-2">{bus.to.split(" ")[0]}</div>
                                    <div className="text-sm py-1 px-2">{bus.to.split(" ")[1]}</div>
                                </div>
                                <div className="border-2 border-red-400 group-hover:border-red-400 flex justify-center items-center w-1/6 mb-4 relative rounded-lg">
                                <div className="absolute border-2 border-red-400 group-hover:border-red-400 bg-red-500 text-white text-sm rounded-lg px-2 py-1 top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">Rate</div>
                                <div className="text-lg flex justify-center items-center">{"Rs."+bus.fare+".00"}</div>
                                </div>
                                
                            </div>
                            <div className="flex justify-between">
                                <div className="p-2 text-sm">{"Seats left - "+bus.sleft}</div>
                                <div className="p-2 text-sm">{"Type - "+bus.type}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    </div>





    </>
    )
}

export default Search;