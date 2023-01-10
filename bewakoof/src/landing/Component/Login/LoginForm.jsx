import React, { useState } from "react";
import styles from "./styles/form.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginAPI } from "../../Store/Auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import SuccessModal from "./Modal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate=useNavigate()
  
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, token } = useSelector((state) => state.auth.data);
  const [show, setshow] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(form));
    
navigate("/")
  };
  const handleClose = () => {
    setshow(false);
  };
  return (
    <div>
      
      <SuccessModal
        show={show}
        handleClose={handleClose}
        message={"Incorrect Details Entered Please try again."}
      />
      <div className={styles.Header}>
        <h3>Log in / Sign up</h3>
        <h5>for Latest trends, exciting offers and everything Bewakoof!</h5>
      </div>
      <div className={styles.Form}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={styles.input}
              onChange={handleChange}
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className={styles.Button}
            style={{ backgroundColor: "#47a5a9" }}
          >
            Continue
          </Button>
        </Form>
        <div className={styles.Or}>
          <div>
            <hr />
          </div>
          <div>OR</div>
          <div>
            <hr />
          </div>
        </div>
        <button className={styles.authButton}>
          {/* <AiOutlineMail /> */}
          Continue With Email
        </button>
        <div className={styles.auth}>
          <button>
            {/* <FcGoogle /> */}
            Google
          </button>
          <button>
            {/* <BsFacebook /> */}
            Facebook
          </button>
        </div>
        <div>
          <p className={styles.Foot}>
            By creating an account or logging in, you agree with Bewakoof's
            <span>Terms and Conditions</span>
            and <span>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;