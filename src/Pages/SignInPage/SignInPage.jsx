import React, { useState, useEffect } from "react";
import Style from "./SignInPage.module.scss";
import swal from "sweetalert";
import PIC from "../../Assets/Images/user.png";
import { useHistory } from "react-router-dom";

const SignInPage = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signup_password, set_signup_password] = useState("");
  const [signup_username, set_signup_username] = useState("");
  const [signup_email, set_signup_email] = useState("");
  const history = useHistory();

  let SignUpbtn = () => {
    let x = document.getElementById(Style.SignIn);
    let y = document.getElementById(Style.SignUp);
    let z = document.getElementById(Style.btn);
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "130px";
  };

  let SignInbtn = () => {
    let x = document.getElementById(Style.SignIn);
    let y = document.getElementById(Style.SignUp);
    let z = document.getElementById(Style.btn);
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  };

  let reDirectToHome = () => {
    history.push("/");
  };

  let handleSignUp = async (e) => {
    e.preventDefault();
    
  };
  let handleSignIn = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className={Style.mainContainer}>
      <div className={Style.formContainer}>
        <div className={Style.buttonBox}>
          <div id={Style.btn} ></div>
          <button onClick={SignInbtn} className={Style.toggle_btn}>
            Sign In
          </button>
          <button onClick={SignUpbtn} className={Style.toggle_btn}>
            Sign Up
          </button>
        </div>
        <form id={Style.SignIn} onSubmit={handleSignIn}>
          <input
            className={Style.input}
            type="email"
            name="useremail"
            id={Style.useremail}
            placeholder="Enter em@il Id "
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className={Style.input}
            type="password"
            name="password"
            id={Style.password}
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className={Style.handle}>
            <input
              className={Style.inputcheck}
              type="checkbox"
              name="remember-password"
              id={Style.remember_password}
            />
            &nbsp; <span style={{ fontSize: "13px" }}>Remember Password</span>{" "}
          </div>
          <button className={Style.buttonss} type="submit">
            Login
          </button>
          <div
            style={{
              margin: "auto",
            }}
            className={Style.or}
          >
            or{" "}
          </div>
          <button onClick='' className={Style.googlebtn}>
            Google{" "}
            <i
              style={{ padding: "2px 3px",fontSize:"20px" }}
              class="fab fa-google-plus-square"
            ></i>
          </button>
        </form>
        <form id={Style.SignUp} onSubmit={handleSignUp}>
          <input
            className={Style.input}
            type="email"
            name="useremail"
            id={Style.signup_email}
            placeholder=" Enter em@il  Id"
            required
            value={signup_email}
            onChange={(e) => {
              set_signup_email(e.target.value);
            }}
          />
          <input
            className={Style.input}
            type="text"
            name="signup_username"
            id={Style.signup_username}
            placeholder="Enter UserName"
            required
            value={signup_username}
            onChange={(e) => {
              set_signup_username(e.target.value);
            }}
          />
          <input
            className={Style.input}
            type="password"
            name="signup-password"
            id={Style.signup_password}
            placeholder="Enter Password"
            required
            value={signup_password}
            onChange={(e) => {
              set_signup_password(e.target.value);
              console.log(signup_password);
            }}
          />
          <div className={Style.handle}>
            <input
              className={Style.inputcheck}
              type="checkbox"
              name="remember-password"
              id={Style.remember_password}
              required
            />
            <span className={Style.span}>I agree to the terms and condition</span>{" "}
          </div>
          <button className={Style.buttonss} type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
