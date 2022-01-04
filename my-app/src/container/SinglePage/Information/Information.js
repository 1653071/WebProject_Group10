import React, {useState} from "react";
import { Rate } from "antd";
import { Typography, Button, Row, Col, Input, InputNumber,Modal } from "antd";
import {
  InformationWrapper,
  Contractor,
  Price,
  ContractorWrapper,
  PriceWrapper,
  HeadTitle,
  Time,
  Auction,
  AuctionInfo,
  Date,
  Right,
  SelectPriceWrapper,
} from "./Information.style";
const { Title } = Typography;
export default function Information({ item }) {
  
  const auctionSubmit = ()=>{

  } 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {  
    setIsModalVisible(false);
  };
  const current = new Date();
  console.log(current);
  return (
    <InformationWrapper>
      <Title
        level={4}
        style={{ fontWeight: "bold", color: "#994C00", fontFamily: "Arial" }}
      >
        {item.name}
      </Title>
      <AuctionInfo>
        <Row gutter={24} style={{ paddingBottom: "20px" }}>
          <Col span={8}>Thời gian</Col>
          <Col span={16}>
            <Date>Từ 16-10-2021 đến 16-10-2021</Date>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>Còn lại</Col>
          <Col span={16}>
            <Time>16:00:16</Time>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>Còn lại</Col>
          <Col span={16}>
            <Time>16:00:16</Time>
          </Col>
        </Row>

        <ContractorWrapper>
          <HeadTitle>Người ra giá cao nhất</HeadTitle>
          <Contractor>quang.work</Contractor>
        </ContractorWrapper>
        <PriceWrapper>
          <HeadTitle>Giá thầu</HeadTitle>
          <Price>120000</Price>
        </PriceWrapper>
      </AuctionInfo>
      <Auction>
        <form onSubmit={auctionSubmit}> 
          <SelectPriceWrapper>
            <InputNumber />
          </SelectPriceWrapper>
          <Button type="text" className="auction">
            Đấu giá
          </Button>
        </form>
      </Auction>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {`Đồng ý đấu giá với số tiền 1000`}
      </Modal>
    </InformationWrapper>
  );
}
