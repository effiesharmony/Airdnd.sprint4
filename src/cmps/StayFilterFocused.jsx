import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stayAction } from "../store/actions/stay.actions.js";
import { DateModal } from "./DateModal.jsx";
import { GuestModal } from "./GuestModal.jsx";
import "react-datepicker/dist/react-datepicker.css";

export function StayFilterFocused() {
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.stayModule.filterBy);
  const [isPlaceDropdownOpen, setPlaceDropdownOpen] = useState(false);
  const [isDateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false);

  useEffect(() => {
    stayAction.loadStays();
  }, [filterBy]);

  function handleChange({ target }) {
    const { name, value } = target;
    dispatch(stayAction.setFilterBy({ ...filterBy, [name]: value }));
  }

  function handleDateChange(dates) {
    const [startDate, endDate] = dates;
    dispatch(
      stayAction.setFilterBy({
        ...filterBy,
        availableDates: { start: startDate, end: endDate },
      })
    );
    if (startDate && endDate) {
      setDateDropdownOpen(false);
    }
  }

  function handleGuestChange(operation) {
    const currentCapacity = filterBy.minCapacity || 0;
    const newCapacity =
      operation === "increase"
        ? currentCapacity + 1
        : Math.max(currentCapacity - 1, 0);
    dispatch(stayAction.setFilterBy({ ...filterBy, minCapacity: newCapacity }));
  }

  return (
    <section className="stay-filter-focused">
      {/* Place */}
      <div className="stay-filter-focused-place" onClick={() => setPlaceDropdownOpen(!isPlaceDropdownOpen)}>
        <h3>Where</h3>
        <input
          type="text"
          name="place"
          value={filterBy.place || ""}
          onChange={handleChange}
          placeholder="Search destination"
        />
      </div>

      {/* Date */}
      <div
        className="stay-filter-focused-date"
        onClick={() => setDateDropdownOpen(!isDateDropdownOpen)}
      >
        <h3>Check in</h3>
        <div className="date-input">
          {filterBy.availableDates.start && filterBy.availableDates.end
            ? `${filterBy.availableDates.start.toLocaleDateString()} - ${filterBy.availableDates.end.toLocaleDateString()}`
            : "Add dates"}
        </div>
      </div>

      {isDateDropdownOpen && (
        <DateModal filterBy={filterBy} handleDateChange={handleDateChange} />
      )}

      {/* Guests */}
      <div
        className="stay-filter-focused-guest"
        onClick={() => setGuestDropdownOpen(!isGuestDropdownOpen)}
      >
        <h3>Who</h3>
        <div className="guest-input">
          {filterBy.minCapacity
            ? `${filterBy.minCapacity} ${
                filterBy.minCapacity === 1 ? "guest" : "guests"
              }`
            : "Add guests"}
        </div>
      </div>

      {isGuestDropdownOpen && (
        <GuestModal filterBy={filterBy} handleGuestChange={handleGuestChange} />
      )}
    </section>
  );
}
