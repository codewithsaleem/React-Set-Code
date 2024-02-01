import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-light">
                <Link to="/" className="navbar-brand m-2">
                    <img class="navbar-brand" src="https://i.imgur.com/gbkV3GX.png" alt="" style={{ maxHeight: '60px', maxWidth: '80px' }} />
                </Link>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/buyers" className="nav-link text-dark fs-5">BUYERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sellers" className="nav-link text-dark fs-5">SELLERS</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/buyers" className="nav-link text-dark">
                            <form class="form-inline">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon1" />
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                                    </div>
                                </div>
                            </form>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/login" className="nav-link text-dark fs-5 mr-3">LOGIN</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;