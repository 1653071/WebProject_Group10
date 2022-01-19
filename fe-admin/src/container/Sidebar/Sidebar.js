import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
export default function Sidebar() {
  return (
    <Menu
      style={{ width: "100%", height: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.Item key="1" icon={<MailOutlined />}>
        <Link to="/products"></Link>
        Quản lý sản phẩm
      </Menu.Item>
      <Menu.Item key="2" icon={<MailOutlined />}>
        <Link to="/users"></Link>
        Quản lý người dùng
      </Menu.Item>
     
    </Menu>
  );
}
