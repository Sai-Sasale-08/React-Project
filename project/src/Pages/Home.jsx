import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer';


export const Home = () => {
  
  return (
    <div >
      <div style={{marginBottom:"30px",marginTop:"40px"}}>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Row>
          <Col><Link><img
          className="d-block w-100"
          src="https://www.drybar.com/media/wysiwyg/definition_widget/ReserveBlowDryer_BeforeAfter_DefWidget_900x540.jpg"
          alt="First slide"
          height={"570px"}
        /></Link></Col>
          <Col style={{backgroundColor:"lightskyblue"}}>
            <div style={{textAlign:"center",marginTop:"170px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button style={{padding:"5px 70px"}}>Shop Now</button>
            </div>
          </Col>
        </Row><br /><br /><br /><br />
        
      </Carousel.Item>
      <Carousel.Item>
        <Row>
            <Col><Link><img
            className="d-block w-100"
            src="https://www.drybar.com/media/wysiwyg/definition_widget/DefWidget_ShotCollection_D900x540.jpg"
            alt="First slide"
            height={"570px"}
          /></Link></Col>
            <Col style={{backgroundColor:"lightyellow"}}>
            <div style={{textAlign:"center",marginTop:"170px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button style={{padding:"5px 70px"}}>Shop Now</button>
            </div>
          </Col>
          </Row><br /><br /><br /><br />
      </Carousel.Item>
      <Carousel.Item>
          <Row>
              <Col><Link><img
              className="d-block w-100"
              src="https://www.drybar.com/media/wysiwyg/definition_widget/BackToSchool_DefinitionWidget2_764x789.jpg"
              alt="First slide"
              height={"570px"}
            /></Link></Col>
              <Col style={{backgroundColor:"lightskyblue"}}>
            <div style={{textAlign:"center",marginTop:"170px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button style={{padding:"5px 70px"}}>Shop Now</button>
            </div>
          </Col>
          </Row><br /><br /><br /><br />
      </Carousel.Item>
    </Carousel>
      </div>
      
        <div style={{display:"flex",justifyContent:"center",width:"50%"}}>
          <h4>SHOP OUR BEST SELLERS</h4>
        </div>

        <div>
          <Link to={''}>
          <img src="https://www.drybar.com/media/wysiwyg/hero_banner_D1365x439/MadeWithout_2023_SlimBanner_D1465x300_002_.jpg" alt="" style={{width:"100%"}}/>
          </Link>
        </div>



        <div style={{display:"flex",justifyContent:"center",margin:"auto",width:"100%"}}>
          <div style={{textAlign:"center"}}>
            <div>
            <h1>Bestseller Spotlight: Detox Takeover</h1>
            <h3>Share your photos with us! @thedrybar</h3>
            </div>
            <div>
              <h1>careosel</h1>
            </div>
          </div>
        </div>


        <div style={{width:"100%",paddingBottom:"5px"}}>
       
           <Container fluid>
           <Row >
            <Col style={{backgroundColor:"lightgray",display:"flex",justifyContent:"space-between"}}>
            <div style={{textAlign:"center",marginTop:"170px",marginLeft:"180px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button style={{padding:"5px 70px"}}>Shop Now</button>
            </div>
          <img
          className="d-block w-50"
          src="https://www.drybar.com/media//wysiwyg/definition_widget/ReserveCollection_DefinitionWidget_D900x540.jpg"
          alt="First slide"
          height={"500px"}
        /></Col>
            </Row> 
           </Container>
        </div>


        <div style={{width:"100%",paddingBottom:"10px"}}>
        <Container fluid>
            <Row >
              <Col style={{backgroundColor:"#fa8072",display:"flex"}}><img
                        className="d-block w-50"
                        src="https://www.drybar.com/media//wysiwyg/definition_widget/SeltzerSpritzRumPunch_2024_DefinitionWidget1_D900x540.jpg"
                        alt="First slide"
                        height={"500px"}
                      />
                          <div style={{textAlign:"center",marginTop:"170px",marginLeft:"180px"}}>
                              <h1>STOP FRIZE BEFORE IT STARTS</h1>
                              <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                              <button style={{padding:"5px 70px"}}>Shop Now</button>
                          </div>
                        </Col>
            </Row> 
            </Container>
        </div>

        <div style={{width:"100%"}}>
          <div>
            <h2>DISCOVER DRYBAR</h2>
          </div>
          <div style={{marginTop:"25px",marginBottom:"25px"}}>
            <Container fluid>
              <Row>
                <Col>
                  <Link style={{textDecoration:"none"}}>
                    <img src="https://www.drybar.com/media//wysiwyg/promo_grid/AllProducts_430x430.jpg" className="d-block w-100" alt="" />
                    <h5 style={{color:"black",marginTop:"15px"}}>Hair Products</h5>
                  </Link>
                </Col>
                <Col>
                  <Link style={{textDecoration:"none"}}>
                    <img src="https://www.drybar.com/media//wysiwyg/promo_grid/BlowDryers_430x430.jpg" className="d-block w-100" alt="" />
                    <h5 style={{color:"black",marginTop:"15px"}}>Hair Tools & Accessories</h5>
                  </Link>
                </Col>
                <Col>
                  <Link style={{textDecoration:"none"}}>
                    <img src="https://www.drybar.com/media//wysiwyg/promo_grid/PromoGrid_LiquidGlass_Desktop.jpg" className="d-block w-100" alt="" />
                    <h5 style={{color:"black",marginTop:"15px"}}>Benefits</h5>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>

          <div style={{marginTop:"25px",marginBottom:"25px"}}>
            <Container fluid>
              <Row>
                <Col>
                  <Link style={{textDecoration:"none"}}>
                    <img src="https://www.drybar.com/media//wysiwyg/promo_grid/Volume_430x430.jpg" className="d-block w-100" alt="" />
                    <h5 style={{color:"black",marginTop:"15px"}}>Gifts & Kits</h5>
                  </Link>
                </Col>
                <Col>
                  <Link style={{textDecoration:"none"}}>
                    <img src="https://www.drybar.com/media//wysiwyg/promo_grid/SmoothShot_2023_PromoGrid6_D430x430.jpg" className="d-block w-100" alt="" />
                    <h5 style={{color:"black",marginTop:"15px"}}>New</h5>
                  </Link>
                </Col>
                <Col>
                  <Link style={{textDecoration:"none"}}>
                    <img src="https://www.drybar.com/media//wysiwyg/promo_grid/Texture_430x430.jpg" className="d-block w-100" alt="" />
                    <h5 style={{color:"black",marginTop:"15px"}}>How To</h5>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>

        </div><br />

        <div style={{background:"#f9f9f9",display:"flex",justifyContent:"center",alignItems:"center",padding:"60px 0px 60px"}}>
          <div style={{textAlign:"center"}}>
          <h1>GET OUR UPDATES</h1>
          <p>Sign up and stay in the know!</p>
          <p>Subscribe to get the latest Drybar news and exclusive</p>
          <p>offers.</p>
          <p>By signing up, you agree to our Privacy Policy and Terms of Use.</p>
          <input type="text" placeholder='Enter Your Email Address' style={{padding:"0px 25px"}}/><button style={{color:"white",backgroundColor:"black",padding:"0px 25px "}}>Join</button>
          </div>
        </div><br /><br />
    
        <Footer/>
    </div>
    
  )
}


