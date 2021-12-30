import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import { DashboardWrapper } from "./Dashboard.style";
import { Route, Link, Routes } from "react-router-dom";
import ProductTable from "../ProductTable/ProductTable";
import UserTable from "../UserTable/UserTable";
const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Layout className="" style={{ height: "100vh" }}>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content className="content">
            <Routes>
              <Route path="products" element={<ProductTable />} />
              <Route path="users" element={<UserTable />} />
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </DashboardWrapper>
  );
}
