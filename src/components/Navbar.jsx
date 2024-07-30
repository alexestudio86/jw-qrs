import { NavLink } from "react-router-dom";

const pages = [
    {
        title:  'Home',
        path:   '/'
    },{
        title:  'Dashboard',
        path:   'dashboard'
    },{
        title:  'login',
        path:   'login'
    },{
        title:  'analytics',
        path:   'analytics'
    }
];

export function Navbar() {
    return (
        <nav className="bar black">
            {pages.map( (page, index) => (
                <NavLink key={index} to={page.path} className="bar-item button">{page.title}</NavLink>
            ))}
        </nav>
    )
};