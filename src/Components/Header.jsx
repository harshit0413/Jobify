import React, { useContext, useEffect } from 'react';
import './Css/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginContext } from '../App';
import { get_data, remove_data } from '../Utils/services';
import jwt_decode from 'jwt-decode';
import logo from '../assets/log.png';

function Header() {
    const [user, setUser] = useContext(loginContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (get_data()) {
                setUser(jwt_decode(get_data()));
            }
        };

        fetchData(); // Call the fetchData function inside useEffect

        // Include setUser and navigate in the dependency array
    }, [setUser, navigate]); // Add setUser and navigate to the dependency array

    const logoutUser = () => {
        remove_data();
        setUser(null);
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand main-heading" style={{ fontSize: '24px' }}>
                    ROJGAR <img className='vector ml-2' src={logo} alt='Logo' style={{ width: '100px', height: '100px' }} />
                </Link>
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item mr-lg-3">
                        <Link to="/" className="nav-link" style={{ fontSize: '20px' }}>Home</Link>
                    </li>
                    <li className="nav-item mr-lg-3">
                        <Link to="/jobs" className="nav-link" style={{ fontSize: '20px' }}>Jobs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link" style={{ fontSize: '20px' }}>Dashboard</Link>
                    </li>
                </ul>
                {!user ? (
                    <Link to="/login">
                        <button className="btn btnL my-2 my-sm-0" type="submit">Login</button>
                    </Link>
                ) : (
                    <button className="btn btnL my-2 my-sm-0" onClick={logoutUser} type="submit">Logout</button>
                )}
            </div>
        </nav>
    );
}

export default Header;
