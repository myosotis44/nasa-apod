import { Link } from "react-router-dom";

export default function NavBar() {

    return (

        <div className="navbar">
            <ul>
                <Link className="link" to="/"> Go home ✨</Link>
                <Link className="link" to="/search">Search Images by Date 📅</Link>
                <Link className="link link-moon" to="/moon"> <i className="fa-solid fa-moon"></i>The moon</Link>
                <Link className="link favs" to="/favs"> Favorites</Link>

            </ul>
        </div>

    )
}