import { useState, useEffect } from "react";

export function GuestModal({ filterBy, handleGuestChange }) {
  const isAdultsDisabled = filterBy.adults === 0;
  const isChildrenDisabled = filterBy.children === 0;
  const isInfantsDisabled = filterBy.infants === 0;
  const isPetsDisabled = filterBy.pets === 0;
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  useEffect(() => {
    const guestDetails = { adults, children, infants, pets };
    handleGuestChange(guestDetails)
  }, [adults, children, infants, pets]);

  function increment(type) {
    switch (type) {
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
        break;
      case "infants":
        setInfants(infants + 1);
        break;
      case "pets":
        setPets(pets + 1);
        break;
      default:
        break;
    }
  }

  function decrement(type) {
    switch (type) {
      case "adults":
        setAdults(Math.max(adults - 1, 0));
        break;
      case "children":
        setChildren(Math.max(children - 1, 0));
        break;
      case "infants":
        setInfants(Math.max(infants - 1, 0));
        break;
      case "pets":
        setPets(Math.max(pets - 1, 0));
        break;
      default:
        break;
    }
  }

  return (
    <div className="guest-modal-box">
      <div className="guest-modal">
        <div className="guest-modal-options">
          <div className="guest-modal-options-left">
            <h4>Adults</h4>
            <p>Ages 13 or above</p>
          </div>
          <div className="guest-modal-options-right">
            <button
              className={`guest-modal-options-right-mbtn ${
                isAdultsDisabled ? "disabled" : ""
              }`}
              onClick={() => decrement("adults")}
              disabled={adults === 0}
            >
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
              </svg>
            </button>
            <span>{adults}</span>
            <button onClick={() => increment("adults")}>
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="guest-modal-options">
          <div className="guest-modal-options-left">
            <h4>Children</h4>
            <p>Ages 2 – 12</p>
          </div>
          <div className="guest-modal-options-right">
            <button
              className={`guest-modal-options-right-mbtn ${
                isChildrenDisabled ? "disabled" : ""
              }`}
              onClick={() => decrement("children")}
              disabled={children === 0}
            >
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
              </svg>
            </button>
            <span>{children}</span>
            <button onClick={() => increment("children")}>
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="guest-modal-options">
          <div className="guest-modal-options-left">
            <h4>Infants</h4>
            <p>Under 2</p>
          </div>
          <div className="guest-modal-options-right">
            <button
              className={`guest-modal-options-right-mbtn ${
                isInfantsDisabled ? "disabled" : ""
              }`}
              onClick={() => decrement("infants")}
              disabled={infants === 0}
            >
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
              </svg>
            </button>
            <span>{infants}</span>
            <button onClick={() => increment("infants")}>
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="guest-modal-options">
          <div className="guest-modal-options-left">
            <h4>Pets</h4>
            <p className="pets">Bringing a service animal?</p>
          </div>
          <div className="guest-modal-options-right">
            <button
              className={`guest-modal-options-right-mbtn ${
                isPetsDisabled ? "disabled" : ""
              }`}
              onClick={() => decrement("pets")}
              disabled={pets === 0}
            >
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
              </svg>
            </button>
            <span>{pets}</span>
            <button onClick={() => increment("pets")}>
              <svg
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="svg-icon"
              >
                <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
