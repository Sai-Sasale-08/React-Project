import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

const SigninLogin = () => {
  return (
    <div style={{backgroundColor:"#f9f9f9",width:"100%"}}>
      <Container>
        <div style={{margin:"50px 0px"}}>
            <img src="https://www.drybar.com/media/wysiwyg/misc_banners/BonusPerk_ChooseSample_Desktop_Banner_Slim.jpg" alt="" />
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{height:"680px"}}>
                <p>CUSTOMER LOGIN</p>
                <p>Registered Customers</p>
                <p>If you have an account, sign in with your email address.</p><br />

                <input type="text" placeholder='EMAIL' /><br /><br />
                <input type="text" placeholder='PASSWORD'/><br /><br /><br />
                <button>Sign In</button><br /><br />
                <p>New Customers</p>
                <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>

                <button>Create A Account</button><br /><br />

                <p>Drybar Franchise Shop Customers</p>
                <p>For appointments and Barfly memberships, visit  drybarshops.com and login to your account.</p>

            </div>
        </div>
      </Container>
    </div>
  )
}

export default SigninLogin
