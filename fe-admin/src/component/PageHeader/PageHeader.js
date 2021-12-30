import React from "react";
import { Typography } from 'antd';

const { Title } = Typography;
export default function PageHeader(){
    return(
        <Title level={3} type="secondary" style={{textAlign:"none"}}>Quản lý</Title>
    );
}