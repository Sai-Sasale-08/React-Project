import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { MdOutlineShoppingBag } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {

    const [data,setdata]=useState([])
    const [showB, setShowB] = useState(true);
    const toggleShowB = () => setShowB(!showB);
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
        
    },[])
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

            {data.map((el)=>(
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <img src={el.images} alt="" style={{height:"70px",width:"100%"}} />
                    </div>
                    <div>
                        <p>{el.title}</p>
                        <p style={{fontWeight:"bold"}}> ${el.price}</p>
                    </div>
                    <div>
                    <button onClick={()=>handledelete(el.id)}>vfbrbf</button>

                    </div>

                </div>
            ))}

                <Link to={'/paymentpage'}><button style={{padding:"10px 50px"}}>PROCEED TO CHECKOUT</button></Link>

          </Toast.Body>
        </Toast>
    </div>
  )
}

export default Cart
