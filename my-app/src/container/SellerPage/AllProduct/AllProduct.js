import React from "react";
import { Tabs , Pagination} from 'antd';
import ProductCard from "../../../components/ProductCard/ProductCard";
import ListingGrid from "../../../components/ListingGrid/ListingGrid";
import ListingProduct from "./ListingProduct/ListingProduct";

const { TabPane } = Tabs;
export default function PostedProduct() {
  return (
    <>
      <Tabs defaultActiveKey="1" style={{paddingLeft:"10px"}}>
        <TabPane tab="Tất cả sản phẩm" key="1" style={{paddingLeft:"10px"}}>
          <ListingProduct />
          

      
        </TabPane>
        <TabPane tab="Chờ duyệt" key="2">
          <ListingProduct />
        </TabPane>
        <TabPane tab="Đã hoàn thành đấu giá " key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Đang đấu giá " key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <Pagination defaultCurrent={1} total={50} style={{marginTop:"20px",float:"left",paddingLeft:"20px"}} />
    </>
  );
}
