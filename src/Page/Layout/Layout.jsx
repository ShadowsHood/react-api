import { Outlet, Link } from "react-router-dom";

const Layout = ({token, setToken}) => {
    

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {!token ? 
                    <li><Link to="/login">Login</Link></li>
                    :
                    <li><Link onClick={() => setToken(null)} to="/logout">Logout</Link></li>
                    }
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;