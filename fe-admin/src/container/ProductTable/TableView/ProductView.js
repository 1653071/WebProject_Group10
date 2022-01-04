import React, { useState, useContext } from "react";
import { Table, Button, Drawer, Descriptions, Badge } from "antd";
import ProductContext from "../../../context/ProductContext";

export default function TableProduct() {
  const { store } = useContext(ProductContext);
  const { items, query } = store;
  const [state, setState] = useState({
    product: {},
  });
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
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

              <Button shape="circle" type="danger">
                <i className="ion-android-delete" />
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
    </>
  );
}
