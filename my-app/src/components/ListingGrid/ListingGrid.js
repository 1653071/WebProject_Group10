import React from "react";
import { Row, Col, Divider } from "antd";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";
import { ListingGridWrapper } from "./ListingGrid.style";


const style = { background: "#0092ff", padding: "8px 0" };

export default function ListingGrid(props) {
  return (
    <ListingGridWrapper> 
     
      
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
      
      
      
    </ListingGridWrapper>
  );
}