import {Link} from "react-router-dom"
import {useState} from 'react'

import GenderCheck from './GenderCheck'
import useSignup from "../../Hooks/useSignup.js"


const SignUp = () => {
  
  const [inputs , setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword : "",
    gender: ""
  })
    
      const {loading , signup}=useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  } 
  const handleCheckBoxChange =(gender)=>{
    setInputs({...inputs , gender} )
  }


  // console.log(inputs)
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
       bg-opacity-0'>
         <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-pink-600'>ChatApp</span></h1>
         
         <form onSubmit={handleSubmit}>
          <div>
             <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
             </label>
             <input type="text"placeholder='Preethivi Raj'  className='w-full input input-bordered h-10'
             value={inputs.fullName}
             onChange={(e)=>setInputs({...inputs , fullName :e.target.value})}
             />
          </div>
          <div>
             <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
             </label>
             <input type="text"placeholder='preethivi'  className='w-full input input-bordered h-10'
             value={inputs.username}
             onChange={(e)=>setInputs({...inputs , username : e.target.value})}
             />
          </div>

          <div>
              <label className='label '>
              <span className='text-base label-text'>Password</span>
             </label>
             <input type="text"placeholder='Enter password'  className='w-full input input-bordered h-10'
             value={inputs.password}
             onChange={(e)=>setInputs({...inputs , password : e.target.value})}
             />
          </div>

          <div>
              <label className='label '>
              <span className='text-base label-text'>Confirm Password</span>
             </label>
             <input type="text"placeholder='Confrim password'  className='w-full input mb-2 input-bordered h-10'
             value={inputs.confirmPassword}
             onChange={(e)=>setInputs({...inputs , confirmPassword :e.target.value})}
             />
          </div>
          
          <GenderCheck onCheckboxChange = {handleCheckBoxChange} selectedGender = {inputs.gender}/>

          <Link to="/login" className=' pl-1 text-sm hover:underline hover:text-pink-600 mt-1 inline-block'>Already have an account?</Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700"
             disabled={loading}>
              { loading ? <span className="loading loading-spinner"></span> : "Sign Up" }
            </button>
          </div>

         </form>
      </div>
    </div>
  )
}

export default SignUp

// stater code
/*const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
       bg-opacity-0'>
         <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp <span className='text-pink-600'>ChatApp</span></h1>
         
         <form>
          <div>
             <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
             </label>
             <input type="text"placeholder='Preethivi Raj'  className='w-full input input-bordered h-10'/>
          </div>
          <div>
             <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
             </label>
             <input type="text"placeholder='preethivi'  className='w-full input input-bordered h-10'/>
          </div>

          <div>
              <label className='label '>
              <span className='text-base label-text'>Password</span>
             </label>
             <input type="text"placeholder='Enter password'  className='w-full input input-bordered h-10'/>
          </div>

          <div>
              <label className='label '>
              <span className='text-base label-text'>Confirm Password</span>
             </label>
             <input type="text"placeholder='Confrim password'  className='w-full input mb-2 input-bordered h-10'/>
          </div>
          
          <GenderCheck/>

          <a href="#"className=' pl-1 text-sm hover:underline hover:text-pink-600 mt-1 inline-block'>Already have an account?</a>

          <div className='btn btn-block btn-sm mt-3'>SignUp</div>

         </form>
      </div>
    </div>
  )
}

export default SignUp */