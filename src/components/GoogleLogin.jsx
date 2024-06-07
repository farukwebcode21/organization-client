import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center mb-3">
      <button onClick={handleGoogleSignIn} className="btn btn-success w-5/6">
        Google Login
      </button>
    </div>
  );
};

export default GoogleLogin;
