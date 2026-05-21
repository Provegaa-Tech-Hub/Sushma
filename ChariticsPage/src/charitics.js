

import { useEffect } from "react";

function Charitics() {

  useEffect(() => {

    const navbar = document.getElementById("navbar");

    const sticky = navbar.offsetTop;

    function makeNavbarFixed() {

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    }

    window.addEventListener("scroll", makeNavbarFixed);

    return () => {
      window.removeEventListener("scroll", makeNavbarFixed);
    };

  }, []);

  return null;
}

export default Charitics;
