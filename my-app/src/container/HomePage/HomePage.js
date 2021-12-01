import React from "react";

import { PageHeader } from "antd";
import GridProduct from "./Grid/GridProduct";
export default function HomePage() {
  return (
    <>
       
      <GridProduct title = "Sản phẩm sắp hết phiên"/>
      <GridProduct title = "Sản phẩm được ra giá nhiều nhất"/>
      <GridProduct title = "Sản phẩm có giá cao nhất"/>
    </>
  );
}
