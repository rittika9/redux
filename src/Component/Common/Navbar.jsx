import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="index.html"><img src="images/logo.png" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/coffees">Coffees</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <div className="login_bt">
                                    <ul>
                                        <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true" /></span>Login</a></li>
                                        <li><a href="#"><i className="fa fa-search" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>



        </>
    )
}

export default Navbar