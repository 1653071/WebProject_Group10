import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Table, Button, Drawer, Descriptions, Badge,Modal } from "antd";
import ProductContext from "../../../context/ProductContext";
import {instance} from '../../../ultils/ultils'
export default function TableProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { store } = useContext(ProductContext);
  const { items, query } = store;
  const [state, setState] = useState({
    product: {},
    iddelete:null
  });
  //Delete modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const res = await instance.delete(`/products/delete/${state.iddelete}`);
    const retUrl = location.state?.from?.pathname || '/';
    navigate(retUrl);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá hiện tại",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Action",
      dataIndex: "action",
      width: "45%",
      render: (_, record) => (
        <>
          {record.name === "initial" && <Button icon="plus" shape="circle" />}
          {record.name !== "initial" && (
            <>
              <Button
                key={`a-${record.name}`}
                type="primary"
                shape="round"
                style={{ marginRight: "10px", border: "none" }}
                onClick={() => {
                  showDrawer();
                  state.product = record;
                }}
              >
                Chi tiết
              </Button>

              <Button shape="round" onClick={() => {
                  showModal();
                  state.iddelete = record.id;
                }} type="danger">
                Xóa
              </Button>
            </>
          )}
        </>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={items} columns={columns} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"70%"}
      >
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Product">
            {state.product.name}
          </Descriptions.Item>
          <Descriptions.Item label="Giá bán">
            {state.product.price}
          </Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
          <Descriptions.Item label="Order time">
            2018-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Usage Time" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Đang bán" />
          </Descriptions.Item>

          <Descriptions.Item label="Danh sách người đặt">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      </Drawer>
      <Modal title="Xóa sản phẩm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              Xác nhận xóa sản phẩm này?
      </Modal>
    </>
  );
}
