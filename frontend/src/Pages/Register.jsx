import React, { useState } from "react";
import styles from "./pageStyles/register.module.css";
import triangle2 from "../assets/triangle2.png";
import circle1 from "../assets/Ellipse 1.png";
import circle2 from "../assets/Ellipse 2.png";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/user.services";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  // validate Input Fields 
  const validateFrom = () =>{
    const newError = {};
    if(!formData.username.trim()) newError.username = "Username is Required !";
    if(!formData.email.trim()) newError.email = "Email is Required !";
    if(!formData.password.trim()) newError.password = "Password is Required !";
    if(!formData.confirmPassword.trim()) newError.confirmPass = "Field Required !";
    if(formData.password.trim() !== formData.confirmPassword.trim()) newError.confirmPass = "Enter same password in both fields";
    setError(newError);
    return Object.keys(newError).length === 0;
  }
  // new user registration 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!validateFrom()){
      return toast.info("All fields Required");
    }
    try {
      const res = await registerUser(formData);
      const data = await res.json();
      if(res.status == 200){
        toast.success(data.message);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <div className={styles.BackArro}>
        <FaArrowLeft size={28} onClick={() => navigate("/")} />
      </div>
      <div className={styles.container}>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.logindiv}>
            <div className={styles.email}>
              <label style={error.username && {color:"red"}}>Username</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="username"
                value={formData.username}
                style={ error.username && {border:"1px solid red"}}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <p style={{ visibility: error.username ? "visible" : "hidden"}}>
                {error.username || "Field Requires"}
              </p>
            </div>
            <div className={styles.email}>
              <label style={error.email && {color:"red"}}>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                style={ error.email && {border:"1px solid red"}}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <p style={{visibility : error.email ? "visible" : " hidden"}}>{ error.email || "Field Required"}</p>
            </div>
            <div>
              <label style={error.password && {color:"red"}}>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                style={ error.password && {border:"1px solid red"}}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <p style={{visibility: error.password ? "visible" : "hidden"}}>{ error.password || "Field Required"}</p>
            </div>
            <div>
              <label style={error.confirmPass && {color:"red"}}>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="confirmPassword"
                style={ error.confirmPass && {border:"1px solid red"}}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              />
              <p style={{visibility : error.confirmPass ? "visible" : "hidden"}}>{error.confirmPass || "Field Required"}</p>
            </div>
            <div>
              <button className={styles.loginButton} type="submit" onClick={() => navigate("/login")}>
                Sign Up
              </button>
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "200",
              }}
            >
              OR
            </div>
            <div>
              <button className={styles.loginButton}>
                <div>
                    <FcGoogle size={30} />
                </div>
              Sign Up with google
              </button>
            </div>
          </div>
          <div className={styles.register}>
            <p>
              Alreday have an account?{" "}
              <a onClick={() => navigate("/login")}>Login</a>
            </p>
          </div>
        </form>
      </div>
      <div className={styles.triangle}>
        <img src={triangle2} />
      </div>
      <div className={styles.circleOne}>
        <img src={circle1} />
      </div>
      <div className={styles.circleTwo}>
        <img src={circle2} />
      </div>
    </>
  );
};

export default Register;
