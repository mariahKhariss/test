import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import insta from "../assests/insta.png"
function Login () {
const [userName, setuserName] = useState("")
const [passWord, setpassWord] = useState("")
const [LoginDetails, setLoginDetails] = useState([])
const changeuserName = (e) => {
    setuserName(e.target.value)
}
const changepassWord = (e) => {
    setpassWord(e.target.value)
}
const navigate = useNavigate() 
const Login = () => {
    let newLoginDetails = {userName,passWord}
    setLoginDetails([...LoginDetails,newLoginDetails])
    setuserName('')
    setpassWord('')
    navigate('/Profile/username')
}
return (
        <div className=" col-sm col-sm-3 m-auto mt-sm-5">
        <div className="card shadow m-auto p-1 "> 
        <div className="card-body">
            <div>
            <img src={insta} alt=""className="d-block m-auto mb-3" />
                </div> 
                <div className="form-floating mb-2 my-3 ">
                    <input type="text" placeholder="phone number,username or email" class="form-control" id="floatingInput" onChange={(e)=>setuserName(e.target.value)} value={userName} />
                    <label For="floatingpassword">phone number,username or email</label>
                </div>
                <div className="form-floating mb-2 my-1 ">
                    <input type="password" placeholder="password" class="form-control" id="floatingPassword" onChange={(e)=>setpassWord(e.target.value)} value={passWord} />
                    <label For="floatingpassword">password</label>
                </div>
                <div>
                    <button className="btn w-100 bg-primary my-2" onClick={Login}>Log in</button>
                </div>
                <div className="">
                    <p className="text-center led ">-------------------- OR -------------------</p>
                    <p className="text-center text-primary face w-100"><ion-icon name="logo-facebook"></ion-icon>Log in with facebook</p>
                    <p className="text-center text-dark " >forgot password?</p>
                </div>
           </div>
         </div>
            <div className="col-sm col--3 m-auto mt-lg-3">
                <div className="card shadow  ">
                    <div className="card-body">
                        <p className="text-center mt-3">Don't have an account? <Link to="/SignUp">sign up</Link> </p>
                        

                    </div>
                </div>
            </div>
            </div>

        
        
     )
}
 
export default Login;