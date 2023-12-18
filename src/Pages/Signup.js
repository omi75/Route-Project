import React from 'react'
import Template from '../Components/Template'
import signup from '../assets/signup.png'

function Signup({setLoggedIn}) {
  return (
    <Template title="Join the millions learning to code with StudyNotion for free" 
              desc1="Build skills for today, tomorrow, and beyond."
              desc2="Education to future-proof your career."
              image={signup}
              formType="signup"
              setLoggedIn={setLoggedIn}/>
  )
}

export default Signup