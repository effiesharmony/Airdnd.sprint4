import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { stayAction } from "../store/actions/stay.actions.js"
import { DateModal } from "./DateModal.jsx"
import { GuestModal } from "./GuestModal.jsx"
import { PlaceModal } from "./PlaceModal.jsx"
import { Link, useNavigate } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css"

export function StayFilterFocused({ modalType, isFilterFocused }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const filterBy = useSelector((state) => state.stayModule.filterBy)
  const [isFilterApplied, setIsFilterApplied] = useState(false)
  const [isPlaceDropdownOpen, setPlaceDropdownOpen] = useState(false)
  const [isDateInDropdownOpen, setDateInDropdownOpen] = useState(false)
  const [isDateOutDropdownOpen, setDateOutDropdownOpen] = useState(false)
  const [isGuestDropdownOpen, setGuestDropdownOpen] = useState(false)
  const [totalGuests, setTotalGuests] = useState(filterBy.minCapacity || 0)

  useEffect(() => {
    if (isFilterApplied) {
      stayAction.loadStays()
      setIsFilterApplied(false)
    }
  }, [isFilterApplied])

  useEffect(() => {
    onModalsClose()
    switch (modalType) {
      case "anywhere":
        onPlaceModalOpen()
        break
      case "anyWeek":
        onDateInModalOpen()
        break
      case "addGuests":
        onGuestModalOpen()
        break
      default:
        break
    }
  }, [modalType])

  function handleChange({ target }) {
    const { name, value } = target
    dispatch(stayAction.setFilterBy({ ...filterBy, [name]: value }))
    if (name === "place" && value) {
      setTimeout(() => {
        onDateInModalOpen()
      }, 1000)
    }
  }

  function handleDateChange(dates) {
    const [startDate, endDate] = dates
    dispatch(
      stayAction.setFilterBy({
        ...filterBy,
        availableDates: { start: startDate, end: endDate },
      })
    )
    if (startDate && !endDate) {
      setDateInDropdownOpen(false)
      setDateOutDropdownOpen(true)
    }
  }

  function handleGuestChange(newTotalGuests) {
    setTotalGuests(newTotalGuests)
    dispatch(
      stayAction.setFilterBy({ ...filterBy, minCapacity: newTotalGuests })
    )
  }

  function clearDates() {
    dispatch(
      stayAction.setFilterBy({
        ...filterBy,
        availableDates: { start: null, end: null },
      })
    )
    setDateInDropdownOpen(false)
    setDateOutDropdownOpen(false)
  }

  function applyFilters(event) {
    event.preventDefault()
    const searchParams = new URLSearchParams()

    if (filterBy.availableDates.start) {
      const checkInDate = new Date(filterBy.availableDates.start)
      searchParams.set(
        "checkIn",
        `${checkInDate.getFullYear()}-${(checkInDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${checkInDate.getDate().toString().padStart(2, "0")}`
      )
    }

    if (filterBy.availableDates.end) {
      const checkOutDate = new Date(filterBy.availableDates.end)
      searchParams.set(
        "checkOut",
        `${checkOutDate.getFullYear()}-${(checkOutDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${checkOutDate.getDate().toString().padStart(2, "0")}`
      )
    }

    if (totalGuests) {
      searchParams.set("guests", totalGuests)
    }

    navigate(`/stay?${searchParams.toString()}`)
    setIsFilterApplied(true)
  }

  function onPlaceModalOpen() {
    setPlaceDropdownOpen(!isPlaceDropdownOpen)
    setDateInDropdownOpen(false)
    setDateOutDropdownOpen(false)
    setGuestDropdownOpen(false)
  }

  function onDateInModalOpen() {
    setDateInDropdownOpen(!isDateInDropdownOpen)
    setDateOutDropdownOpen(false)
    setPlaceDropdownOpen(false)
    setGuestDropdownOpen(false)
  }

  function onDateOutModalOpen() {
    setDateOutDropdownOpen(!isDateOutDropdownOpen)
    setDateInDropdownOpen(false)
    setPlaceDropdownOpen(false)
    setGuestDropdownOpen(false)
  }

  function onGuestModalOpen() {
    setGuestDropdownOpen(!isGuestDropdownOpen)
    setDateInDropdownOpen(false)
    setDateOutDropdownOpen(false)
    setPlaceDropdownOpen(false)
  }

  function onModalsClose() {
    setGuestDropdownOpen(false)
    setDateInDropdownOpen(false)
    setDateOutDropdownOpen(false)
    setPlaceDropdownOpen(false)
  }

  return (
    <section className={`stay-filter-focused-main-box ${isFilterFocused ? '' : 'transform'}`}>
      <div className="stay-filter-focused-main">
        <div className="stays-link">
          <Link to="/stay" className="stays">
            Stays
          </Link>
        </div>

        <section
          className={`stay-filter-focused ${isPlaceDropdownOpen ||
              isDateInDropdownOpen ||
              isDateOutDropdownOpen ||
              isGuestDropdownOpen
              ? "gray"
              : "white"
            }`}
        >
          <div
            className={`stay-filter-focused-place ${isPlaceDropdownOpen ? "focus-place" : "not-focus-place"
              }`}
            onClick={() => onPlaceModalOpen()}
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

          <div
            className={`stay-filter-focused-date ${isDateInDropdownOpen ? "focus-date" : "not-focus-date"
              }`}
            onClick={() => onDateInModalOpen()}
          >
            <div className="stay-filter-focused-date-in-box">
              <div className="stay-filter-focused-date-in">
                <h3>Check in</h3>
                <div className="date-input">
                  {filterBy.availableDates.start
                    ? filterBy.availableDates.start.toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )
                    : "Add dates"}
                </div>
              </div>
              {(filterBy.availableDates.start && filterBy.availableDates.end) && (isDateInDropdownOpen) && (
                <button onClick={clearDates}><img src="/public/svg/close.svg" alt="" /></button>
              )}
            </div>
          </div>

          <div
            className={`stay-filter-focused-date ${isDateOutDropdownOpen ? "focus-date" : "not-focus-date"
              }`}
            onClick={() => onDateOutModalOpen()}
          >
            <div className="stay-filter-focused-date-out-box">
              <div className="stay-filter-focused-date-out">
                <h3>Check out</h3>
                <div className="date-input">
                  {filterBy.availableDates.end
                    ? filterBy.availableDates.end.toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )
                    : "Add dates"}
                </div>
              </div>
              {(filterBy.availableDates.start && filterBy.availableDates.end) && (isDateOutDropdownOpen) && (
                <button onClick={clearDates}><img src="/public/svg/close.svg" alt="" /></button>
              )}
            </div>
          </div>

          <div
            className={`stay-filter-focused-guest ${isGuestDropdownOpen ? "focus-guest" : "not-focus-guest"
              }`}
            onClick={() => onGuestModalOpen()}
          >
            <div className="guest-input-box">
              <h3>Who</h3>
              <div className="guest-input">
                {totalGuests
                  ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
                  : "Add guests"}
              </div>
            </div>
            <button
              className={`stay-filter-focused-search ${isPlaceDropdownOpen ||
                  isDateInDropdownOpen ||
                  isDateOutDropdownOpen ||
                  isGuestDropdownOpen
                  ? "search"
                  : "not-search"
                }`}
              onClick={(ev) => applyFilters(ev)}
            >
              {isPlaceDropdownOpen ||
                isDateInDropdownOpen ||
                isDateOutDropdownOpen ||
                isGuestDropdownOpen ? (
                <>
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </>
              ) : (
                <i className="fa-solid fa-magnifying-glass"></i>
              )}
            </button>
          </div>
        </section>

        {isPlaceDropdownOpen && <PlaceModal filterBy={filterBy} />}
        {isDateInDropdownOpen && (
          <DateModal filterBy={filterBy} handleDateChange={handleDateChange} />
        )}
        {isDateOutDropdownOpen && (
          <DateModal filterBy={filterBy} handleDateChange={handleDateChange} />
        )}
        {isGuestDropdownOpen && (
          <GuestModal
            filterBy={filterBy}
            handleGuestChange={handleGuestChange}
          />
        )}
      </div>
    </section>
  )
}
