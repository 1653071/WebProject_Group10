import React from "react";
import { Row, Col } from "antd";
import ProductCard from "../../../../components/ProductCard/ProductCard";

export default function ListingProduct() {
  return (
    <>
      <Row gutter={24} style={{marginTop:"20px"}}>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
      </Row>
      <Row gutter={24} style={{marginTop:"20px"}}>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
      </Row>
      
      <Row gutter={24} style={{marginTop:"20px"}}>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col span={6}>
          <ProductCard></ProductCard>
        </Col>
      </Row>
      
      
    </>
  );
}
