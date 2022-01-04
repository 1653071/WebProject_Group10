import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Divider } from "antd";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";
import { ListingGridWrapper } from "./ListingGrid.style";
import ProductContext from "../../context/ProductContext";

const style = { background: "#0092ff", padding: "8px 0" };

export default function ListingGrid(props) {
  const { store } = useContext(ProductContext);
  const { items, query ,category_id} = store;
  console.log(category_id);
  return (
    <ListingGridWrapper>
      <Row gutter={18}>
        {store.items
          .filter(function (item) {
            return item.name.toLowerCase().includes(query.toLowerCase());
          })
          .filter(function (item) {
            if(category_id === "all"){
              return item;
            }
            return item.category_id === category_id;
          })
          .map(function (item) {
            return (
              <Col className="gutter-row" span={6}>
                <Link to={`/listing/${item.id}`} state={{ item: item }}>
                  <ProductCard key={item.id} item={item}/>
                </Link>
              </Col>
            );
          })}
      </Row>
    </ListingGridWrapper>
  );
}
