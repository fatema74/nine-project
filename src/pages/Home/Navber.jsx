import { Link, NavLink } from "react-router-dom";

import userPic from '../../img/user.jpg'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Navber = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }


  const navLinks = 
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>

    </>


  return (
    <div>
      <div className="navbar bg-base-100 content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-5  "
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <h2 className="lg:text-4xl md:text-2xl font-bold ">
              Engagement <span className="text-red-400">Parties</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end  lg:gap-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={userPic} />
            </div>
          </label>

          {
            user ? 
            <button onClick={handleSignOut} className="btn">Sing Out</button>
          : 
            <Link to="/login">
              <button className="btn">Login</button></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navber;
