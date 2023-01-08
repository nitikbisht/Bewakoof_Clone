import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gradient from "../landing/Component/Login/Gradient";
import LoginForm from "../landing/Component/Login/LoginForm";
import styles from "./Login.module.css";
import Navabar from "../landing/Component/Home/Navabar";
const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return (<>
    <Navabar/>
    <div className={styles.Login}>
      <Gradient />
      <LoginForm />
    </div>
  </>
  );
};

export default Login;