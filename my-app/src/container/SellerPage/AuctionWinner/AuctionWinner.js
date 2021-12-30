import React from "react";
import { Descriptions, Radio, Button, Input, Pagination } from "antd";
import { LikeOutlined } from "@ant-design/icons";
const { TextArea } = Input;
export default function AuctionWinner() {
  return (
    <>
      <Descriptions
        bordered
        title="Custom Size"
        extra={<Button type="primary">Edit</Button>}
      >
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Người ra giá cao nhất">
          Prepaid
        </Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        <Descriptions.Item label="">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Descriptions
        title="Đánh giá nhận xét"
        extra={<LikeOutlined />}
      >
        <div>
          
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 120, width: "100%" }}
          />
        </div>
      </Descriptions>
    </>
  );
}
