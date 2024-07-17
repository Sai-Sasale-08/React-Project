import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const SigninLogin = () => {
  return (
    <>
    <div style={{width:"100%"}}>
      <Container fluid >
      <Container>
        <div style={{margin:"50px 0px"}}>
            <img src="https://www.drybar.com/media/wysiwyg/misc_banners/BonusPerk_ChooseSample_Desktop_Banner_Slim.jpg" alt="" />
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{width:"35%",backgroundColor:"#f9f9f9",marginBottom:"60px"}}>
               <div style={{margin:"55px 70px 10px"}}>
                <p style={{fontSize:"24px",textAlign:"center",marginBottom:"30px"}}>CUSTOMER LOGIN</p>
                <p style={{fontSize:"20px"}}>Registered Customers</p>
                <p>If you have an account, sign in with your email address.</p>

                <input type="text" style={{width:"100%",padding:"3px 2px"}} placeholder='Email *' /><br /><br />
                <input type="text" style={{width:"100%",padding:"3px 2px"}} placeholder='Password *'/><br /><br /><br />


                <div style={{display:"flex",justifyContent:"center"}}>
                  
                      <button style={{textAlign:"center",display:"block",padding:"3px 75px",fontSize:"14px"}}>Sign In</button>
                      
                  
                </div>
                
                <div style={{display:"flex",justifyContent:"center"}}>
                  
                      
                     <Link style={{textDecoration:"none",color:"black"}}> <p style={{fontSize:"15px"}}>Forgot Your Password?</p></Link>
                  
                </div><br />
                


                <p style={{fontSize:"20px"}}>New Customers</p>
                <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>

                <div style={{display:"flex",justifyContent:"center"}}>
                  <Link to={'/signup'}>
                      <button style={{textAlign:"center",padding:"3px 40px",fontSize:"14px"}}>Create A Account</button>
                  </Link>
                </div><br /><br />

                <p>Drybar Franchise Shop Customers</p>
                <p>For appointments and Barfly memberships, visit  drybarshops.com and login to your account.</p>
              </div>
               
            </div>
        </div>
      </Container>
      </Container>
      
    </div>
    <div>


<div style={{marginTop:"50px"}}>
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
    </>
  )
}

export default SigninLogin
