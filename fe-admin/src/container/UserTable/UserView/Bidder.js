import React, { useState, useContext, useEffect } from "react";
import { Table, Button, Drawer, Divider, Col, Row, Descriptions,Modal } from "antd";
import UserContext from "../../../context/UserContext";

export default function UserView() {
  const { store } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState(null);
  useEffect(function () {
    setUsers(
      store.items.filter(function (item) {
        return item.isSeller === true;
      })
    );
  }, []);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  async function DeleleUser(id) {  
    

  }
  const handleOkDeleteModal = async () => {
    
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
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthdate",
      key: "birthdate",
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
                  setUser(record);
                }}
              >
                Chi tiết
              </Button>

              <Button
                key={`a-${record.name}`}
                type="danger"
                shape="round"
                style={{ marginRight: "10px", border: "none" }}
                onClick={() => {
                  setUserID(record.id);
                  showModalDelete();    
                }}
              >
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
      <Table dataSource={users} columns={columns} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"70%"}
      >
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">{user.name}</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </Drawer>
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
