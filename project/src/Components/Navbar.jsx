import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to={'/'}><img src="https://www.drybar.com/static/version1719476571/frontend/Hot/default/en_US/images/logo.svg" alt="" /></Link>
      </div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <Link to={'/products'} style={{marginRight:"80px"}}>Hair Product</Link>
        <Link to={'/hairtools'} style={{marginRight:"80px"}}>Hair Tools</Link>
        <Link to={'/benefits'} style={{marginRight:"80px"}}>Benefits</Link>
        <Link to={'/giftsNSets'} style={{marginRight:"80px"}}>Gifts & Sets</Link>
        <Link to={'/new'} style={{marginRight:"80px"}}>New</Link>
        <Link to={'/howtoandsets'}>How To & Inspo</Link>
      </div>
      <div>
        <Link to={''} style={{marginRight:"50px"}}>Free Shipping on all purchase</Link>
        <Link to={''} style={{marginRight:"50px"}}>60 days Return Policy</Link>
        <Link to={''} style={{marginRight:"50px"}}>Subscribe For Specials Offer</Link>

      </div>
    </div>
  )
}

export default Navbar
