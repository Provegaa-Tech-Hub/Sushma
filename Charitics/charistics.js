 let navbar = document.getElementById("navbar");

    // Get navbar position
    let sticky = navbar.offsetTop;

    // Run function when scrolling
    window.onscroll = function () {
      makeNavbarFixed();
    };

    function makeNavbarFixed() {

      // Check scroll position
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    }