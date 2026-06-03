import React from "react";
import FeatureCard from "./FeaturedCard";
import Header from "./Header";
import DashboardCards from "./BodyBox";
import Sidebar from "./SideBar";
import WidgetHeader from "./WidgetHeader";
import { Route, Routes } from 'react-router-dom';
import LoginData from "./pages/LoginData";
import SignUp from "./pages/SignUp";
import './App.css';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <Header />
      <FeatureCard />
      <DashboardCards />
      <WidgetHeader />
    </>
  )
}

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<LoginData />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>



    </div>

  );
}

export default App