/** @format */

import Router from "next/router";
import React, {useState} from "react";

const AdminLogin = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log()
      const response = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {"Content-Type": "application/json"},
      });

      const data = await response.json();
      console.log("data", data);
      if (data.user) {
        localStorage.setItem('user', data.user)
        setUser(data);
        Router.push('/admin/admin-dashboard')
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="admin_login-wrapper">
      <form className="admin_form" onSubmit={(e) => handleSubmit(e)}>
        <p>Admin login</p>
        <input
          type="text"
          className="form-control"
          name={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          {" "}
          login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
