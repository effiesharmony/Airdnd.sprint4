import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loadStays,
  addStay,
  updateStay,
  removeStay,
  addStayMsg,
} from "../store/actions/stay.actions.js";

import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js";
import { stayService } from "../services/stay/stay.service.local.js";
import { userService } from "../services/user/user.service.local.js";

import { StayList } from "../cmps/StayList.jsx";
import { StayFilter } from "../cmps/StayFilterFocused.jsx";

export function StayIndex() {
  const navigate = useNavigate();
  const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter());
  const stays = useSelector((storeState) => storeState.stayModule.stays);

  useEffect(() => {
    loadStays(filterBy);
  }, [filterBy]);

  async function onRemoveStay(stayId) {
    try {
      await removeStay(stayId);
      showSuccessMsg("Stay removed");
    } catch (err) {
      showErrorMsg("Cannot remove stay");
    }
  }

  async function onAddStay() {
    const stay = stayService.getEmptyStay();
    stay.vendor = prompt("Vendor?");
    try {
      const savedStay = await addStay(stay);
      showSuccessMsg(`Stay added (id: ${savedStay._id})`);
    } catch (err) {
      showErrorMsg("Cannot add stay");
    }
  }

  async function onUpdateStay(stay) {
    const speed = +prompt("New speed?", stay.speed);
    if (speed === 0 || speed === stay.speed) return;

    const stayToSave = { ...stay, speed };
    try {
      const savedStay = await updateStay(stayToSave);
      showSuccessMsg(`Stay updated, new speed: ${savedStay.speed}`);
    } catch (err) {
      showErrorMsg("Cannot update stay");
    }
  }

  function handleShowDetails(stayId) {
    navigate(`/stay/${stayId}`);
  }

  return (
    <main className="stay-index">
      <header>
        <h2>Stays</h2>
        {userService.getLoggedinUser() && (
          <button onClick={onAddStay}>Add a Stay</button>
        )}
      </header>
      <button onClick={() => handleShowDetails('s102')}>Stay details</button>

      <StayFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      <StayList
        stays={stays}
        onRemoveStay={onRemoveStay}
        onUpdateStay={onUpdateStay}
      />
    </main>
  );
}
