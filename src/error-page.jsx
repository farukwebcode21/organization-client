import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-center">404</h1>
        <p className="mb-5">Your Searching Result Not Found</p>
        <button className="btn btn-sm py-2 px-20 rounded-full btn-success">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
