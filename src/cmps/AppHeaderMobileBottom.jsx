import { Link, NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";
import { logout } from "../store/actions/user.actions.js";
import { StayFilterFocused } from "./StayFilterFocused.jsx";
import { StayFilterUnfocused } from "./StayFilterUnfocused.jsx";

export function AppHeaderMobileBottom() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/stay";
  const isReservationPage = location.pathname.startsWith("/reservation/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFilterFocused, setIsFilterFocused] = useState(true);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    if (isHomePage) {
      setIsFilterFocused(true);
    } else if (!isHomePage) {
      setIsFilterFocused(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  function handleScroll() {
    setIsScrolled(window.scrollY > 0);
    if (window.scrollY > 0) {
      setIsFilterFocused(false);
    } else if (window.scrollY === 0 && isHomePage) {
      setIsFilterFocused(true);
    }
  }

  function toggleFilterFocus() {
    setIsFilterFocused(true);
  }

  function onOpenFilterFocus(modalType) {
    setModalType(modalType);
    setIsFilterFocused(true);
  }

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

  function onCloseFilterModals() {
    setIsFilterFocused(false);
    setModalType(null);
  }

  return (
    <div className="app-header-mobile-bottom">
      <div className="app-header-mobile-options explore">
        <img src="/public/svg/explore.svg" alt="" />
        <h4>Explore</h4>
      </div>
      <div className="app-header-mobile-options wishlist">
        <img src="/public/svg/wishlist.svg" alt="" />
        <h4>Wishlist</h4>
      </div>
      <div className="app-header-mobile-options trips">
        <img src="/public/svg/trips.svg" alt="" />
        <h4>Trips</h4>
      </div>
      <div className="app-header-mobile-options messages">
        <img src="/public/svg/messages.svg" alt="" />
        <h4>Messages</h4>
      </div>
      <div className="app-header-mobile-options profile">
        <img src="/public/svg/profile.svg" alt="" />
        <h4>Profile</h4>
      </div>
    </div>
  );
}
