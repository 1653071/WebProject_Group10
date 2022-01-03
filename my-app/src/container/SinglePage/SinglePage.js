import React from "react";
import { useLocation } from "react-router-dom";
import ProductImage from "./ProductImage/ProductImage";
import { PostImage, SinglePageWrapper, Container,ProductDetail } from "./SinglePage.style";
import Information from "./Information/Information";
import Description from "./Description/Description";
import { Image } from "antd";
import Seller from "./Seller/Seller";
import RelateProduct from "./RelateProduct/RelateProduct";
import History from "./History/History";
export default function SinglePage(props) {
  const location = useLocation()
  const { item } = location.state
  return (
    <SinglePageWrapper>
      
      <Container>
        <PostImage>
        <Image 
           height={400}
           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
           style={{width:"100%" , padding:"0",margin:"0"}}
        />
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
