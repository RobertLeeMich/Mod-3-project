import React from 'react';
import styles from './AuthPage.module.css';
import SignUpForm from "../../components/SignupForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import logoImage from "../../../main2.png";

function AuthPage(props) {
  return (
    <main className={styles.main}>
      <img src={logoImage} alt="Logo" className={styles.mainimage} />
      <p className={styles.textstyle}>Sign Up:</p>
      <SignUpForm className ={styles.form} setUser={props.setUser} />
      <p className={styles.textstyle}>Log In:</p>
      <LoginForm className = {styles.form} setUser={props.setUser} />
    </main>
  );
}

export default AuthPage;
