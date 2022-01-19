import React,{useEffect,useState} from "react";

import { Card, Row, Col, Image } from "antd";
import { WinnerAuctionWrapper,Title } from "./WinnerAuction.style";
import { instance } from "../../../ultils/ultils";
export default function WatchList() {
  const [winnerList,setwinnerList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      
    }
    fetchData()
  }, [])
  return (
    <WinnerAuctionWrapper>
      <Card title="Card title">
        {/* {watchList.map(function(item) {
         return <Card
          style={{ marginTop: 16 }}
          type="inner"
        
          extra={<a href="#">Xem chi tiết</a>}
        >
          <Row gutter={24}>
            <Col span={6}>
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col span={18}>
              <Title>asdasdasdasd</Title>
            </Col>
          </Row>
        </Card>
        })} */}
        
      </Card>
      
    </WinnerAuctionWrapper>
  );
}
