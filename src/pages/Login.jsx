import React, { useContext } from "react";
import login_page from "../../public/login_page.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Location in the login page", location);

  const handleUserLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    try {
      const result = await loginUser(email, password);
      console.log(result.user);
      alert("Successfully logged in!");
      form.reset();
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check and try again");
    }
  };
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${login_page})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <div className="text-center w-1/3 lg:text-left">
          <h1 className="text-5xl text-orange-600 font-bold">Login now!</h1>
          <p className="py-6 text-orange-400">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUserLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <GoogleLogin />
          <div className="flex justify-center mb-5">
            <p>
              New user ?{" "}
              <Link className="text-green-600" to={"/signup"}>
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
