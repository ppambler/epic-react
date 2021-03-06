import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { useStores } from "../stores";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 30px auto;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  border-radius: 4px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  text-align: center;
`;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
};

const Component = () => {
  const history = useHistory();
  const { AuthStore } = useStores();
  const onFinish = (values) => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login()
      .then((res) => {
        console.log("登录成功");
        history.push("/");
      })
      .catch((error) => console.log(error, "登录失败"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed：", errorInfo);
  };

  // 用户名校验
  const validateUserName = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject("只能是字母数字下划线");
    if (value.length < 4 || value.length > 10)
      return Promise.reject("长度为4~10个字符");
    return Promise.resolve();
  };
  return (
    <Wrapper>
      <Title>登录</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入你的用户名！",
            },
            { validator: validateUserName },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入你的密码！",
            },
            { min: 4, message: "密码长度不能小于4" },
            { max: 10, message: "密码长度不能大于10" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default Component;
