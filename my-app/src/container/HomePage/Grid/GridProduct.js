import React, {useContext} from "react";
import { Row, Col, Divider } from "antd";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCard from "../../../components/ProductCard/ProductCard";
import TodoAppContext from '../../../context/ProductContext';
const style = { background: "#0092ff", padding: "8px 0" };

export default function GridProduct(props) {
  const {store} = useContext(TodoAppContext);
  const { items, query } = store;
  return (
    <> 
      <SectionTitle title={props.title} />
      
      <Row justify="center" gutter={16}>
        {
          items.sort((first, second) => {
            return first.price < second.price ? 1 : -1;
          }).filter((item) => Date.parse(item.dateend)< Date.now()).slice(0,5).map((item) =>(
          <Col className="gutter-row" span={4}>
            <ProductCard item={item} key={item.id} />
          </Col>
          ))
        }
        
      </Row>
      
      
      
    </>
  );
}
