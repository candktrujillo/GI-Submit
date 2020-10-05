import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component { 
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <img src="/assets/images/GI_Submit.png" />
                            </div>
                            <div className="col">
                                
                                <h1>GI SUBMIT</h1>
                                <h2>LEED Verification Made Easy</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand> 
                            <img className="logo" src="/assets/images/GI_Submit.png" width="30"/>
                        </NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;