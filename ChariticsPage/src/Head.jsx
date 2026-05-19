import { Link } from "react-router-dom"


function Header() {
    return (
        <header className="navbar" id="navbar" >

            <div className="logo">
                <img src="/images/logo-white.svg" alt="logo" />

            </div>

            <nav style={{ marginLeft: "142px" }}>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/about">Pages</Link>
                <Link to="/donation">Donation</Link>
                <Link to="/event">Event</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <img  src="/images/search.png" className="search-styles" alt="search" />

            <button className="join-btn">
                <i class="fa-solid fa-angles-right"></i>
                Join With us
            </button>

        </header>
    )
}

export default Header