import React, { useState } from "react";
import styles from "../componentsStyles/LoginRegister.module.css";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [c_password, setc_password] = useState("");

  let history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const check = (e) => {
    if (password !== c_password) {
      e.target.className = styles.inputs_pass;
    }
    else {
      e.target.className = styles.inputs;
    }
  };

  const submithandler = (e) => {
    e.preventDefault();

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("/api/user/add", { name, email, password }, options).then((res) => {
      alert("Your Account has been created successfully!");
       history.push('/login');
    }).catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <h3 className={styles.subHeading}>New To this Quiz App? Register below</h3>
        <h1 className={styles.heading}>Register</h1>
        <form onSubmit={submithandler}>
          <label htmlFor="name" className={styles.labels}>
            Name:
          </label>
          <input
            id="name"
            name="name"
            onChange={(e) => setname(e.target.value)}
            type="text"
            className={styles.inputs}
          />
          <br />
          <label htmlFor="email" className={styles.labels}>
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => setemail(e.target.value)}
            className={styles.inputs}
          />
          <br />
          <label htmlFor="password" className={styles.labels}>
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            className={styles.inputs}
          />
          <br />
          <label htmlFor="c_password" className={styles.labels}>
            Confirm Password:
          </label>
          <input
            id="c_password"
            name="c_password"
            type="password"
            className={styles.inputs}
            onChange={(e) => setc_password(e.target.value)}
            onKeyUp={check}
          />
          <br />
          <button type="submit" className={styles.buttons}>
            Create New Account
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Register;
