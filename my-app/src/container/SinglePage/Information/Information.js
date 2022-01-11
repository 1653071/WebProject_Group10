import React, { useState ,useEffect} from "react";

import { Typography, Button, Row, Col, Input, InputNumber, Modal } from "antd";
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
  DateWrapper,
  Right,
  SelectPriceWrapper,
} from "./Information.style";
import { instance } from "../../../ultils/ultils";
const { Title } = Typography;
export default function Information(props) {
  const auctionSubmit = () => {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [priceauction,SetPriceAuction] = useState();
  const [time,setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.parse(props.item.dateend)-Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [])
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const auctionClick = async () =>{
    const date = new Date();
    const payload= {
      productId:props.item.id,
      price: priceauction,
      userId: localStorage.userID,
      sellerId: props.item.sellerId,
      datecreate: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    }
    await instance.post(`/auction/add`,payload).then((res)=>{
        if(res.status === 200){
          alert("Đấu giá thành công")
        }
        else{
          alert("Đấu giá thất bại")
        }
    })
  }
  const onChangePrice = e => {
    SetPriceAuction(e);
  };
  return (
    <InformationWrapper>
      <Title
        level={4}
        style={{ fontWeight: "bold", color: "#994C00", fontFamily: "Arial" }}
      >
        {props.item.name}
      </Title>
      <AuctionInfo>
        <Row gutter={24} style={{ paddingBottom: "20px" }}>
          <Col span={8}>Thời gian</Col>
          <Col span={16}>
            <DateWrapper>Từ {props.item.datecreated} đến {props.item.dateend}</DateWrapper>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>Còn lại</Col>
          <Col span={16}>
            <Time>{Math.floor(time / 86400000)} ngày {Math.floor((time % 86400000) / 3600000)} : {Math.floor(((time % 86400000) % 3600000) / 60000)}: {Math.floor(((time % 86400000)%60000)/1000)}</Time>
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
            <InputNumber onChange={onChangePrice} />
          </SelectPriceWrapper>
          <Button  className="auction" onClick={auctionClick}>
            Đấu giá
          </Button>
        </form>
      </Auction>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {`Đồng ý đấu giá với số tiền 1000`}
      </Modal>
    </InformationWrapper>
  );
}
