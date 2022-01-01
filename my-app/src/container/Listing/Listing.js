import React, { useContext, useReducer, useEffect,useState } from "react";
import { Menu, Row, Col } from "antd";
import ListingGrid from "../../components/ListingGrid/ListingGrid";
import AppContext from "../../context/ProductContext";
import { instance } from "../../ultils/ultils";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Input, Space } from 'antd';
import SearchBar from "../../components/SearchBar/SearchBar";
import reducer , {initialState} from '../../reducer/ProductReducer'

const { Search } = Input;
const { SubMenu } = Menu;
export default function Listing(props) {

  
  const [store, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await instance.get("/products");
      const productsRes = res.data;
      console.log(res);
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
    <AppContext.Provider value={{ store, dispatch }}>
      <Row style={{padding:"30px 30px"}}>
         <SearchBar></SearchBar>
      </Row>
      <Row gutter={24} style={{ width: "100%" }}>
        <Col span={6}>
          <Menu
            style={{ float: "left" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Tất cả sản phẩm">
              <Menu.ItemGroup key="g1" title="Điện tử">
                <Menu.Item key="1">Máy tính xách tay</Menu.Item>
                <Menu.Item key="2">Điện thoại di động</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Col>
        <Col span={18}>
          <ListingGrid>

          </ListingGrid>
        </Col>
      </Row>
    </AppContext.Provider>
  );
}
