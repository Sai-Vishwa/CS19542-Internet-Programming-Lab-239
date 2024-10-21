import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';
import Search from './pages/search';
import Book from './pages/book';
import GLBViewer from './pages/dummy';
import BasicOne from './pages/basic1';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login-signup' element={<Login/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/search-result' element={<Search/>}/>
            <Route path='/book-ticket' element={<Book/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App



// const [p , setp] = useState(" Understand Problem Statements. Learn and Code Together. Frame Algorithms and Pseudocode. Get to know Effective Coding Practices. Handling Partial Test Case Failures. Learn to Improve Solution Efficiency");
// const [btn , setbtn] = useState(true);
// {/* <>
//       <style>
// @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Edu+AU+VIC+WA+NT+Guides:wght@400..700&display=swap');
// </style>
// {/* <p className='text-3xl sm:text-xl md:text-lg lg:text-sm'>hi</p>      */}
// {/* <h1 className="text-xl font-beb underline newcls">
//     Hello world!
//   </h1>
//   <p className='text-my font-beb bg-sai text-gray-300 mb-10'>ithu oru periya para</p> */}

//     <div className='container w-6/12 border-2 border-slate-600 rounded-lg relative mb-16 mt-16 mx-auto'>
//       <p className='pt-2 pl-4 mb-12 font-mono text-cyan-800  md:text-xl sm:text-md lg:text-3xl'>Ithu tha Heading</p>
//       <p className='pl-4 mb-8 font-mono text-slate-400 md:text-md sm:text-sm lg:text-lg'>{p}</p>
//       {btn?<button className='border-2 border-slate-800 absolute rounded-lg bg-slate-700 hover:bg-slate-800 text-white pl-1 pr-1 bottom-0 transform translate-x-10 translate-y-3' onClick={()=>{
//         setbtn(false);
//         setp("Understand Problem Statements:* Learn techniques to accurately interpret and analyze problem statements. Learn Together: Collaborate with peers to discuss problem-solving methods and share insights. Human Problem-Solving Methods: Identify and explore how humans typically approach problem-solving, enhancing your understanding of natural reasoning. Frame Algorithms and Pseudocode: Develop the skills to outline basic algorithms and write effective pseudocode as a precursor to coding. Effective Coding Practices: Discover best practices for coding and how to translate algorithms into functional code. Handling Partial Test Case Failures: Learn strategies for diagnosing and addressing issues when some test cases fail. Identifying Extreme Cases: Understand how to recognize extreme cases in problem-solving to ensure robust solutions. Improving Solution Efficiency:* Once a solution is found, explore techniques for optimizing performance and efficiency.")
//         }}>see more</button>:
//         <button className='border-2 border-slate-800 absolute rounded-lg bg-slate-700 hover:bg-slate-800 text-white pl-1 pr-1 bottom-0 transform translate-x-10 translate-y-3' onClick={()=>{
//           setbtn(true);
//           setp(" Understand Problem Statements. Learn and Code Together. Frame Algorithms and Pseudocode. Get to know Effective Coding Practices. Handling Partial Test Case Failures. Learn to Improve Solution Efficiency")
//         }}>see less</button>}
//     </div>
//     </>
//      */}