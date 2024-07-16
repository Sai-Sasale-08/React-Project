import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import Footer from "../Components/Footer";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import FilterSidebar from "./FilterSidebar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getdatafromserver } from "../Redux/Product/action";
import { Link, useSearchParams } from "react-router-dom";


// LOGIC PART ARE FOLLOWING 

const Products = () => {
  const { isError, data, isLoading } = useSelector(
    (store) => store.productReducer
  );
  const dispatch = useDispatch();
  const [sort, setsort] = useState(null);
  const [page,setpage]=useState(1)
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    let paramobj= {
      params: {
        _sort: "price",
        _order: sort,
        _limit:20,
        _page:page,
        category:searchParams.getAll("category")
      },
    }
    dispatch(getdatafromserver(paramobj))
  }, [sort,page,searchParams]);


// WRITE PART ARE FOLLOWING

  return isLoading ? (
    <h1>LOADING.......</h1>
  ) : isError ? (
    <h1>Something Went Wrong</h1>
  ) : (
    <div>
      <Container className="d-flex">
        <div style={{ width: "20%" }}>
          <h1>filter</h1>
          <FilterSidebar />
        </div>

        {/* Data Get From Server And Map Locig Are following */}

        <div style={{ width: "80%" }}>
          <div>
            <h3 style={{ margin: "50px 0px 17px", textAlign: "center" }}>
              ALL HAIR CARE PRODUCTS
            </h3>
            <img
              src="https://www.drybar.com/media/wysiwyg/header_banner/LGCream_2024_SlimHeaderBanner1_D1300x200.jpg"
              style={{ width: "100%", marginBottom: "70px" }}
              alt=""
            />
          </div>

          {/* Sorting Price Low to High And High To Low are following */}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>hellloooo</p>
            </div>
            <div>
              <DropdownButton id="dropdown-basic-button" title="Price Sorting">
                <Dropdown.Item href="#/action-2" onClick={() => setsort("asc")}>
                  Price: Low To High
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  onClick={() => setsort("desc")}
                >
                  Price: High To Low
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            {data.map((el) => (
             <Link to={`/productdetails/${el.id}`} style={{color:"black",textDecoration:"none"}}> <div key={el.id}>
                <img
                  src={el.images[0]}
                  alt=""
                  height={"250px"}
                  width={"280px"}
                  style={{ marginBottom: "15px" }}
                />
                <p>{el.title}</p>
                <p>PRICE:- {el.price}</p>
              </div></Link>
            ))}
          </div>
          <br />
          <br />

          {/* PAGINATION  */}

          <div style={{ textAlign: "center", fontSize: "38px",width:"100%",display:"flex",justifyContent:"center" }}>
            <FaChevronLeft  onClick={()=>setpage(page-1)}/>
            <p style={{fontSize:"30px"}}>{page}</p>
            <FaChevronRight onClick={()=>setpage(page+1)}/>
          </div>
        </div>
      </Container>
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Products;
