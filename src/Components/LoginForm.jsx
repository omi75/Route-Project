import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setLoggedIn}) 
{
    const [formData,setformData]=useState({email:"",password:""});
    const [showPass,setPass]=useState(false);
    const navigate =useNavigate();

    function changeHandler(ev)
    {
        const {name,value}=ev.target;
        
        setformData((prev)=>(
            {
                ...prev,
                [name]:value,
            }
        ))
    }

    function submitHandler(ev)
    {
        ev.preventDefault();
        setLoggedIn(true);
        navigate('/dashboard');
        toast.success("Logged In")
        console.log(formData)
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'> 
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address 
            <sup className='text-pink-200'> *</sup></p>
            <input required type="email" placeholder='Enter Email Address' name="email" value={formData.email} 
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'/>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup>*</sup></p>
            <input 
                required 
                type={showPass ? ("text") : ("password")} 
                placeholder="Enter Password" 
                name="password" 
                value={formData.password} 
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'
            />
            
            <span className='absolute right-3 top-[38px] cursor-pointer' 
            onClick={()=>{setPass((prev)=>!prev)}}> {showPass ? 
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): 
            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/> ) } </span>
            <Link to="#" className='text-xs mt-1 text-blue-100 flex justify-end w-full'>Forgot Password</Link>
        </label>
        <button className='bg-yellow-50 rounded-[8px] my-5 font-medium text-black px-[12px] py-[8px]'>Sign In</button>
    </form>
  )
}

export default LoginForm