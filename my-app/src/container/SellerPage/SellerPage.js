import React, {lazy,Suspense} from "react";

import { useState } from "react";
import { SellerWrapper, MenuWrapper, Content } from "./SellerPage.style";
import { Route, Link, Routes } from "react-router-dom";

import { Avatar, Menu, Button } from "antd";
import { MailOutlined, AuditOutlined, LikeOutlined } from "@ant-design/icons";
import AllProduct from "./AllProduct/AllProduct";
import AuctionWinner from "./AuctionWinner/AuctionWinner";
import AddProduct from "./AddProduct/AddProduct"

const { SubMenu } = Menu;
const routes = [
  {
    path: '/products',
    component: lazy(() => import('../SellerPage/AllProduct/AllProduct')),
    exact: true,
  },
  
];
export default function SellerPage(props) {
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  return (
    <SellerWrapper>
      <MenuWrapper>
        <Menu
          defaultSelectedKeys={selectedMenuItem}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          onClick={(e) => setSelectedMenuItem(e.key)}
        >
          <Menu.Item key="12" icon={<AuditOutlined />}>
            Thêm 1 sản phẩm mới
          </Menu.Item>
          <Menu.Item key="2" icon={<LikeOutlined />}>
            Danh sách sản phẩm yêu thích
          </Menu.Item>

          <SubMenu
            key="sub1"
            icon={<MailOutlined />}
            title="Danh sách sản phẩm"
          >
            <Menu.Item key={1}>
              Chờ được duyệt
              <Link to={`/seller/products`} />
            </Menu.Item>
            <Menu.Item key="4">Đã được đăng</Menu.Item>
          </SubMenu>
        </Menu>
      </MenuWrapper>
      <Content>
      <Suspense>
      <Routes>
        <Route path="add" element={<AddProduct />} />
         <Route path="products" element={<AllProduct />} />
         <Route path="productsdetail" element={<AuctionWinner />} />
      </Routes>
      </Suspense>
      </Content>
    </SellerWrapper>
  );
}
