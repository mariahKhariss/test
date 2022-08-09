import { Navigate,Route,Routes } from "react-router-dom";
import Home from "./Component class/Home";
import Login from "./Component class/Login";
import SignUp from "./Component class/SignUp";
import HomePage from "./Component class/HomePage";
import Profile from "./Component class/Profile";
import PageNotFound from "./Component class/PageNotFound";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/SignUp" element={<Navigate to="/"/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/HomePage" element={<HomePage/>}/>
      <Route path="/Profile/:username" element={<Profile/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    
    </>
  )
}

export default App;

