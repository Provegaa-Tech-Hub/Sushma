import { useState } from "react";

function TopBar() {

    return (
        <div className="topbar">
            <div className="container">
                <div className="welcome-styles">
                    Welcome to Delicio
                </div>
                <nav className="account language">
                    <a href="#">Eng</a>
                    <a href="#">Usd</a>
                    <a href="#">MyAccount</a>
                </nav>
            </div>
        </div>
        
    )

}
export default TopBar;