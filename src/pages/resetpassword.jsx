import React from "react";
import Form from "../components/Loginmain";
import Image from "../assets/photo.png";
import { useNavigate } from "react-router-dom";
const resetpassword = () => {
    const navigate=useNavigate()
    const newpassword= ()=>{
        navigate('/otp')
      }
      const logout= ()=>{
        navigate('/login')
    }
  return <div className="w-full h-screen flex bg-[#E4FBFB]">
    <div className="flex w-[50%] h-full items-center justify-center ">
<Form   center={
    <div className='bg-[#00D3EB] rounded-xl w-10/12 h-[250px] flex flex-col justify-evenly items-center'>
    <h1>Reset Password</h1>
    <div className='flex flex-col w-10/12'>
     <label htmlFor="">Email ID</label>
    <input type="text" placeholder='Enter Register Email ID' />
    </div>
   
    <button onClick={newpassword} className=' text-white rounded-lg w-[100px] h-[30px] bg-blue-800 '>SUBMIT</button>
 </div>

}
logout={
<h1 onClick={logout}>Back to Login</h1>
}
last={
    <p>Copyright &copy; 2023 Access Home Lab Solutions</p>
}
/>
    </div>
    <div className="w-[50%] h-full flex">
        <div className="w-full h-full rounded-tl-lg rounded-bl-lg overflow-hidden bg-cover" style={{backgroundImage: `url(${Image})`}}>
        </div>
    </div>
  </div>;
};

export default resetpassword;
