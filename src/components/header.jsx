import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="#3949ab light-green-accent-3">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" class="brand-logo">
                        SPA  React Project
                        </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    );

}
export { Header };
