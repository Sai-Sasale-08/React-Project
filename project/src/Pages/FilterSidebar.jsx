import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setcategory] = useState(
    searchParams.getAll("category") || []
  );

  useEffect(() => {
    setSearchParams({ category: category });
  }, [category]);

  const handlechange = (e) => {
    let { value } = e.target;
    let newcategory = [...category];

    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }

    // if(newcategory.includes(value)){
    //     newcategory = newcategory.filter((el)=>el !== value);
    // }
    // else
    // {
    //     newcategory.push(value);
    // }
    setcategory(newcategory);
  };
  console.log(category);

  return (
    <div>
      <div>
        <input
          type="checkbox"
          value={"Best Seller"}
          checked={category.includes("Best Seller")}
          onChange={(e) => handlechange(e)}
        />{" "}
        Coconut Colada
        <br />
        <input
          type="checkbox"
          value={"Special Offer"}
          checked={category.includes("Special Offer")}
          onChange={(e) => handlechange(e)}
        />{" "}
       Lush <br />
        <input
          type="checkbox"
          value={"Regular price range"}
          checked={category.includes("Regular price range")}
          onChange={(e) => handlechange(e)}
        />{" "}
        Noir <br />
        <input
          type="checkbox"
          value={"regular price"}
          checked={category.includes("regular price")}
          onChange={(e) => handlechange(e)}
        />{" "}
       Sangria Spritze <br />
        <input
          type="checkbox"
          value={"hair care"}
          checked={category.includes("hair care")}
          onChange={(e) => handlechange(e)}
        />{" "}
        Grapefruit Mimosa
        <br />
      </div>
    </div>
  );
};

export default FilterSidebar;

{
  /* <input type="checkbox" value={'Best Seller'} onChange={(e)=>handlechange(e)}/>Best seller
<input type="checkbox" value={'Special Offer'} onChange={(e)=>handlechange(e)}/>special
<input type="checkbox" value={'Regular price range'} onChange={(e)=>handlechange(e)}/>regular p range
<input type="checkbox" value={'regular price'} onChange={(e)=>handlechange(e)}/>regular price
<input type="checkbox" value={'hair care'} onChange={(e)=>handlechange(e)}/>hair cair */
}
