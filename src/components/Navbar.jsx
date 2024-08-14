import { NavLink } from "react-router-dom";

const pages = [
    {
        title:  'Home',
        path:   '/'
    },{
        title:  'Dashboard',
        path:   '/dashboard'
    },{
        title:  'analytics',
        path:   '/analytics'
    }
];

export function Navbar() {
    return (
        <nav className="bar theme-color-01">
            <NavLink to='/' className='bar-item button wide'>
                <b>{document.title}</b>
            </NavLink>
            {pages.map( (page, index) => (
                <NavLink key={index} to={page.path} className="bar-item button">{page.title}</NavLink>
            ))}
            <NavLink to='/login' className='button right'>Login</NavLink>
        </nav>
    )
};