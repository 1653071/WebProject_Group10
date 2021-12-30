import React from "react";

import { Tabs } from "antd";
import UserView from "./UserView/UserView";
import PageHeader from "../../component/PageHeader/PageHeader";
import AcceptBidder from "./UserView/AcceptBidder"
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
export default function UserTable() {
  
  return (
    <>
      <PageHeader></PageHeader>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Người dùng" key="1">
          <UserView />
        </TabPane>
        <TabPane tab="Xin nâng cấp" key="2">
          <AcceptBidder />
        </TabPane>
        <TabPane tab="Bidder" key="3">
          <UserView />
        </TabPane>
      </Tabs>
    </>
  );
}
