import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useNavigate, useParams } from 'react-router-dom'


const ProductDetails = () => {

    const [productdata,setproductdata]=useState([])
    const {id}=useParams()
    const navigate=useNavigate()

    const handleclick=()=>{
      axios.post("http://localhost:8080/cart",productdata).then((res)=>{
        console.log(res);
        navigate("/products");
        alert("Successfully")
      })
      .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`)
        .then((res)=>{setproductdata(res.data)

        })
        .catch((err)=>{console.log(err)})
    },[])

  return (
    <Container>
    <div style={{display:"flex",width:"100%"}}>
      <div style={{width:"60%"}}>
        {/* <img src={productdata.images[0]} width={"100%"} height={"550px"} alt="" /> */}
      </div>
      <div style={{width:"40%",margin:"30px 30px"}}>
        <p style={{fontSize:"25px"}}>{productdata.title}</p>
        <p>The flexible style finisher on the go!</p>
        <p style={{fontWeight:"bold"}}>${productdata.price}.00</p>
        <hr />
        <p style={{fontWeight:"bold"}}>Select Size</p>
            <div> 

            </div>
        <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"20%"}}>
                <p>quty</p>
            </div>
            <div style={{width:"80%"}}>
                <button onClick={handleclick} style={{padding:"10px 140px",color:"black",backgroundColor:"yellow",fontSize:"14px",fontWeight:"bold"}} className='addtobag'>ADD TO BAG</button>
            </div>

        </div>
      </div>
    </div>
    </Container>
  )
}

export default ProductDetails
