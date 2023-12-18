import React from 'react'
import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { FcGoogle } from "react-icons/fc";

function Template({title,desc1,desc2,image,formType,setLoggedIn}) {
  return (
    <div className='w-11/12 max-w-[1160px] flex mx-auto py-12 gap-x-12 gap-y-0 justify-between'>
        <div className='w-11/12 max-w-[450px]'> 
            <h2 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h2>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span><br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {formType==="signup" ? ( <SignUpForm setLoggedIn={setLoggedIn}/>) : (<LoginForm setLoggedIn={setLoggedIn}/> )}

            <div className='flex w-full items-center gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle />
                <p>Sign Up with Google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame} alt='' width={558} height={504} loading='lazy'/>
            <img src={image} alt='' width={558} height={490} loading='lazy' 
            className='absolute -top-4 right-4'/>
        </div>
    </div>
  )
}

export default Template