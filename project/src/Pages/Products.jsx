import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from '../Redux/actionType'
import Container from 'react-bootstrap/esm/Container'
// import { getdatafromserver } from '../Redux/Product/action'

const Products = () => {

  const {isError,data,isLoading}=useSelector((store)=>store.productReducer)
  
  const dispatch=useDispatch()

  const getdatafromserver=()=>{

    dispatch({type:GET_DATA_REQUEST,payload:true})
    axios.get("http://localhost:8080/products")
    .then((res)=>{
      console.log(res)
      dispatch({type:GET_DATA_REQUEST,payload:false})
      dispatch({type:GET_DATA_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
      console.log(err)
      dispatch({type:GET_DATA_REQUEST,payload:false})
      dispatch({type:GET_DATA_FAILURE,payload:true})
    })
  }

  useEffect(()=>{

    getdatafromserver()
  },[])

  return isLoading ? <h1>LOADING.......</h1>: isError ? <h1>Something Went Wrong</h1> : (
    <div>
      <Container className='d-flex'>
        <div style={{width:"20%"}}>
          <h1>filter

          </h1>
        </div>
      <div style={{width:"80%"}}>
        <div>
          <h3 style={{margin:"50px 0px 17px",textAlign:"center"}}>ALL HAIR CARE PRODUCTS</h3>
          <img src="https://www.drybar.com/media/wysiwyg/header_banner/LGCream_2024_SlimHeaderBanner1_D1300x200.jpg" style={{width:"100%",marginBottom:"70px"}} alt="" />
        </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {data.map((el)=>(
          <div key={el.id}>
            <img src={el.image} alt="" height={"250px"} width={"280px"} style={{marginBottom:"15px"}}/>
            <p>{el.title}</p>
            <p>PRICE:- {el.price}</p>
            
          </div>
        ))}
      </div>
      </div>
      </Container>
    </div>
  )
}

export default Products
