import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [identifier, setIdentifier] = useState(""); // phone or email
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      Swal.fire({
        icon: "warning",
        title: "Both email/phone and password are required",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/auth/admin/login", {
        // Your backend expects 'email' or 'phone' + 'password'
        // Send both fields accordingly.
        email: identifier.includes("@") ? identifier : undefined,
        phone: !identifier.includes("@") ? identifier : undefined,
        password,
      });

      if (response.status === 200 && response.data.data.token) {
        const { token, user } = response.data.data;

        localStorage.setItem("token", token);
        localStorage.setItem("admin", JSON.stringify(user));

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${user.name}`,
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/"); // Change route as per your app
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: response.data.message || "Invalid credentials",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: error.response?.data?.message || "Server error",
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Enter email or mobile number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
