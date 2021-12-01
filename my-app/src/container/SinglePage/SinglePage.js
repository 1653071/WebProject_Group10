import React from "react";
import ProductImage from "./ProductImage/ProductImage";
import { PostImage, SinglePageWrapper, Container,ProductDetail } from "./SinglePage.style";
import Information from "./Information/Information";
import Description from "./Description/Description";
import { Image } from "antd";
import Seller from "./Seller/Seller";
import RelateProduct from "./RelateProduct/RelateProduct";
export default function SinglePage(props) {
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
        <Information />
      </Container>
      <ProductDetail>
        <Seller />
        <Description />
        <RelateProduct />
        
      </ProductDetail>
    </SinglePageWrapper>
  );
}
