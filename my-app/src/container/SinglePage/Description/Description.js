import React from "react";

import { Typography } from "antd";
import { DescriptionContent,DescriptionWrapper } from "./Description.style";
const {Title} = Typography;
export default function Description({description}){
    return (
        <DescriptionWrapper>
           <Title level={4} style={{textAlign:"center"}}>Mô tả sản phẩm</Title>
           <DescriptionContent>
               {description}
           </DescriptionContent>
           
        </DescriptionWrapper>
    );
}