import React from "react";
import { Row, Col, Divider } from "antd";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";

const style = { background: "#0092ff", padding: "8px 0" };

export default function GridProduct(props) {
  return (
    <> 
      <SectionTitle title={props.title} />
      
      <Row justify="center" gutter={16}>
        <Col className="gutter-row" span={4}>
          <ProductCard / >
        </Col>
        <Col className="gutter-row" span={4}>
        <ProductCard / >
        </Col>
        <Col className="gutter-row" span={4}>
        <ProductCard / >
        </Col>
        <Col className="gutter-row" span={4}>
        <ProductCard / >
        </Col>
        <Col className="gutter-row" span={4}>
        <ProductCard / >
        </Col>
      </Row>
      
      
      
    </>
  );
}
