import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand m-2">My Messages</Link>
                <input class="form-control mr-sm-2 w-50" type="search" placeholder="Search..." aria-label="Search" />
                
            </nav>
        )
    }
}
export default Navbar;