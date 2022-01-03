import React from "react";
import { Table } from "antd";
import { Typography } from "antd";

import { HistoryContent, HistoryWrapper } from "./History.style";
const { Title } = Typography;
export default function History() {
  const dataSource = [
    {
      key: "1",
      time: "12-12-2011",
      bidder:"Quang",
      price: "10000000",
    },
    
  ];

  const columns = [
    {
      title: "Thời điểm",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Người mua",
      dataIndex: "bidder",
      key: "bidder",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
  ];
  return (
    <HistoryWrapper>
      <Title level={4} style={{ textAlign: "center" }}>
        Người đã ra giá
      </Title>
      <HistoryContent>
        <Table dataSource={dataSource} columns={columns} />
      </HistoryContent>
    </HistoryWrapper>
  );
}
