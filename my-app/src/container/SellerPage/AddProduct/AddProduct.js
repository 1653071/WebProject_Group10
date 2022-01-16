import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AddProductWrapper } from "./AddProduct.style";
import {
  Form,
  Input,
  Radio,
  Select,
  Row,
  Col,
  Checkbox,
  Upload,
  Button,
  AutoComplete,
  InputNumber,
  DatePicker,
  TimePicker,
} from "antd";
import { storage } from "../../../firebase/firebase";
import { instance } from "../../../ultils/ultils";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

export default function AddProduct() {
  const [form] = Form.useForm();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [pricebuy, setPricebuy] = useState();
  const [description, setDescription] = useState();
  const [jump, setJump] = useState();
  const [category_id, setCategoryID] = useState();
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [dateend, Setdateend] = useState();
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [progress, setProgress] = useState(0);
  const name_changed = function (e) {
    setName(e.target.value);
  };
  const description_changed = function (e) {
    setDescription(e.target.value);
  };
  const image_changed = function (e) {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const image_changed1 = function (e) {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setImage1(e.target.files[0]);
    }
  };
  const image_changed2 = function (e) {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setImage2(e.target.files[0]);
    }
  };
  const jump_changed = function (e) {
    setJump(e);
  };
  const price_changed = function (e) {
    setPrice(e);
  };
  const pricebuy_changed = function (e) {
    setPricebuy(e);
  };
  const dateend_changed = function (e) {
    Setdateend(e);
  };

  const category_change = function (value) {
    setCategoryID(value);
  };
  function handleUpload() {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
       () => {
        storage
            .ref("images")
            .child(image.name)
            .getDownloadURL().then((url) => {
              setUrl(url);
              console.log(url)
              return url;
            });
            
        
      }
    );
  };
  function handleUpload1() {
    const uploadTask = storage.ref(`images/${image1.name}`).put(image1);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
       () => {
        storage
            .ref("images")
            .child(image1.name)
            .getDownloadURL().then((url) => {
              setUrl1(url);
              console.log(url)
              return url;});
              
            
        
      }
    );
  };
  function handleUpload2() {
    const uploadTask = storage.ref(`images/${image2.name}`).put(image2);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
       () => {
        storage
            .ref("images")
            .child(image2.name)
            .getDownloadURL().then((url) => {
              setUrl2(url);
              console.log(url)
              return url;});
            
        
      }
    );
  };
  const onFinish = async function () {
    try {
      const result = await handleUpload()
      const result1 = await handleUpload1()
      const result2 = await handleUpload2()
      const picture = [`${url}`,`${url1}`,`${url2}`]
      
      const data = {
        name: name,
        price: price,
        pricebuy: pricebuy,
        category_id: category_id,
        jump: jump,
        dateend: dateend,
        picture: picture,
        description: description,
        sellerId: localStorage.userID,
        datecreate: Date.now(),
      };
 
     
          const res = await instance.post("/products/add", data);
          if (res.status == 200) {
            const retUrl = location.state?.from?.pathname || "/seller/products";
            navigate(retUrl);
          } else {
            alert("Invalid login.");
          }
        
        
       
   
     
       
        
        
      
        
       
        
      
      
    } catch (err) {
      
    }
  };
  const onGenderChange = (value) => {
    switch (value) {
      case "hfIXPdIhFVqxS92bCli5":
        setCategoryID("hfIXPdIhFVqxS92bCli5");
        return;
      default:
        setCategoryID("nFKDk4PRH3UCmIcfX6JN");
        return;
    }
  };
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Form
        name="validate_other"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
        style={{
          margin: "60px",
          boxShadow: "0 6px 20px rgba(0, 0, 0,0.1)",
          borderRadius: "5px",
          padding: "60px",
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[
                {
                  required: true,
                  message: "Nhập tên sản phẩm",
                },
              ]}
            >
              <Input onChange={name_changed} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="jump"
              label="Buoc gia"
              rules={[
                {
                  required: true,
                  message: "Nhập bước giá",
                },
              ]}
            >
              <InputNumber onChange={jump_changed} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="pricebuy" label="Giá mua ngay" rules={[
                {
                  required: true,
                  message: "Nhập giá",
                },
              ]}>
              <InputNumber onChange={pricebuy_changed} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Giá khởi điểm"
              rules={[
                {
                  required: true,
                  message: "Nhập giá khởi điểm",
                },
              ]}
            >
              <InputNumber onChange={price_changed} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="decription"
          label="Mô tả sản phẩm"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={100}
            onChange={description_changed}
          />
        </Form.Item>
        <Form.Item name="dateend" label="Chọn ngày kết thúc">
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            onChange={dateend_changed}
          />
        </Form.Item>
        <Form.Item name="radio-group" label="Gia hạn">
          <Radio.Group>
            <Radio value="true">Có</Radio>
            <Radio value="false">Không</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="category" label="Select" rules={[{ required: true }]}>
          <Select onChange={category_change}>
            <Select.Option value="RuF5yXnJB8FkXgRebGm5">
              Máy tính xách tay
            </Select.Option>
            <Select.Option value="nFKDk4PRH3UCmIcfX6JN">
              Điện thoại di động
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="image1" label="Ảnh đại diện ">
          <input type="file" onChange={image_changed} />
          <button onClick={handleUpload}>Upload</button>
        </Form.Item>
        <Form.Item name="image2" label="Ảnh phụ 1 ">
          <input type="file" onChange={image_changed1} />
          <button onClick={handleUpload1}>Upload</button>
        </Form.Item>
        <Form.Item name="image3" label="Ảnh phụ 2 ">
          <input type="file" onChange={image_changed2} />
          <button onClick={handleUpload2}>Upload</button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={()=>{
            
          }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      
    </>
  );
}
