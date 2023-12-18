import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function SignUpForm({setLoggedIn}) 
{
    const navigate =useNavigate();
    const [showPass1,setPass1]=useState(false);
    const [showPass2,setPass2]=useState(false);
    const [accountType, setAccountType] = useState("student");
    

    const [formData,setformData]=useState({firstName:"",lastName:"",email:"",pass:"",confirm_pass:""});
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
        if(formData.pass !== formData.confirm_pass) {
            toast.error("Passwords do not match");
            return ;
        }

        const finalData={
            ...formData,accountType
        }
        
        console.log(finalData)
        setLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");

    }
  return (
    <div>
        <div className=' max-w-max flex rounded-full bg-richblack-800 p-1 gap-x-1 my-6'>
            <button className={`${accountType=== "student" ? "bg-richblack-900 text-richblack-5"  : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("student")}>Student</button>
            <button className={`${accountType=== "instructor" ? "bg-richblack-900 text-richblack-5"  : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>

        <form onSubmit={submitHandler} className='w-full'>
            <div className='flex gap-x-5 w-full'>
                {/* Fname & Lname */}
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                    <input required type="text" name="firstName" placeholder='Enter First Name' onChange={changeHandler} value={FormData.firstName}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'/>
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input required type="text" name="lastName" placeholder='Enter Last Name' onChange={changeHandler} value={FormData.lastName}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'/>
                </label>
            </div>
            
            {/* Email */}
            <label className='w-full mx-5'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                <input required type="email" name="email" placeholder='Enter Email Address' onChange={changeHandler} value={FormData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'/>
            </label>

            {/* pass & CNF pass */}
            <div className='flex gap-x-5 w-full my-5'>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                    <input required type={showPass1 ? ("text") : ("password")} placeholder='Create Password' name="pass" value={formData.pass} onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'/>
                    <span className='absolute right-3 top-[38px] cursor-pointer'  onClick={()=>{setPass1((prev)=>!prev)}}> {showPass1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                     (<AiOutlineEye fontSize={24} fill='#AFB2BF'/> ) } </span>
                </label>

                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                    <input required type={showPass2 ? ("text") : ("password")} placeholder='Confirm Password' name="confirm_pass" value={formData.confirm_pass} onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b'/>
                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{setPass2((prev)=>!prev)}}> {showPass2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): 
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/> ) } </span>
                </label>
            </div>
           
            {/* button */}
            <button className='bg-yellow-50 rounded-[8px] my-5 w-full font-medium text-black px-[12px] py-[8px]'>Create Account</button>
        </form>
    </div>
  )
}

export default SignUpForm