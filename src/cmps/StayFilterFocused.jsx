import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { stayAction } from "../store/actions/stay.actions.js"
import { DateModal } from "./DateModal.jsx"
import { GuestModal } from "./GuestModal.jsx"
import { PlaceModal } from "./PlaceModal.jsx"
import { Link } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css"

export function StayFilterFocused() {
  const dispatch = useDispatch()
  const filterBy = useSelector((state) => state.stayModule.filterBy)
  const [isFilterApplied, setIsFilterApplied] = useState(false)
  const [isPlaceDropdownOpen, setPlaceDropdownOpen] = useState(false)
  const [isDateDropdownOpen, setDateDropdownOpen] = useState(false)
  const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false)
  const [totalGuests, setTotalGuests] = useState(filterBy.minCapacity || 0)

  useEffect(() => {
    if (isFilterApplied) {
      stayAction.loadStays()
      setIsFilterApplied(false)
    }
  }, [isFilterApplied, dispatch])

  function handleChange({ target }) {
    const { name, value } = target
    dispatch(stayAction.setFilterBy({ ...filterBy, [name]: value }))
  }

  function handleDateChange(dates) {
    const [startDate, endDate] = dates
    dispatch(
      stayAction.setFilterBy({
        ...filterBy,
        availableDates: { start: startDate, end: endDate },
      })
    )
    if (startDate && endDate) {
      setDateDropdownOpen(false)
    }
  }

  function handleGuestChange(newTotalGuests) {
    setTotalGuests(newTotalGuests)
    dispatch(
      stayAction.setFilterBy({ ...filterBy, minCapacity: newTotalGuests })
    )
  }

  function applyFilters() {
    setIsFilterApplied(true)
  }

  return (
    <section className="stay-filter-focused-main">
      <div className="stays-link">
        <Link to="/stay" className="stays">Stays</Link>
        </div>
    <section className="stay-filter-focused">

      {/* Place */}
      <div
        className="stay-filter-focused-place"
        onClick={() => setPlaceDropdownOpen(!isPlaceDropdownOpen)}
      >
        <h3>Where</h3>
        <input
          type="text"
          name="place"
          value={filterBy.place || ""}
          onChange={handleChange}
          placeholder="Search destinations"
        />
      </div>


      {/* Date */}
      <div
        className="stay-filter-focused-date"
        onClick={() => setDateDropdownOpen(!isDateDropdownOpen)}
        >
        <div className="stay-filter-focused-date-in">
          <div className="stay-filter-focused-date-check-in">
            <h3>Check in</h3>
            <div className="date-input">
              {filterBy.availableDates.start
                ? filterBy.availableDates.start.toLocaleDateString()
                : "Add dates"}
            </div>
          </div>
        </div>

        <div className="stay-filter-focused-date-out">
          <div className="stay-filter-focused-date-check-out">
            <h3>Check out</h3>
            <div className="date-input">
              {filterBy.availableDates.end
                ? filterBy.availableDates.end.toLocaleDateString()
                : "Add dates"}
            </div>
          </div>
        </div>
      </div>


      {/* Guests */}
      <div
        className="stay-filter-focused-guest"
        onClick={() => setGuestDropdownOpen(!isGuestDropdownOpen)}
        >
        <h3>Who</h3>
        <div className="guest-input">
          {/* {filterBy.minCapacity
            ? `${filterBy.minCapacity} ${
              filterBy.minCapacity === 1 ? "guest" : "guests"
              }`
              : "Add guests"} */}
          {totalGuests
            ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
            : "Add guests"}
        </div>
      </div>


      {/* {isGuestDropdownOpen && (
        <GuestModal
        totalGuests={totalGuests}
        handleGuestChange={handleGuestChange}
        />
        )} */}

      <button className="stay-filter-focused-search" onClick={applyFilters}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </section>
    {isPlaceDropdownOpen && <PlaceModal filterBy={filterBy} />}
    {isDateDropdownOpen && (
      <DateModal filterBy={filterBy} handleDateChange={handleDateChange} />
    )}
    {isGuestDropdownOpen && (
      <GuestModal filterBy={filterBy} handleGuestChange={handleGuestChange} />
    )}
    </section>
  )
}
