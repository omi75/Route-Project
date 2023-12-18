import "./App.css";
import {Route , Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'
import Navbar from "./Components/Navbar";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";


function App() {
  const [isLoggedIn, setLoggedIn]=useState(false)
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-auto">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/login" element = {<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        } />
        
        
      </Routes>
    </div>
  );
}

export default App;
