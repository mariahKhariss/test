import { useNavigate } from "react-router";
import insta from "../assests/insta.png";
import React from 'react';
import { Link } from "react-router-dom";
import {useState,useEffect } from "react"; 
function SignUp() {
const [Email, setEmail] = useState("")
const [fullName, setfullName] = useState("")
const [userName, setuserName] = useState("")
const [passWord, setpassWord] = useState("")
const [userDetails, setuserDetails] = useState([])
const changeEmail = (e) => {
    setEmail(e.target.value)
    console.log(setEmail)
}
const changefullName = (e) =>{
    setfullName(e.target.value)
}
const changeuserName = (e) =>{
    setuserName(e.target.value)
}
const changepassWord = (e) =>{
    setpassWord(e.target.value)
}
useEffect(() => {
    if(localStorage.allUser){
   let localAllUsers = JSON.parse(localStorage.allUser)
   setuserDetails(localAllUsers)
    }else{
        setuserDetails([])
    }
}, [])
const navigate  = useNavigate()
const SignUp = () =>{
   let newUser = {Email,fullName,userName,passWord}
   setuserDetails(()=>{
    let recentDetails=([...userDetails,newUser])
    localStorage.allUser = JSON.stringify(recentDetails) 
     return recentDetails
   })
  
   if (Email== '' || fullName==''|| userName=='' || passWord=='') {
       alert('please provide the necessary information ')
   }else{
   setEmail("")
   setfullName("")
   setuserName("")
   setpassWord("")
   navigate("/Login")
   }
}

    return (
        <> 
        <div className=" col-sm col-sm-3 m-auto mt-4">
        <div className="card shadow m-auto p-1 "> 
        <div className="card-body">
            <div>
            <img src={insta} alt=""className="d-block m-auto mb-1" />
            <p className="text-center">sign up to see photos and videos <br /> from your friends.</p>
            <button className="btn w-100 bg-primary text-light "><ion-icon name="logo-facebook"></ion-icon> Login with your facebook account</button>
            <p className="text-center">-------------------- OR -------------------</p>
                </div> 
                <div className="form-floating mb-1 my-3 ">
                    <input type="text" placeholder="Mobile Number or Email" class="form-control" id="floatingInput" onChange={(e)=>setEmail(e.target.value)} value={Email} />
                    <label For="floatingpassword">Mobile Number or Email</label>
                </div>
                <div className="form-floating mb-2 my-1 ">
                    <input type="text" placeholder="Full Name" class="form-control" id="floatingPassword" onChange={(e)=>setfullName(e.target.value)} value={fullName} />
                    <label For="floatingpassword">Full Name</label>
                </div>
                <div className="form-floating mb-2 my-1 ">
                <input type="text" placeholder="UserName" class="form-control" id="floatingPassword" onChange={(e)=>setuserName(e.target.value)} value={userName} />
                    <label For="floatingpassword">UserName</label>
                </div>
                <div className="form-floating mb-2 my-1 ">
                    <input type="text" placeholder="Password" class="form-control" id="floatingPassword" onChange={(e)=>setpassWord(e.target.value)} value={passWord} />
                    <label For="floatingpassword">Password</label>
                    <p className="text-center">people who use our service may have uploaded your contact information learn <br /> more</p>
                    
                </div>
                <div>
                    <button className="btn w-100 bg-info text-light" onClick={SignUp}>Sign Up</button>
                </div>
          </div>
            </div>
            <div className="col-sm col--3 m-auto mt-lg-3">
                <div className="card shadow  ">
                    <div className="card-body">
                        <p className="text-center mt-3">Don't have an account?  <Link to="/Login">Login</Link> </p> 
                    </div>
                </div>
            </div>
            </div>

            </>  
        
     )
}

export default SignUp;