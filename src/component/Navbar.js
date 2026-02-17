import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUser, FaUserPlus } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const cartCount = useSelector((state) => state.Slice.cart.length);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                   UltraShop
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">🏠 Home</Link>
                        </li>
                        <li className="nav-item position-relative">
                            <Link className="nav-link d-flex align-items-center" to="/cart">
                                <FaShoppingCart size={20} />
                                {cartCount > 0 && <span className="badge bg-danger ms-2">{cartCount}</span>}
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <Link to="/login" className="btn btn-outline-secondary d-flex align-items-center">
                            <FaUser className="me-2" /> Login
                        </Link>
                        <Link to="/register" className="btn btn-outline-secondary d-flex align-items-center">
                            <FaUserPlus className="me-2" /> Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
