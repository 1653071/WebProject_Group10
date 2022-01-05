import React,{useState,useEffect} from "react";
import {Link } from 'react-router-dom'
import { Card } from "antd";
import { Price, Time } from "./ProductCard.style";
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
const { Meta } = Card;
export default function  ProductCard({item}) {
  return (
    <Card
      hoverable
      style={{ width: "100%"  }}
      cover={
        <img
          alt="example"
          src={item.image[0]}
          height={300}
    
        />
        
      }
    >
      <Meta title={item.name} style={{fontWeight:"600", marginTop:"10px"}}/>
      <Price>{item.price}</Price>
      <Time></Time>
      <Link to={`/listing/${item.id}`} state={{item1:item}}>Dau961 gia1</Link>
    </Card>
  );
}
