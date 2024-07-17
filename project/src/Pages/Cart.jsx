import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { MdOutlineShoppingBag } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {

    const [price,setprice]=useState(0);
    const [data,setdata]=useState([]);
    const [showB, setShowB] = useState(true);
    const toggleShowB = () => setShowB(!showB);

    const handleprice=()=>{
      let ans=0;
      data.map((el)=>(
        ans += el.price
      ));
      setprice(ans);
    }
    
    const navigate=useNavigate()
    // console.log(data)

    const handledelete=(id)=>{
        axios.delete(`http://localhost:8080/cart/${id}`)
        .then((res)=>{console.log(res.data)
        })
        .catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/cart")
        .then((res)=>{setdata(res.data)})
        .catch((err)=>{console.log(err)})

        handleprice()
        
    },[data])
  return (
    <div>
      <Button onClick={toggleShowB} style={{display:"block",backgroundColor:"white",color:"black",border:"none",fontSize:"30px"}} className="mb-2">
      <MdOutlineShoppingBag />
      <sub>{data.length}</sub>

        </Button>
        <Toast onClose={toggleShowB}  show={showB} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
         
          </Toast.Header>
          <Toast.Body >

            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>
                <h6>BAG</h6>
              </div>
              <div>
                <p style={{fontSize:"18px"}}>Bag SubTotal:</p>
                <p style={{fontWeight:"bold",fontSize:"18px"}}>${price}</p>
              </div>
            </div>
            <hr />

            {data.map((el)=>(
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <img src={el.images[0]} alt="" style={{height:"70px",width:"100%"}} />
                    </div>
                    <div>
                        <p>{el.title}</p>
                        <p style={{fontWeight:"bold"}}> ${el.price}</p>
                    </div>
                    <div>
                    <button onClick={()=>handledelete(el.id)} style={{backgroundColor:"red",color:"black"}}>DELETE</button>

                    </div>

                </div>
            ))}
            <hr />
            

                <Link to={'/paymentpage'}><button style={{padding:"10px 50px",backgroundColor:"yellow",color:"black",fontWeight:"bold"}}>PROCEED TO CHECKOUT</button></Link>

          </Toast.Body>
        </Toast>
    </div>
  )
}

export default Cart
