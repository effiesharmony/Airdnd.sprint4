export function PlaceModalMobile({ filterBy, handleChange, onDateModalOpen, clearPlace }) {
  return (
    <div className="place-modal-mobile">
      <h1>Where to?</h1>
      <i className="fa-solid fa-magnifying-glass"></i>
      <form onSubmit={onDateModalOpen}>
      <input
        type="text"
        name="place"
        value={filterBy.place || ""}
        onChange={handleChange}
        placeholder="Search destinations"
      />
      </form>
      <div className="date-modal-btns-box">
        <button className="clear" onClick={()=>clearPlace()}>Clear</button>
        <button className="next" onClick={()=>onDateModalOpen()}>Next</button>
      </div>
    </div>
  );
}
