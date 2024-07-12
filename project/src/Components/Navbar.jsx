import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{marginTop:"22px"}}>
      <div style={{textAlign:"center"}} >
      <div style={{marginBottom:"10px"}}>
        <Link to={'/'}><img src="https://www.drybar.com/static/version1719476571/frontend/Hot/default/en_US/images/logo.svg" alt="" /></Link>
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
        <Link to={''} style={{marginRight:"50px",textDecoration:"none",color:"black"}}>Free Shipping on all purchase</Link>
        <Link to={''} style={{marginRight:"50px",textDecoration:"none",color:"black"}}>60 days Return Policy</Link>
        <Link to={''} style={{marginRight:"50px",textDecoration:"none",color:"black"}}>Subscribe For Specials Offer</Link>

      </div>
      </div>
    </div>
  )
}

export default Navbar
