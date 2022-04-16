import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register-form">
      <h2
        className="text-primary"
        style={{ textAlign: "center", marginTop: "15px" }}
      >
        Please Register!
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />{" "}
        {/*  <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms" className="ms-1">
          Accept Genius Car Terms & Conditions
        </label>
        <input
          className="btn btn-primary btn-lg  mt-5 w-25 d-grid mx-auto py-1 text-center align-align-items-center mb-2"
          type="submit"
          value="Register"
        />
      </form>
      <p className="mt-3">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
