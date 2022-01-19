import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Table, Button, Drawer, Descriptions, Badge,Modal ,notification,Form,Input} from "antd";
import ProductCategoryContext from "../../../context/ProductCategoryContext";
import {instance} from '../../../ultils/ultils'
export default function TableProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { storeCategory } = useContext(ProductCategoryContext);
  const { categories } = storeCategory;
  const [state, setState] = useState({
    categories: {},
    iddelete:null
  });
  //Delete modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const res = await instance.delete(`/product_category/delete/${state.iddelete}`);
    if(res.status ===200){
        setTimeout(() => {
            setIsModalVisible(false);
        }, 2000);
        notification.open({
            message: 'Tình trạng',
            description:
              'Xóa thành công',
            onClick: () => {
              console.log('Notification Clicked!');
            },
        });
    }
    else if(res.status===201){
        setTimeout(() => {
            setIsModalVisible(false);
        }, 2000);
        notification.open({
            message: 'Tình trạng',
            description:
              'Xóa thất bại vẫn còn hàng thuộc loại này',
            onClick: () => {
              console.log('Notification Clicked!');
            },
        });
    }
    const retUrl = location.state?.from?.pathname || '/products';
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
                  state.categories= record;
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
  const [addvisible, setaddVisible] = useState(false);
  const [name,setName] = useState("");
  const onFinish = async ()=>{

     const data = {name:name}
     const res = await instance.post(`/product_category/add`,data,{headers: { 'x-access-token': localStorage.admin_accessToken}});
     if(res.status === 200){
         setTimeout(() => {
             setaddVisible(false)
             notification.open({
                message: 'Tình trạng',
                description:
                  'Thêm mới loại thành công',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
            });
         }, 2000);
     }
  };
  return (
    <>
      <Button type="primary" onClick={() => setaddVisible(true)} style={{marginBottom:"20px"}}>Thêm Loại sản phẩm</Button>
      <Table dataSource={categories} columns={columns} />
      
      <Modal title="Xóa sản phẩm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              Xác nhận xóa sản phẩm này?
      </Modal>
      <Modal
        title="Modal 1000px width"
        centered
        visible={addvisible}
        onOk={() => setaddVisible(false)}
        onCancel={() => setaddVisible(false)}
        width={1000}
      >
        <Form
      name="basic"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
     
      autoComplete="off"
    >
      <Form.Item
        label="Loại"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={(e)=>{setName(e.target.value)}} />
      </Form.Item>

      


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
}