import React,{useState,useEffect} from "react";
import { useLocation } from 'react-router-dom'
import { Card } from "antd";
import { Price, Time } from "./ProductCard.style";

const { Meta } = Card;
export default function  ProductCard(props) {
  
  const current = new Date();
  const location = useLocation();
  
  
  const [time,setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Card
      hoverable
      style={{ width: 300, padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={props.item.name} />
      <Price>{}</Price>
      <Time></Time>
    </Card>
  );
}
