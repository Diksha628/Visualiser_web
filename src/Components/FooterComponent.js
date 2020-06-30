import React , {Component} from 'react';
import {Card , CardImgOverlay , Nav , Navbar, NavItem, Collapse} from 'reactstrap';
import {Link } from 'react-router-dom';


function Footer(props){
    return (
        <div className="footer" style={{marginBottom:"0px"}}>
            <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>Made with <span className= "fa fa-heart fa-lg"></span></p>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Algo Visualiser</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;