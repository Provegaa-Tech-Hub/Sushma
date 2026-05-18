import { useState } from "react";

function Sliders() {
    return (
        
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Images/slide-01.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/slide-02.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/slide-03.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/slide-04.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="slide-caption">
                    <h2>We are Delicio</h2>
                    <h2>ideal for every Chocoholic</h2>
                    <h2>
                        <a href="#">SEE YOUR OFFER</a>
                    </h2>

                </div>
            </div>

       
    )
}
export default Sliders;