import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Home} from '../Pages/Home'
import Benefits from '../Pages/Benefits'
import GiftsNSets from '../Pages/GiftsNSets'
import HairTools from '../Pages/HairTools'
import HowTo from '../Pages/HowTo'
import Products from '../Pages/Products'
import New from '../Pages/New'
import SigninLogin from '../LoginFirebase/SigninLogin'
import SignUp from '../LoginFirebase/SignUp'
import ProductDetails from '../Pages/ProductDetails'
import PaymentPage from '../Pages/PaymentPage'
import {PrivetRoute} from './PrivetRoute'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/benefits' element={<Benefits/>}></Route>
        <Route path='/giftsNSets' element={<GiftsNSets/>}></Route>
        <Route path='/hairtools' element={<HairTools/>}></Route>
        <Route path='/howtoandsets' element={<HowTo/>}></Route>
        <Route path='/paymentpage' element={
          <PrivetRoute>
          <PaymentPage/>
           </PrivetRoute>
          }></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/login' element={<SigninLogin/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<h1> 404 Not Found Page </h1>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
