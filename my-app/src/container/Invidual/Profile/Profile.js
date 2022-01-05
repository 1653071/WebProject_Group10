import React from "react";
import { ProfileWrapper } from "./Profile.style";
import { Descriptions } from "antd";
import { Title } from "../Invidual.style";
export default function Profile() {
  return (
    <ProfileWrapper>
      <Descriptions title="Thông tin">
        <Descriptions.Item label="Tên đăng nhập">
          {localStorage.username}
        </Descriptions.Item>
        <Descriptions.Item label="Tên">{localStorage.name}</Descriptions.Item>
        <Descriptions.Item label="Ngày sinh">
          {localStorage.birthdate}
        </Descriptions.Item>
        <Descriptions.Item label="Mail">{localStorage.mail}</Descriptions.Item>
      </Descriptions>
      
    </ProfileWrapper>
  );
}
