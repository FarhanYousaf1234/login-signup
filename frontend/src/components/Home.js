import React from "react"
import {  useNavigate } from "react-router-dom";
function Home (){
    const navigate=useNavigate()
    const HandleLogout = () => {
        navigate('/login');
	};
    return (
        <div className="homepage">
            <h1>Hello and welcome to the home</h1>
            <button  onClick={HandleLogout}>
					Logout
				</button>
        </div>
    )
}

export default Home