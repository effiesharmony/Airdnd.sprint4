import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { logout } from "../store/actions/user.actions";
import { StayFilterFocused } from "./StayFilterFocused.jsx";

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function onLogout() {
    try {
      await logout();
      navigate("/stay");
      showSuccessMsg(`Bye now`);
    } catch (err) {
      showErrorMsg("Cannot logout");
    }
  }

  function onOpenCloseMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="app-header full">
      <div className="app-header-top">
        <Link to="/stay" className="logo">
          <div className="app-header-left-box">
            <img
              className="app-header-left-box-logo-img"
              src="/public/svg/logo.svg"
              alt=""
            />
          </div>
        </Link>

        <div className="app-header-right-box">
          <p>Airbnb your home</p>
          <img
            className="app-header-world-svg"
            src="/public/svg/world.svg"
            alt=""
          />
          {!user && (
            <button
              className="app-header-right-box-menu button1"
              onClick={onOpenCloseMenu}
            >
              <img
                className="app-header-menu-svg"
                src="/public/svg/menu.svg"
                alt="menu icon"
              />
              <img
                className="app-header-user-img"
                src="/public/svg/user.svg"
                alt="user icon"
              />
            </button>
          )}
          {user && (
            <button
              className="app-header-right-box-menu button1"
              onClick={onOpenCloseMenu}
            >
              <img
                className="app-header-menu-svg"
                src="/public/svg/menu.svg"
                alt="menu icon"
              />
              {user.imgUrl ? (
                <img className="app-header-user-img" src={user.imgUrl} />
              ) : (
                <img
                  className="app-header-user-img"
                  src="/public/svg/user.svg"
                  alt="user icon"
                />
              )}
            </button>
          )}

          {isMenuOpen && (
            <div className="dropdown-menu">
              {user ? (
                <>
                  <NavLink
                    className="dropdown-menu-link messages"
                    to="user/:id"
                    onClick={onOpenCloseMenu}
                  >
                    Messages
                  </NavLink>

                  <NavLink
                    className="dropdown-menu-link trips"
                    to="user/:id"
                    onClick={onOpenCloseMenu}
                  >
                    Trips
                  </NavLink>

                  <NavLink
                    className="dropdown-menu-link wishlist"
                    to="user/:id"
                    onClick={onOpenCloseMenu}
                  >
                    Wishlist
                  </NavLink>
                  <hr />
                  <NavLink
                    className="dropdown-menu-link"
                    to="user/:id"
                    onClick={onOpenCloseMenu}
                  >
                    Account
                  </NavLink>
                  <hr />
                  <NavLink
                    className="dropdown-menu-link"
                    to="about"
                    onClick={onOpenCloseMenu}
                  >
                    About us
                  </NavLink>
                  <button className="dropdown-menu-link-btn" onClick={onLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    className="dropdown-menu-link login"
                    to="login"
                    onClick={onOpenCloseMenu}
                  >
                    Log in
                  </NavLink>
                  <NavLink
                    className="dropdown-menu-link"
                    to="signup"
                    onClick={onOpenCloseMenu}
                  >
                    Sign up
                  </NavLink>
                  <hr />
                  <NavLink
                    className="dropdown-menu-link"
                    to="about"
                    onClick={onOpenCloseMenu}
                  >
                    About us
                  </NavLink>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="app-header-bottom">
        <StayFilterFocused />
      </div>
    </header>
  );
}
