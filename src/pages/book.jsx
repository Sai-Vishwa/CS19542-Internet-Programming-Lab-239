import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Book(){
    const location = useLocation();
    const nav = useNavigate();      
    const [bus,setbus] = useState(JSON.parse(localStorage.getItem("bus")));
    const [seatset1 , setseatset1] = useState([]);
    const [seatset2 , setseatset2] = useState([]);
    const [seatset3 , setseatset3] = useState([]);
    const [seatset4 , setseatset4] = useState([]);
    const [seatsel , setseatsel] = useState(0);
    // useEffect(()=>{console.log(seatset1)},[seatset1])
    useEffect(()=>{
        if(!bus){
            alert("You can't access book ticket page directly");
            nav("/");
        }
        else{
            setseatset1(bus.seats.slice(0,8));
            setseatset2(bus.seats.slice(8,16));
            setseatset3(bus.seats.slice(16,24));
            setseatset4(bus.seats.slice(24,32));
        }
    },[]) 

    function book(){
        if(seatsel == 0){
            alert("Select atleast 1 seat.")
        }
        else{
            
        }
    }
    return(<>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Oxygen:wght@300;400;700&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
</style>
<div className="w-screen h-screen block overflow-x-hidden overflow-y-scroll">
        <div className="flex justify-center items-center   bg-red-600 w-full h-auto ">
        <div className='flex w-2/5 ml-4 justify-between items-center py-2'>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/')}}>Home</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#about-us')}}>About Us</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#faq')}}>FAQ</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/reviews#testimonials')}}>Testimonials</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/details#contct-us')}}>Contact Us</p>
        <p className='text-white cursor-pointer hover:underline font-oxy' onClick={()=>{nav('/reviews#support')}}>Support</p>
        </div>
        </div>
        <div className="block border-2 group border-red-500 bg-red-500 text-white hover:border-red-400 hover:shadow-2xl rounded-xl w-5/6 mx-auto mt-2">    
                            <div className="flex justify-between">
                                <div className="p-2 text-lg">{bus.name}</div>
                                <div className="p-2 text-lg">{bus.time+" - "+bus.etime}</div>
                            </div>
                            <div className="flex justify-around">
                                <div className="border-2 border-red-400 group-hover:border-red-400 block w-1/6 mb-4 relative rounded-lg">
                                    <div className="absolute border-2 border-red-400 group-hover:border-red-400 bg-red-500 text-white text-sm rounded-lg px-2 py-1 top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">From</div>
                                    <div className="text-lg pt-3 pb-1 px-2">{bus.from}</div>
                                    <div className="text-sm py-1 px-2">{bus.from}</div>
                                </div>
                                <div className="border-2 border-red-400 group-hover:border-red-400 block w-1/6 mb-4 relative rounded-lg">
                                <div className="absolute border-2 border-red-400 group-hover:border-red-400 bg-red-500 text-white text-sm rounded-lg px-2 py-1 top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">To</div>
                                <div className="text-lg pt-3 pb-1 px-2">{bus.to}</div>
                                    <div className="text-sm py-1 px-2">{bus.to}</div>
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
                        </div>


                        <div className="w-fit mx-auto rounded-xl border-2 border-red-600 mt-2">
                            <div className="block">
                            <div className="flex mt-1 mb-1">
                                <div className="mx-3">
                                    <img src="../steering-wheel.png" alt=""  className="max-h-10"/>
                                </div>
                                <ul className="flex justify-between">
                                    {seatset1.map((seat,index) => (
                                        <li key={index}>
                                            {console.log(seat)}
                                            {seat === 'y' ? (<img src="../seat.png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                onClick={() => {
                                                let dummy = [...seatset1]; // Make a copy of the array
                                                dummy[index] = 'c'; // Modify the copy
                                                setseatset1(dummy);
                                                setseatsel(seatsel+1);
                                                }}/>)
                                                : seat === 'n' ? (<img src="../seat (1).png" alt="" className="max-h-10 mx-2" />) 
                                                : seat === 'c' ? (<img src="../seat (2).png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                    onClick={() => {
                                                    let dummy = [...seatset1]; 
                                                    dummy[index] = 'y'; 
                                                    setseatset1(dummy); 
                                                    setseatsel(seatsel-1);

                                                    }}/>)
                                                :(<div></div>)}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex mt-1 mb-5">
                                <div className="mx-3 mr-11">
                                    
                                </div>
                                <ul className="flex justify-between">
                                    {seatset2.map((seat,index) => (
                                        <li key={index}>
                                            {console.log(seat)}
                                            {seat === 'y' ? (<img src="../seat.png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                onClick={() => {
                                                let dummy = [...seatset2]; // Make a copy of the array
                                                dummy[index] = 'c'; // Modify the copy
                                                setseatset2(dummy);
                                                setseatsel(seatsel+1);
                                                }}/>)
                                                : seat === 'n' ? (<img src="../seat (1).png" alt="" className="max-h-10 mx-2" />) 
                                                : seat === 'c' ? (<img src="../seat (2).png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                    onClick={() => {
                                                    let dummy = [...seatset2]; 
                                                    dummy[index] = 'y'; 
                                                    setseatset2(dummy); 
                                                    setseatsel(seatsel-1);

                                                    }}/>)
                                                :(<div></div>)}
                                        </li>
                                        
                                    ))}
                                </ul>
                            </div>

                            <div className="flex mt-8 mb-1">
                                <div className="mx-3 mr-11">
                                    
                                </div>
                                <ul className="flex justify-between">
                                    {seatset3.map((seat,index) => (
                                        <li key={index}>
                                            {console.log(seat)}
                                            {seat === 'y' ? (<img src="../seat.png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                onClick={() => {
                                                let dummy = [...seatset3]; // Make a copy of the array
                                                dummy[index] = 'c'; // Modify the copy
                                                setseatset3(dummy); // Set the state with the new array
                                                setseatsel(seatsel+1);

                                                }}/>)
                                                : seat === 'n' ? (<img src="../seat (1).png" alt="" className="max-h-10 mx-2" />) 
                                                : seat === 'c' ? (<img src="../seat (2).png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                    onClick={() => {
                                                    let dummy = [...seatset3]; 
                                                    dummy[index] = 'y'; 
                                                    setseatset3(dummy); 
                                                    setseatsel(seatsel-1);

                                                    }}/>)
                                                :(<div></div>)}
                                        </li>
                                        
                                    ))}
                                </ul>
                            </div>
                            <div className="flex mt-1 mb-1">
                                <div className="mx-3 mr-11">
                                    
                                </div>
                                <ul className="flex justify-between">
                                    {seatset4.map((seat,index) => (
                                        <li key={index}>
                                            {console.log(seat)}
                                            {seat === 'y' ? (<img src="../seat.png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                onClick={() => {
                                                let dummy = [...seatset4]; // Make a copy of the array
                                                dummy[index] = 'c'; // Modify the copy
                                                setseatset4(dummy); // Set the state with the new array
                                                setseatsel(seatsel+1);

                                                }}/>)
                                                : seat === 'n' ? (<img src="../seat (1).png" alt="" className="max-h-10 mx-2" />) 
                                                : seat === 'c' ? (<img src="../seat (2).png" alt="" className="max-h-10 mx-2 cursor-pointer"
                                                    onClick={() => {
                                                    let dummy = [...seatset4]; 
                                                    dummy[index] = 'y'; 
                                                    setseatset4(dummy); 
                                                    setseatsel(seatsel-1);

                                                    }}/>)
                                                :(<div></div>)}
                                        </li>
                                        
                                    ))}
                                </ul>
                            </div>
                            </div>
                            
                        </div>
                        <div className="flex w-5/6 mx-auto justify-between">
                                    <div className="font-oxy text-xl text-red-600 w-1/6">{"Seats Selected - "+seatsel}</div>
                                    <button className="border-red-500 border-2 my-2 rounded-lg text-white font-oxy bg-red-500 hover:bg-white hover:text-red-500 py-1 px-2" onClick={book}>Book Tickets</button>
                                    <div className="font-oxy text-xl text-red-600 w-1/6">{"Total Price - "+seatsel*parseInt(bus.fare)}</div>
                        </div>
    </div>
        
    </>)
}

export default Book;