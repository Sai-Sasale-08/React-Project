import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocalShipping } from "react-icons/md";
import { MdOutlineMoreTime } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

import Cart from '../Pages/Cart';


const Navbar = () => {

 

  return (
    <div>
      <div style={{fontSize:'20px'}}>
        <Container fluid style={{backgroundColor:"#f9f9f9"}}>
        <Container style={{display:"flex",justifyContent:"space-between"}}>
            <div>
            <p>PRODUCTS</p>
            </div>
            <div style={{display:"flex",fontSize:'23px',margin:"5px 0px"}}>
                <CiSearch style={{marginRight:"18px",marginTop:"10px"}}/>
                <Link to={'/login'} style={{marginRight:"18px",color:"black"}}>  <CiUser /></Link>
                <Link to={'/map'} style={{color:"black"}}>  <LuMapPin /></Link>
            </div>
        </Container>
        </Container>
      </div>



      <div style={{marginTop:"22px"}}>
      <div style={{textAlign:"center"}} >
      <div style={{marginBottom:"10px",position:"relative"}}>
        <Link to={'/'}><img src="https://www.drybar.com/static/version1719476571/frontend/Hot/default/en_US/images/logo.svg" alt="" /></Link>
        {/* <img src="https://www.drybar.com/static/version1719476571/frontend/Hot/default/en_US/images/logo-animation.svg" alt="" /> */}
        <div style={{position:"absolute",left:"80%",top:"10px"}}>
        
        <Cart />
      </div>
      </div>
      
      <div >
        <Link to={'/products'} style={{marginRight:"80px",textDecoration:"none",color:"black"}}>Hair Product</Link>
        <Link to={'/hairtools'} style={{marginRight:"80px",textDecoration:"none",color:"black"}}>Hair Tools</Link>
        <Link to={'/benefits'} style={{marginRight:"80px",textDecoration:"none",color:"black"}}>Benefits</Link>
        <Link to={'/giftsNSets'} style={{marginRight:"80px",textDecoration:"none",color:"black"}}>Gifts & Sets</Link>
        <Link to={'/new'} style={{marginRight:"80px",textDecoration:"none",color:"black"}}>New</Link>
        <Link to={'/howtoandsets'} style={{textDecoration:"none",color:"black"}}>How To & Inspo</Link>
        
        
      
      </div>
      <div style={{backgroundColor:"gray",marginBottom:"10px",marginTop:"20px",padding:"20px"}}>
        <Link to={''} style={{marginRight:"50px",textDecoration:"none",color:"black"}}><MdLocalShipping/> Free Shipping on all purchase</Link>
        <Link to={''} style={{marginRight:"50px",textDecoration:"none",color:"black"}}><MdOutlineMoreTime />  60 days Return Policy</Link>
        <Link to={''} style={{marginRight:"50px",textDecoration:"none",color:"black"}}><MdOutlinePhoneIphone /> Subscribe For Specials Offer</Link>

      </div>
      </div>
      
    </div>
    
    </div>
  )
}

export default Navbar
