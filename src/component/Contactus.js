import React, { useRef } from "react";
import classes from "./Contactus.module.css";

const Contactus = (props) => {
  const nameRef = useRef("");
  const emailidRef = useRef("");
  const phonenumberRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const complainForm = {
      Name: nameRef.current.value,
      EmailId: emailidRef.current.value,
      PhoneNumber: phonenumberRef.current.value,
    };

    console.log(complainForm);
    nameRef.current.value = "";
    emailidRef.current.value = "";
    phonenumberRef.current.value = "";

    const response = await fetch(
      "https://complain-contact-us-default-rtdb.firebaseio.com/contacus.json",
      {
        method: "Post",
        body: JSON.stringify(complainForm),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="emailid">Email Id:</label>
        <input type="text" id="emailid" ref={emailidRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="phonenumber">PhoneNumber:</label>
        <input type="number" id="phonenumber" ref={phonenumberRef}></input>
      </div>
      <button>Submit</button>
    </form>
  );
};
export default Contactus;
