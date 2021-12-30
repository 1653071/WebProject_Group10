import React from "react";

import { PageHeader } from "antd";
import GridProduct from "./Grid/GridProduct";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchbarWrapper ,ProductArea} from "./HomePage.style";

import Banner from "./Banner/Banner";
export default function HomePage() {
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
