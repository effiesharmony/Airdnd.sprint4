// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { stayAction } from "../store/actions/stay.actions.js";
// import { DateModal } from "./DateModal.jsx";
// import { GuestModal } from "./GuestModal.jsx";
// import { PlaceModal } from "./PlaceModal.jsx";
// import { Link } from "react-router-dom";
// import "react-datepicker/dist/react-datepicker.css";

export function StayFilterUnfocused() {
  //   const dispatch = useDispatch();
  //   const filterBy = useSelector((state) => state.stayModule.filterBy);
  //   const [isFilterApplied, setIsFilterApplied] = useState(false);
  //   const [isPlaceDropdownOpen, setPlaceDropdownOpen] = useState(false);
  //   const [isDateDropdownOpen, setDateDropdownOpen] = useState(false);
  //   const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false);
  //   const [totalGuests, setTotalGuests] = useState(filterBy.minCapacity || 0);

  //   useEffect(() => {
  //     if (isFilterApplied) {
  //       stayAction.loadStays();
  //       setIsFilterApplied(false);
  //     }
  //   }, [isFilterApplied, dispatch]);

  //   function handleChange({ target }) {
  //     const { name, value } = target;
  //     dispatch(stayAction.setFilterBy({ ...filterBy, [name]: value }));
  //   }

  //   function handleDateChange(dates) {
  //     const [startDate, endDate] = dates;
  //     dispatch(
  //       stayAction.setFilterBy({
  //         ...filterBy,
  //         availableDates: { start: startDate, end: endDate },
  //       })
  //     );
  //     if (startDate && endDate) {
  //       setDateDropdownOpen(false);
  //     }
  //   }

  //   function handleGuestChange(newTotalGuests) {
  //     setTotalGuests(newTotalGuests);
  //     dispatch(
  //       stayAction.setFilterBy({ ...filterBy, minCapacity: newTotalGuests })
  //     );
  //   }

  //   function applyFilters() {
  //     setIsFilterApplied(true);
  //   }

  return (
    <div className="stay-filter-unfocused">
      {/* Place */}
      <div
        className="stay-filter-unfocused-place"
        onClick={() => setPlaceDropdownOpen(!isPlaceDropdownOpen)}
      >
        <h3>Anywhere</h3>
      </div>
      
      {/* Date */}
      <div
        className="stay-filter-unfocused-date"
        onClick={() => setDateDropdownOpen(!isDateDropdownOpen)}
      >
        <h3>Any week</h3>
      </div>

      {/* Guests */}
      <div
        className="stay-filter-unfocused-guest"
        onClick={() => setGuestDropdownOpen(!isGuestDropdownOpen)}
      >
        <h3>Add guests</h3>
      </div>
      <button className="stay-filter-unfocused-search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {/* {isPlaceDropdownOpen && <PlaceModal filterBy={filterBy} />} */}
      {/* {isDateDropdownOpen && ( */}
      {/* //   <DateModal filterBy={filterBy} handleDateChange={handleDateChange} /> */}
      {/* // )} */}
      {/* // {isGuestDropdownOpen && ( */}
      {/* //   <GuestModal filterBy={filterBy} handleGuestChange={handleGuestChange} /> */}
      {/* // )} */}
    </div>
  );
}
