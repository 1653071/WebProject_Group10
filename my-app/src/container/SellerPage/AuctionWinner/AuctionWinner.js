import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Descriptions,
  Radio,
  Button,
  Input,
  Pagination,
  Table,
  Space,
  Badge,
  Modal
} from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { instance } from "../../../ultils/ultils";
import { Price } from "../../../components/ProductCard/ProductCard.style";
const { TextArea } = Input;
export default function AuctionWinner() {
  const [auctionID, setAuctionID] = useState(null);
  const handleOkDeleteModal = async () => {
    const res = await instance.delete(`auction/delete/${auctionID}`);
    if(res.status === 200){
      alert("Xóa thành công")
    }
    else{
      alert("Xóa thất bại")
    }
  };
  const [visibleDeleteModal, setVisibleDeleteModal] = React.useState(false);
  const showModalDelete = () => {
    setVisibleDeleteModal(true);
  };

  

  const handleCancelDeleteModal = () => {
    console.log("Clicked cancel button");
    setVisibleDeleteModal(false);
  };
  const columns = [
    {
      title: "Thời điểm",
      dataIndex: "datecreate",
      key: "time",
    },
    {
      title: "Người mua",
      dataIndex: "userId",
      key: "bidder",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hành động",
      key: "action",
      width: "15%",
      render: (text, record) => (
        <Space size="middle">
          <Button
            key={`a-${record.id}`}
            type="primary"
            shape="round"
            style={{ marginRight: "10px", border: "none" }}
            onClick={() => {
              setAuctionID(record.id);
              showModalDelete();    
            }}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
    
  ];
  const [usersauction, setUserauction] = useState([]);
  const location = useLocation();
  const { item } = location.state;
  useEffect(() => {
    const fetchUser = async () => {
      const res_user = await instance(`/auction/product/${item.id}`);
      setUserauction(res_user.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <Descriptions
        bordered
        title="Custom Size"
        extra={<Button type="primary">Edit</Button>}
      >
        <Descriptions.Item label="Product">{item.name}</Descriptions.Item>
        <Descriptions.Item label="Người ra giá cao nhất">
          Prepaid
        </Descriptions.Item>
        <Descriptions.Item label="Thời gian kết thúc">
          {item.dateend}
        </Descriptions.Item>
        <Descriptions.Item label="Giá hiện tại">{item.price}</Descriptions.Item>
        <Descriptions.Item label="Giá khởi điểm">
          {item.price}
        </Descriptions.Item>
        <Descriptions.Item label="Giá mua ngay">
          {item.pricebuy}
        </Descriptions.Item>
        <Descriptions.Item label="Tình trạng" span={3}>
          {Date.parse(item.dateend) > Date.now() ? (
            <Badge status="processing" text="Đang đăng bán" />
          ) : (
            <Badge status="error" text="Đã hết hạn" />
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Những người mua">
          <Table
            dataSource={usersauction.sort((first, second) => {
              return first.price < second.price ? 1 : -1;
            })}
            columns={columns}
          />
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Descriptions title="Đánh giá nhận xét" extra={<LikeOutlined />}>
        <div>
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 120, width: "100%" }}
          />
        </div>
      </Descriptions>
      <Modal
        title="Xác nhận"
        visible={visibleDeleteModal}
        onOk={handleOkDeleteModal}
        onCancel={handleCancelDeleteModal}
        okText="Xác nhận"
        cancelText="Hủy"
        okType="danger"
      >
        <p>Xóa khách hàng này?</p>
      </Modal>
    </>
  );
}
