import React from "react";
import googleLogo from "../../../images/social/google.png";
import facebookLogo from "../../../images/social/facebook.png";
import githubLogo from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block w-50 mx-auto my-2"
        >
          <img src={googleLogo} alt="" />
          <span className="px-2">Google SignIn</span>
        </button>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block w-50 mx-auto my-2"
        >
          <img
            style={{ width: "28px", height: "28px" }}
            src={facebookLogo}
            alt=""
          />
          <span className="px-2">Facebook SignIn</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info d-block w-50 mx-auto"
        >
          <img src={githubLogo} alt="" />
          <span className="px-2">Github SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
