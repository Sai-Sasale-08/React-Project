import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <Container>
            <Row>
                <Col>
                    <div style={{marginTop:"40%"}}>
                        <img src="https://www.drybar.com/static/version1719476571/frontend/Hot/default/en_US/images/logo.svg" style={{width:"100%",height:"40px"}} alt="" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h6>HELP</h6>
                        <hr />
                        <p style={{fontSize:"12px"}}>CHECK ORDER STATUS</p>
                        <p style={{fontSize:"12px"}}>RETURNS & EXCHANGES</p>
                        <p style={{fontSize:"12px"}}>SHIPPING & DELIVERY</p>
                        <p style={{fontSize:"12px"}}>SAFETY DATA SWITCH</p>
                        <p style={{fontSize:"12px"}}>PROMOTIONS</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h6>INFORMATION
                        </h6>
                        <hr />
                        <p style={{fontSize:"12px"}}>SPECIAL OFFERS</p>
                        <p style={{fontSize:"12px"}}>WARRANTY</p>
                        <p style={{fontSize:"12px"}}>GLOSSARY</p>
                        <p style={{fontSize:"12px"}}>WHAT'S A BLOWOUT</p>
                        <p></p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h6>ABOUT</h6>
                        <hr />
                        <p style={{fontSize:"12px"}}>CAREERS</p>
                        <p style={{fontSize:"12px"}}>ABOUT US</p>
                        <p style={{fontSize:"12px"}}>WHERE TO BUY</p>
                        <p style={{fontSize:"12px"}}>NEWS & SIGHTINGS</p>
                        <p style={{fontSize:"12px"}}>AMBASSADOR PROGRAM</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h6>LET’S BE FRIENDS</h6>
                        <hr />
                        <div style={{display:"flex",justifyContent:"space-evenly",fontSize:"27px",width:"80%"}}>
                        <FaFacebookF />
                        <FaInstagram />
                        <RiTwitterXLine />
                        <FaYoutube />
                        <FaTiktok />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </div><br /><br />
     <div>
        <Container>
            <hr />
            <div style={{display:"flex",justifyContent:"space-around",fontSize:"12px"}}>
                <div style={{width:"40%"}}>
                    <p>©2024 Drybar Products LLC. All Rights Reserved.   U.S. Headquarters: 1 Helen of Troy Plaza, El Paso, TX 79912.   Use of this site is subject to certain Terms Of Use. For screen reader problems with this website, please call (800) 646-4479</p><br /><br />
                    <p style={{fontSize:"17px",marginBottom:"0px"}}>Privacy Preferences</p>
                </div>
                <div style={{width:"60%",marginLeft:"100px"}}>
                    <Container>
                        <Row>
                            <Col>
                                <p>Privacy & Security</p>
                            </Col>
                            <Col>
                                <p>California Supply Chain Act</p>
                            </Col>
                            <Col>
                                <p>Site Map</p>
                            </Col>
                            <Col>
                                <p>California Supply Chain Act/UK Modern Slavery Act Statement</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Container>
     </div>
    </div>
  )
}

export default Footer
