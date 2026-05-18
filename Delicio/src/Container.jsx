import { useState } from "react";
function Container(){
    return(
        <div className="container-box">
            <div className="container">
                <div className="container-head">
                    <img src="./Images/logo.png"/>
                    </div>
                
                <nav className="home-styles nav-hover">
                    <a href="#" className="home">HOME</a>
                    <a href="#">SHOP</a>
                    <a href="#">SINGLE</a>
                    <a href="#">CART</a>
                    <a href="#">CHECKOUT</a>
                    <a href="#">ABOUTUS</a>
                    <a href="#">DROPDOWN</a>
                    <a href="#">CONTACT</a>
                </nav>

            </div>

        </div>
    )
}
export default Container;