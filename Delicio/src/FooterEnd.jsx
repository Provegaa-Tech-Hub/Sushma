import { useState } from "react";

function FooterEnd(){
    return(
        <div className="Choco-container" style={{background:"#2d2220" , display:"flex"}}>
            <div className="row bottom-strip">
                <div className="col-3 rights">
                    <p>
                        Delicio Webshop-Responsive themeforest theme 2014
                    </p>

                </div>

            </div>

            <div className="col-4 social">
                <ul>
                    <li>
                        <a href="#"><i class="fa-brands fa-dribbble"></i></a>
                    </li>
                </ul>
                 <ul>
                    <li>
                        <a href="#"><i class="fa-brands fa-instagram insta-icon"></i></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><i class="fa-solid fa-asterisk star-icon"></i></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default FooterEnd;