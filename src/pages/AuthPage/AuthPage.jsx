import React from 'react';
import styles from './AuthPage.module.css';
import SignUpForm from "../../components/SignupForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage(props) {
  return (
    <main className={styles.main}>
      <img className={styles.mainimage} src="main.png" alt="Fake Store Logo" />
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  );
}

export default AuthPage;
