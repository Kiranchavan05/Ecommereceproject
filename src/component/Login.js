import { useState, useRef ,useContext} from "react";
import {useHistory} from 'react-router-dom'
import classes from "./Login.module.css";
import SignContext from "../store/Sign-Context";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const SignCtx=useContext(SignContext)
  const history=useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchLoginModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6WhGiSregVwtlZPAvd8SrnbNeWY_vhhA'
    } else {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6WhGiSregVwtlZPAvd8SrnbNeWY_vhhA'
    }
    fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "sigin failed!!";
          // if (data && data.error && data.error.message){
          //   errorMessage=data.error.message
          // }
         throw new Error(errorMessage)
        });
      }
    }).then((data)=>{
      // console.log(data)
      SignCtx.login(data.idToken, data.email)
      history.replace('/store')
    }).catch((err)=>{
      alert(err.message)
    })
  };
  return (
    <section className={classes.login}>
      
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "SignUp"}</button>
          )}
          {isLoading && <p>Sending Request</p> }
          <button
            type="button"
            className={classes.toggle}
            onClick={switchLoginModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
