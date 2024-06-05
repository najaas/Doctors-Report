import React from "react";
import Image from "../assets/photo.png";
import Form from "../components/Loginmain";
import { useNavigate } from "react-router-dom";
const passwordchang = () => {
    const navigate = useNavigate();

    const succes = () => {
      navigate('/succes');
    }
    const logout= ()=>{
        navigate('/login')
    }
  return (
    <div className="w-full h-screen flex bg-[#E4FBFB]">
      <div className="flex w-[50%] h-full items-center justify-center">
        <Form
          center={
            <div className="bg-[#00D3EB] rounded-xl w-10/12 h-[250px] flex flex-col justify-evenly items-center">
              <h1>Change Password</h1>
              <div className="flex flex-col w-10/12">
                <label htmlFor="">Enter New Password</label>
                <input type="text" placeholder="New password" />
                <label htmlFor="">Re-Enter New Password</label>
                <input type="text" placeholder="Enter Register Email ID" />
              </div>

              <button onClick={succes} className=" text-white rounded-lg w-[100px] h-[30px] bg-blue-800 ">
                CONFIRM
              </button>
            </div>
          }
          logout={<h1 onClick={logout}>Back to Login</h1>}
          last={<h1 className="text-blue-500 text-xl">(+91) 9288008801</h1>}
        />
      
      </div>
      <div className="w-[50%] h-full flex">
        <div
          className="w-full h-full rounded-tl-lg rounded-bl-lg overflow-hidden bg-cover"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
      </div>
    </div>
  );
};

export default passwordchang;
