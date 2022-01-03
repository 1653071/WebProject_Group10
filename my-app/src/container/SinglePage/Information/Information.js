import React from "react";
import { Rate } from "antd";
import { Typography, Button, Row, Col, Input } from "antd";
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
export default function Information({item}) {
  return (
    <InformationWrapper>
      <Title level={4} style={{ fontWeight: "bold", color: "#994C00",fontFamily:"Arial"}}>
        {item.name}
      </Title>
      <AuctionInfo>
        <Row gutter={24} style={{paddingBottom:"20px"}}>
        <Col span={8}>Thời gian</Col>
        <Col span={16}><Date>Từ 16-10-2021 đến 16-10-2021</Date></Col>
        </Row>
        <Row gutter={24}>
        <Col span={8}>Còn lại</Col>
        <Col span={16}><Time>16:00:16</Time></Col>
        </Row>
        <Row gutter={24}>
        <Col span={8}>Còn lại</Col>
        <Col span={16}><Time>16:00:16</Time></Col>
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
        <SelectPriceWrapper>
          <Right>-</Right>
          <Input style={{ width: "60px", height: "32px" }} defaultValue="0571" />
          <Right>+</Right>
        </SelectPriceWrapper>
        <Button type="text" className="auction">
          Đấu giá
        </Button>
      </Auction>
    </InformationWrapper>
  );
}
