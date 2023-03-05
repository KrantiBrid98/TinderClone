import React from "react";
import ChatContainer from "./ChatContainer";
import TinderCards from "./TinderCard";
import './CSS/dashboard.css'

const Dashboard = () => {
    return <div className="dashboard">
        <div className="section1">
            <ChatContainer />
        </div>
        <div className="swiper-container section2">
            <h2>Start Swipping! </h2>
            <div className="card-container">
                <TinderCards />
            </div>
        </div>
    </div>
}

export default Dashboard