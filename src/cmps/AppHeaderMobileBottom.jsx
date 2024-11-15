import { NavLink } from "react-router-dom";

export function AppHeaderMobileBottom() {
  return (
    <nav className="app-header-mobile-bottom">
      <div className="app-header-mobile-bottom-box">
        <NavLink
          to="/stay"
          className={({ isActive }) =>
            `app-header-mobile-options explore ${isActive ? "active" : ""}`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "24px",
              width: "24px",
              stroke: "currentcolor",
              strokeWidth: "2",
              overflow: "visible",
            }}
          >
            <g fill="none">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m19 19 11 11"></path>
            </g>
          </svg>
          <h4>Explore</h4>
        </NavLink>
        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) =>
            `app-header-mobile-options wishlist ${isActive ? "active" : ""}`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "24px",
              width: "24px",
              stroke: "currentcolor",
              strokeWidth: "2",
              overflow: "visible",
            }}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>

          <h4>Wishlist</h4>
        </NavLink>
        <NavLink
          to="/dashboard/reservations"
          className={({ isActive }) =>
            `app-header-mobile-options trips ${isActive ? "active" : ""}`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "24px",
              width: "24px",
              stroke: "currentcolor",
              strokeWidth: "2",
              overflow: "visible",
            }}
          >
            <g fill="none">
              <path d="M16.67 24.94c-2.35 3.15-4.7 4.73-7.07 4.73-3.62 0-5.17-2.38-5.53-4.21-.32-1.63.5-3.82.8-4.54l1.75-3.85A205.3 205.3 0 0 1 11.7 6.6L12.6 5l.23-.41c.4-.68 1.5-2.25 3.84-2.25a4.16 4.16 0 0 1 3.78 2.16l.29.5.76 1.37.4.73c1.22 2.3 2.75 5.52 4.02 8.25l2.51 5.5c.27.61 1.16 2.92.83 4.62-.36 1.83-1.9 4.2-5.53 4.2-2.42 0-4.77-1.57-7.06-4.72z"></path>
              <path d="M16.67 24.94c2.1-2.8 3.34-5.09 3.7-6.84.52-2.63-1.06-4.83-3.7-4.83s-4.23 2.2-3.7 4.83c.35 1.75 1.59 4.03 3.7 6.84z"></path>
            </g>
          </svg>

          <h4>Trips</h4>
          {/* <h4>Reservations</h4> */}
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `app-header-mobile-options messages ${isActive ? "active" : ""}`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "24px",
              width: "24px",
              stroke: "currentcolor",
              strokeWidth: "2",
              overflow: "visible",
            }}
          >
            <path
              fill="none"
              d="M26 3a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-6.32L16 29.5 12.32 25H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"
            ></path>
          </svg>

          <h4>Messages</h4>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `app-header-mobile-options profile ${isActive ? "active" : ""}`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "24px",
              width: "24px",
              stroke: "currentcolor",
              strokeWidth: "2",
              overflow: "visible",
            }}
          >
            <g fill="none">
              <circle cx="16" cy="16" r="14"></circle>
              <path d="M14.02 19.66a6 6 0 1 1 3.96 0M17.35 19.67H18c3.69.61 6.8 2.91 8.54 6.08m-20.92-.27A12.01 12.01 0 0 1 14 19.67h.62"></path>
            </g>
          </svg>
          <h4>Profile</h4>
        </NavLink>
      </div>
    </nav>
  );
}
