import React from "react";
import { useReducer, useEffect } from "react";
import { Tabs } from "antd";
import ProductView from "./TableView/ProductView";
import PageHeader from "../../component/PageHeader/PageHeader";
import { instance } from "../../ultils/ultils";
import reducer , {initialState} from '../../reducer/ProductReducer'
import ProductContext from "../../context/ProductContext"
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
  const [store, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const product_res = await instance.get("/products");
     
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
    <ProductContext.Provider value={{store,dispatch}}>
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
    </ProductContext.Provider>
  );
}
