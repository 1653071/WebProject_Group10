import React from "react";
import { useLocation } from "react-router-dom";
import ProductImage from "./ProductImage/ProductImage";
import { PostImage, SinglePageWrapper, Container,ProductDetail } from "./SinglePage.style";
import Information from "./Information/Information";
import Description from "./Description/Description";
import { Image,Row,Col } from "antd";
import Seller from "./Seller/Seller";
import RelateProduct from "./RelateProduct/RelateProduct";
import History from "./History/History";
export default function SinglePage(props) {
  const location = useLocation()
  const { item } = location.state
  const current = new Date();
  console.log(current.getTime());
  return (
    <SinglePageWrapper>
      
      <Container>
        <PostImage>
        
        <Row gutter={24}>
         
          <Col span={6}>
          <Row>
          <Image 
           height={100}
           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
           style={{width:"100%" , padding:"0",margin:"0"}}
        />
          </Row>
          <Row>
          <Image 
           height={100}
           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
           style={{width:"100%" , padding:"0",margin:"0"}}
        />
          </Row>
          <Row>
          <Image 
           height={100}
           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
           style={{width:"100%" , padding:"0",margin:"0"}}
        />
          </Row>
          </Col>
          <Col span={18}>
          <Image 
           height={300}
           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
           style={{width:"100%" , padding:"0",margin:"0"}}
         />
          </Col>
        </Row>
        </PostImage>
        <Information item={item} />
      </Container>
      <ProductDetail>
        <Seller />
        <Description />
        <RelateProduct />
        <History></History>
      </ProductDetail>
    </SinglePageWrapper>
  );
}
