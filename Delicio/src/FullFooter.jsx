import { useState } from "react";
function FullFooter() {
    return (
        <div className="full-footer">
            <div className="container-full">
                <div className="choco-container full">
                    <div className="row">
                        <div className="col-1 addres">
                            <img src="./Images/footer-logo.png" />
                            <h6>
                                Delicio Webshop,LLC
                            </h6>
                            <p>
                                South Washington Street 828,Washington,USA
                            </p>
                            <p>
                                Phone 0123 456 789/0123 456 788
                            </p>
                        </div>

                        <div className="col-2 account">
                            <h4>
                                my Account
                            </h4>
                            <ul>
                                <li>
                                    <a href="#">Cart</a>
                                </li>
                                <li>
                                    <a href="#">Checkout</a>
                                </li>
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                            </ul>

                        </div>

                        <div className="col-2 assistance">
                            <h4 style={{ marginBottom: "-13px" }}>
                                Informations
                            </h4>
                            <ul>
                                <li>
                                    <a href="#">costumer assistance</a>
                                </li>
                                <li>
                                    <a href="#">delivery informations</a>
                                </li>
                                <li>
                                    <a href="#">international shipping</a>
                                </li>
                            </ul>

                        </div>

                        <div className="col-1 about">
                            <h4 style={{ marginBottom: "20px" }}>
                                about us
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet,consectetur adipiscing elit. in non vestibulum massa,sit amet bibendum eros. in accumsan dignissin.lorem ipsum dolor sit amet vestibulum massa,sit amet bibendum eros. in accumsan dignissin.lorem ipsum dolor sit amet
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default FullFooter;