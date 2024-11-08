import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loadStays } from "../store/actions/stay.actions.js"

// import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"+
import { stayService } from "../services/stay/stay.service.local.js"
// import { userService } from "../services/user/user.service.local.js"

import { StayList } from "../cmps/StayList.jsx"
import { StayCategories } from "../cmps/StayCategories.jsx"

export function StayIndex() {
  const navigate = useNavigate()
  const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
  const stays = useSelector((storeState) => storeState.stayModule.stays)

  useEffect(() => {
    loadStays(filterBy)
  }, [filterBy])

  return (
    <main className="stay-index">

      <StayCategories filterBy={filterBy} setFilterBy={setFilterBy} />
      <StayList stays={stays} />
    </main>
  )
}
