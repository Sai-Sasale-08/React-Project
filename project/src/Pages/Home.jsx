import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  
  return (
    <div >
      <div style={{marginBottom:"30px",marginTop:"40px"}}>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Row>
          <Col><img
          className="d-block w-100"
          src="https://www.drybar.com/media/wysiwyg/definition_widget/LGCollection_2024_DefinitionWidget_D900x540.jpg"
          alt="First slide"
          height={"500px"}
        /></Col>
          <Col style={{backgroundColor:"lightskyblue"}}>
            <div style={{textAlign:"center",marginTop:"170px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button>Shop Now</button>
            </div>
          </Col>
        </Row><br /><br /><br /><br />
        
      </Carousel.Item>
      <Carousel.Item>
        <Row>
            <Col><img
            className="d-block w-100"
            src="https://www.drybar.com/media/wysiwyg/definition_widget/DefWidget_ShotCollection_D900x540.jpg"
            alt="First slide"
            height={"500px"}
          /></Col>
            <Col style={{backgroundColor:"lightyellow"}}>
            <div style={{textAlign:"center",marginTop:"170px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button>Shop Now</button>
            </div>
          </Col>
          </Row><br /><br /><br /><br />
      </Carousel.Item>
      <Carousel.Item>
          <Row>
              <Col><img
              className="d-block w-100"
              src="https://www.drybar.com/media/wysiwyg/definition_widget/BackToSchool_DefinitionWidget2_764x789.jpg"
              alt="First slide"
              height={"500px"}
            /></Col>
              <Col style={{backgroundColor:"lightskyblue"}}>
            <div style={{textAlign:"center",marginTop:"170px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button>Shop Now</button>
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
          <img src="https://www.drybar.com/media/wysiwyg/hero_banner_D1365x439/MadeWithout_2023_SlimBanner_D1465x300_002_.jpg" alt="" style={{width:"100%"}}/>
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
       
            <Row >
            <Col style={{backgroundColor:"lightgray",display:"flex",justifyContent:"space-between"}}>
            <div style={{textAlign:"center",marginTop:"170px",marginLeft:"180px"}}>
                <h1>STOP FRIZE BEFORE IT STARTS</h1>
                <h6>Shop Our Tried And True Fizz Product </h6><br /><br />
                <button>Shop Now</button>
            </div>
          <img
          className="d-block w-50"
          src="https://www.drybar.com/media//wysiwyg/definition_widget/ReserveCollection_DefinitionWidget_D900x540.jpg"
          alt="First slide"
          height={"500px"}
        /></Col>
            </Row> 
        </div>


        <div style={{width:"100%",paddingBottom:"10px"}}>
       
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
                              <button>Shop Now</button>
                          </div>
                        </Col>
            </Row> 
        </div>
    
    </div>
  )
}


