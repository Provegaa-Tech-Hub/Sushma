import React from "react";
import FeatureCard from "./FeaturedCard";
import Header from "./Header";
import DashboardCards from "./BodyBox";
import './App.css';
function App() {
  return (
    <div>
      <Header/>
     <FeatureCard/>
     <DashboardCards/>
    </div>

  );
}

export default App