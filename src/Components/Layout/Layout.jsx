import { Outlet, Link } from "react-router-dom";
import './Layout.css';

export default function Layout() {
    return (
        <>
            <nav>
                <h1><Link to="/">Recipe App</Link></h1>
                <ul>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};