import { useState } from "react";
function IconBlocks() {
    return (
        <div className="block-container">
            <div className="icon-blocks">
                <div className="icon-styles">
                    <p>
                        <i className="fa-solid fa-users"></i>
                        personalized shop
                    </p>
                </div>
                <div className="icon-styles">
                    <p>
                        <i className="fa-solid fa-bell"></i>
                        email notification
                    </p>
                </div>
                <div className="icon-styles">
                    <p>
                        <i className="fa-solid fa-earth-americas"></i>
                        worldwide shipping
                    </p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="./Images/product1.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="./Images/product2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="./Images/product3.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="./Images/product4.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    )
}
export default IconBlocks;
