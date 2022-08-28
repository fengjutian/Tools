import React, { useState } from 'react';
import { Button, Modal, Form, Input, Checkbox, Divider } from 'antd';
import Icon from './Icon';

type ICtx = {
  message: string;
  children: React.ReactNode;
};

const Ctx: React.FC<ICtx> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showAddDialog = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  return (
    <>
      <Divider>按钮</Divider>
      <Button type="primary" onClick={() => showAddDialog()}>
        新加
      </Button>

      <Divider>图标</Divider>
      <Icon />

      <Modal
        title="新加"
        centered
        keyboard="false"
        maskClosable="false"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              创建
            </Button>
          </Form.Item>
        </Form>

        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Modal>
    </>
  );
};

export default Ctx;
