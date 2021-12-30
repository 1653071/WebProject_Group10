import React from "react";

import { Tabs } from "antd";
import ProductView from "./TableView/ProductView";
import PageHeader from "../../component/PageHeader/PageHeader";
const { TabPane } = Tabs;
const tableinfos = [
  {
    title: "Sản phẩm",
    value: "product",
  },
  {
    title: "Các loại dịch vụ",
    value: "category",
  },
];
export default function ProductTable() {
  
  return (
    <>
      <PageHeader></PageHeader>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Sản Phẩm" key="1">
          <ProductView>

          </ProductView>
        </TabPane>
        <TabPane tab="Loại" key="2">
          Content of Tab Pane 2
        </TabPane>
       
      </Tabs>
    </>
  );
}
