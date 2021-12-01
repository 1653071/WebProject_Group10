import React from "react";
import { Menu, Row ,Col} from "antd";
import ListingGrid from "../../components/ListingGrid/ListingGrid";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ListingWrapper } from "./Listing.style";
const { SubMenu } = Menu;
export default function Listing(props) {
  return (
    <Row gutter={24} style={{width:"100%"}}>
      <Col span={2}>
      <Menu
        style={{ float:"left" }}
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
      <Col span={22}>
      <ListingGrid>
          
      </ListingGrid>
      </Col>
      
    </Row>
  );
}
