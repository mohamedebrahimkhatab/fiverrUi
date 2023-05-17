import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Navbar.scss";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout", true);
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">
              F<span className="dot">.</span>O<span className="dot">.</span>A
              <span className="dot">.</span>M
            </span>
          </Link>
        </div>
        <div className="links">
          {/* <span>Foam Business</span> */}
          {/* <span>Explore</span> */}
          {/* <span>English</span> */}
          {/* {currentUser ??
            (currentUser?.isSeller ? <span>Seller</span> : <span>User</span>)} */}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Design
            </Link>
            <Link className="link menuLink" to="/">
              Animation
            </Link>
            <Link className="link menuLink" to="/">
              Music
            </Link>
            <Link className="link menuLink" to="/">
              Web Development
            </Link>
            <Link className="link menuLink" to="/">
              Mobile Development
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
