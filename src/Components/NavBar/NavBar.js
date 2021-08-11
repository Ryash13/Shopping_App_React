import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Navbar__container">
                <div className="Navbar__nav">
                    <img src="https://i.pinimg.com/originals/10/12/11/1012119ac4411355eafdade0ff95ee56.jpg" alt="webapp__logo" />
                    <div className="Navbar__list">
                        <h4>HOME</h4>
                        <h4>PRODUCTS</h4>
                        <h4>ABOUT US</h4>
                        <span />
                        <h4><FontAwesomeIcon icon={faShoppingCart} />&nbsp;&nbsp;CART</h4>
                        <h4><FontAwesomeIcon icon={faSignInAlt} />&nbsp;&nbsp;SIGN IN</h4>
                        <h4><FontAwesomeIcon icon={faUserPlus} />&nbsp;&nbsp;SIGN UP</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;