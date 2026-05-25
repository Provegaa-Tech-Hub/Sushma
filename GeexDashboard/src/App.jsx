import React from "react";
import FeatureCard from "./FeaturedCard";
import Header from "./Header";
import DashboardCards from "./BodyBox";
import Sidebar from "./SideBar";
import WidgetHeader from "./WidgetHeader";

import './App.css';
function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <FeatureCard />
      <DashboardCards />
      <WidgetHeader />
     
    </div>

  );
}

export default App