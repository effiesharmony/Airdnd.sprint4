import React from 'react'
import { Routes, Route } from 'react-router'

import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs.jsx'
import { StayIndex } from './pages/CarIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './cmps/Chat.jsx'
import { HostIndex } from './pages/HostIndex.jsx'

import { StayDetails } from './pages/StayDetails.jsx'
import { UserDetails } from './pages/UserDetails.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './cmps/LoginSignup.jsx'
import { Login } from './cmps/Login.jsx'
import { Signup } from './pages/Signup.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <UserMsg />

            <main>
                <Routes>
                    <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route>
                    <Route path="car" element={<StayIndex />} />
                    <Route path="car/:carId" element={<StayDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="chat" element={<ChatApp />} />
                    <Route path="admin" element={<HostIndex />} />
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


