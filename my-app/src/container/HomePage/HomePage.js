import React, {useEffect, useReducer} from "react";

import { PageHeader } from "antd";
import GridProduct from "./Grid/GridProduct";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchbarWrapper ,ProductArea} from "./HomePage.style";
import { instance } from "../../ultils/ultils";
import Banner from "./Banner/Banner";
export default function HomePage() {
  
useEffect(() => {
  async function fetchData() {
    // You can await here
    const res = await instance.get("/products");
    console.log(res);
  }
  fetchData();
}, []);
  
  return (
    <>
      <Banner>
    
      </Banner>
      
      <ProductArea>
      <GridProduct title = "Sản phẩm sắp hết phiên"/>
      <GridProduct title = "Sản phẩm được ra giá nhiều nhất"/>
      <GridProduct title = "Sản phẩm có giá cao nhất"/>
      </ProductArea>
    </>
  );
}
