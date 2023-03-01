/** @format */
import React, {useContext, useState} from "react";
import {useRouter, NextRouter} from "next/router";
import style from "../../assets/css/login.module.css";
import { Navbar } from "../../components";

function Login() {
  const router: NextRouter = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  type element = {email: string; password: string};

  const handleLogin = async() => {

   try {
     const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers : {'Content-Type' : 'application/json'}
    })

     const data = await response.json()
     if (data.status) {
       setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
        router.push('user-dashboard')
     }
     else {

       new Error( data.msg)
       window.alert(data.msg)
     }

   } catch (error) {
     console.log(error)
    
   }};

  return (
    <>
      <Navbar />
      <div className={`d-flex ${style.login_wrapper}`}>
        <div className={`d-flex flex-column ${style.login_form}`}>
          <p>login</p>
          <input
            type="text"
            value={email}
            className={`border-2 border-red-100 ${style.form_input}`}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            className={`border-2 border-red-600 ${style.form_input}`}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`${style.login_btn}`}
            onClick={() => handleLogin()}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
function setUser(user: any) {
  throw new Error("Function not implemented.");
}

