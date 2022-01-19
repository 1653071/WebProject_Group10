import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import { DashboardWrapper } from "./Dashboard.style";
import { Route, Link, Routes,useNavigate } from "react-router-dom";
import ProductTable from "../ProductTable/ProductTable";
import UserTable from "../UserTable/UserTable";
import { instance } from "../../ultils/ultils";
import reducer, { initialState } from "../../reducer/ProductReducer";
const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <DashboardWrapper>
      <Layout className="" style={{ height: "100vh" }}>
      
        <Sider>
        <div className="logo" style={{height: "32px",margin: "16px",background: "rgba(255, 255, 255, 0.3)"}} ></div>
          <Sidebar />
        </Sider>
        <Layout>
          <Header style={{color:"white",textAlign:"right"}} onClick={() => {
          delete localStorage.admin_accessToken;
          delete localStorage.admin_name;
          delete localStorage.admin_isLoggin;
          delete localStorage.admin_username;
         
          navigate("/");
        }}>Logout</Header>
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
