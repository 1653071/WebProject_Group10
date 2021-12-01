import { Card } from "antd";
import { Price, Time } from "./ProductCard.style";
const {Meta} = Card;
export default function ProductCard(props){
     return (
        <Card
        hoverable
        style={{ width: 200, padding:"10px" }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat"/>
        <Price>1653071</Price>
        <Time>14:00"11</Time>
      </Card>
     );
}