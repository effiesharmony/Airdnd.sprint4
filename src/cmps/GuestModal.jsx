export function GuestModal({ filterBy, handleGuestChange }) {
  return (
    <div className="guest-modal">
      <div className="guest-modal-options">
        <div className="guest-modal-options-left">
          <h4>Adults</h4>
          <p>Ages 13 or above</p>
        </div>
        <div className="guest-modal-options-right">
          <button onClick={() => handleGuestChange("decrease")}>-</button>
          <span>{filterBy.minCapacity || 0}</span>
          <button onClick={() => handleGuestChange("increase")}>+</button>
        </div>
      </div>

      <div className="guest-modal-options">
        <div className="guest-modal-options-left">
          <h4>Children</h4>
          <p>Ages 2 – 12</p>
        </div>
        <div className="guest-modal-options-right">
          <button onClick={() => handleGuestChange("decrease")}>-</button>
          <span>{filterBy.minCapacity || 0}</span>
          <button onClick={() => handleGuestChange("increase")}>+</button>
        </div>
      </div>

      <div className="guest-modal-options">
        <div className="guest-modal-options-left">
          <h4>Infants</h4>
          <p>Under 2</p>
        </div>
        <div className="guest-modal-options-right">
          <button onClick={() => handleGuestChange("decrease")}>-</button>
          <span>{filterBy.minCapacity || 0}</span>
          <button onClick={() => handleGuestChange("increase")}>+</button>
        </div>
      </div>

      <div className="guest-modal-options">
        <div className="guest-modal-options-left">
          <h4>Pets</h4>
          <p>Bringing a service animal?</p>
        </div>
        <div className="guest-modal-options-right">
          <button onClick={() => handleGuestChange("decrease")}>-</button>
          <span>{filterBy.minCapacity || 0}</span>
          <button onClick={() => handleGuestChange("increase")}>+</button>
        </div>
      </div>
    </div>
  );
}
