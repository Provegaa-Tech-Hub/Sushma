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
                        src="./Images/product1.jpg" className="card-img-top" alt="product" />
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
                        <a href="#" className="card-text">
                            Soft Cake.
                        </a>

                        <p >
                            $ 15.00
                        </p>
                    </div>
                </div>
            </div>

            <div className="choco-conatiner">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center align-items-center gap-5 client-slider">

                                <img src="./Images/client1.png" className="brand-img" alt="client1" />

                                <img src="./Images/client2.png" className="brand-img" alt="client2" />

                                <img src="./Images/client3.png" className="brand-img" alt="client3" />

                                <img src="./Images/client4.png" className="brand-img" alt="client4" />

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center align-items-center gap-5 client-slider">

                                <img src="./Images/client1.png" className="brand-img" alt="client1" />

                                <img src="./Images/client2.png" className="brand-img" alt="client2" />

                                <img src="./Images/client3.png" className="brand-img" alt="client3" />

                                <img src="./Images/client4.png" className="brand-img" alt="client4" />

                            </div>
                        </div>

                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <i className="fa-regular fa-circle-left"></i>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <i className="fa-regular fa-circle-right"></i>
                    </button>
                </div>
            </div>

            <div className="card-main">
                <div className="card card-styles" >
                    <img
                        src="./Images/product1.jpg" className="card-img-top" alt="product" />
                    <div className="card-body">
                        <a href="#" className="card-text" >
                            <span>CC Circualr Cake</span>
                        </a>
                        <p>
                            $ 55.00
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
                           Mixy Choco
                        </a>

                        <p >
                            $ 12.00
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
                           All Nuts Choco
                        </a>

                        <p>
                            $ 26.00
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
                        <a href="#" className="card-text">
                            Tasty Chocolate
                        </a>

                        <p >
                            $ 23.00
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default IconBlocks;
