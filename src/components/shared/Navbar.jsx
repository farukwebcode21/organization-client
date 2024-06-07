import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Use Logout Successfully"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <div className="flex uppercase">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      <li>
        <Link to={"/team"}>Team</Link>
      </li>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">ShowUp</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="bg-base-100">
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {user ? (
                    <>
                      {" "}
                      <li>
                        <a className="justify-between">{user?.email}</a>
                      </li>
                      <li>
                        <Link to={"/dashboard"}>Dashboard</Link>
                      </li>
                      <li>
                        <a onClick={handleLogOut}>Logout</a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to={"/login"}>Login</Link>
                      </li>
                      <li>
                        <Link to={"/signup"}>Signup</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
