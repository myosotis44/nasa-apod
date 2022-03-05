import react from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    return (

        <div className="navbar">
            <ul>
                <Link className="link" to="/"> Go home ✨</Link>
                <Link className="link" to="/search">Search Images by Date 📅</Link>
                <Link className="link-moon" to="/moon"> <i className="fa-solid fa-moon"></i></Link>
                <Link className="favs" to="/favs"> 💖</Link>

            </ul>
        </div>

    )
}