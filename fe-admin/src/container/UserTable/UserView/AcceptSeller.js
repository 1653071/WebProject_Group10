import React, { useState, useContext, useEffect } from "react";
import { Table, Button, Drawer, Divider, Col, Row, Modal } from "antd";
import usersdata from "../../../data/users";
import UserContext from "../../../context/UserContext";
import { instance } from "../../../ultils/ultils";
import { accepts } from "express/lib/request";
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default function AppceptSeller() {
  const { store } = useContext(UserContext);
  const { items, query } = store;
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [visible, setVisible] = useState(false);
  const [isModalAcceptVisible, setIsModalAcceptVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  useEffect(function () {
    setUsers(
      store.items.filter(function (item) {
        return item.isSeller === false && item.isRequest === true;
      })
    );
  }, []);

  const showAcceptModal = () => {
    setIsModalAcceptVisible(true);
  };
  const handleOkAccept = () => {
    setTimeout(async () => {
      const res = await instance.put(`users/acceptseller/${userId}`).then(()=>{

      });
      setIsModalAcceptVisible(false);
    }, 2000);
    setIsModalAcceptVisible(false);
  };

  const handleCancelAccept = () => {
    setIsModalAcceptVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
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
                  showAcceptModal();
                  setUserId(record.id);
                }}
              >
                Duyệt
              </Button>
              <Button
                key={`a-${record.name}`}
                type="primary"
                shape="round"
                style={{ marginRight: "10px", border: "none" }}
                onClick={showDrawer}
              >
                Chi tiết
              </Button>

              <Button
                key={`a-${record.name}`}
                type="danger"
                shape="round"
                style={{ marginRight: "10px", border: "none" }}
                onClick={showDrawer}
              >
                Từ chối
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
      >
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Full Name" content="Lily" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Account" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="HangZhou" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="China🇨🇳" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Birthday" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Website" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content="Programmer" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content="AntDesign@example.com" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="http://github.com/ant-design/ant-design/">
                  github.com/ant-design/ant-design/
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
      <Modal
        title="Basic Modal"
        visible={isModalAcceptVisible}
        onOk={handleOkAccept}
        onCancel={handleCancelAccept}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
