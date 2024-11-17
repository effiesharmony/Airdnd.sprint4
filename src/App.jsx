import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router"

import { AboutUs } from "./pages/AboutUs.jsx"
import { StayIndex } from "./pages/StayIndex.jsx"
import { StayDetails } from "./pages/StayDetails.jsx"
import { UserDetails } from "./pages/UserDetails.jsx"
import { StayEdit } from "./pages/StayEdit.jsx"
import { Trips } from "./pages/Trips.jsx"
import { DashboardReservation } from "./pages/DashboardReservation.jsx" 
import { DashboardListings } from "./pages/DashboardListings.jsx";

import { AppHeader } from "./cmps/AppHeader.jsx"
import { AppFooter } from "./cmps/AppFooter.jsx"
import { LoginSignup } from "./cmps/LoginSignup.jsx"
import { Login } from "./cmps/Login.jsx"
import { Signup } from "./cmps/Signup.jsx"
import { ReservationDetails } from "./cmps/ReservationDetails.jsx"

export function App() {
  const location = useLocation()

  return (
    <div className="main-container">
      <AppHeader />

      <main>
        <Routes>
        <Route path="/" element={<Navigate to="/stay" replace />} />
          <Route path="stay" element={<StayIndex />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="stay/:stayId" element={<StayDetails />} />
          <Route path="/stay/edit/:stayId?" element={<StayEdit />} />
          <Route path="/reservation/:stayId" element={<ReservationDetails />} />
          <Route path="user/:id" element={<UserDetails />} />
          <Route path="trips" element={<Trips />} />
          <Route path="/dashboard/reservations" element={<DashboardReservation />} />
          <Route path="/dashboard/listings" element={<DashboardListings />} />
          <Route path="login" element={<LoginSignup />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </main>

      <AppFooter />
    </div>
  )
}
