import React ,{useState}from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginWrapper } from "./Login.style";
import { instance } from "../../ultils/ultils";
export default function Demo() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username,SetUsername] = useState("");
  const [password,setPassword] = useState("");
  const username_Changed = function (e) {
    SetUsername(e.target.value);
  };
  const password_Changed = function (e) {
    setPassword(e.target.value);
  };
  const onFinish = async () => {
    
    const data = { username: username, password: password };
    const res = await instance.post("/adminauth/login",data);
    if (res.data.authetication) {
      // console.log(res.data.accessToken);
      localStorage.accessToken = res.data.accessToken;
      localStorage.name = res.data.name;
      localStorage.isLoggin = true;
      localStorage.username = res.data.username;
   
      // console.log(location.state);
      const retUrl = location.state?.from?.pathname || "/products";
      navigate(retUrl);
    } else {
      alert("Invalid login.");
    }
  };
  return (
    <LoginWrapper>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        style={{top:"50%"}}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={username_Changed} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={password_Changed}/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
}
