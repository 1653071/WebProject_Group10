import React from "react";
import { useReducer, useEffect } from "react";
import { Tabs } from "antd";
import UserView from "./UserView/UserView";
import PageHeader from "../../component/PageHeader/PageHeader";
import AcceptBidder from "./UserView/Bidder"
import AcceptSeller from "./UserView/AcceptSeller"
import  reducer, {userState} from '../../reducer/UserReducer'
import UserContext from "../../context/UserContext"
import { instance } from "../../ultils/ultils";
const { TabPane } = Tabs;
const tableinfos = [
  {
    title: "Tất cả người dùng",
    value: "all",
  },
  {
    title: "Seller",
    value: "seller",
  },
];
export default function UserTable() {
  const [store, dispatch] = useReducer(reducer, userState);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const product_res = await instance.get("/users");
     
      const productsRes = product_res.data;
   
      
      dispatch({
        type: "init",
        payload: {
          items: productsRes,
          query: "",
        },
      });
    }
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={{store,dispatch}}>
      <PageHeader></PageHeader>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Người dùng" key="1">
          <UserView />
        </TabPane>
        <TabPane tab="Người mua" key="2">
          <AcceptBidder />
        </TabPane>
        <TabPane tab="Người bán" key="3">
          <UserView />
        </TabPane>
        <TabPane tab="Duyệt người bán " key="4">
          <AcceptSeller></AcceptSeller>
        </TabPane>
      </Tabs>
    </UserContext.Provider>
  );
}
