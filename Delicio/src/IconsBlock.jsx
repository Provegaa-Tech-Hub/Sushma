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

            <div className="card-main">
                <div className="card card-styles" >
                    <img
                        src="./Images/product1.jpg"className="card-img-top" alt="product" />
                    <div className="card-body">
                        <a href="#" className="card-text" >
                           <span>Delicious Chocolate</span> 
                        </a>
                        <p>
                            $ 23.00
                        </p>

                        
                    </div>
                </div>
                <div className="card card-styles">
                    <img
                        src="./Images/product2.jpg"
                        className="card-img-top"
                        alt="product"
                    />

                    <div className="card-body">

                        <a href="#" className="card-text">
                           Mix of Chocolates
                        </a>

                        <p >
                          $ 32.00
                        </p>
                    </div>
                </div>
                <div className="card card-styles" >
                    <img
                        src="./Images/product3.jpg"
                        className="card-img-top"
                        alt="product"
                    />

                    <div className="card-body">

                        <a href="#" className="card-text">
                           Choco Nuts
                        </a>

                        <p>
                            $ 20.00
                        </p>
                    </div>
                </div>
                <div className="card card-styles" >
                    <img
                        src="./Images/product4.jpg"
                        className="card-img-top"
                        alt="product"
                    />

                    <div className="card-body">
                        <a href="#"className="card-text">
                           Soft Cake.
                        </a>

                        <p >
                          $ 15.00
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default IconBlocks;
