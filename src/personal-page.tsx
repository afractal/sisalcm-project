import React, { } from 'react';
import { Card, Space } from 'antd';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import { allCountries } from './country-list';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const allCountriesOptions = () => {
  return allCountries.map(x => {
    return <Option value={x.code}>{x.name}</Option>
  });

};


export const PersonalsForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Card title="Insert the personal informations" style={{ width: 800 }}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >

        <Form.Item name="Name" label="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="Surname" label="surname" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="Nationality"
          label="nationality"
          rules={[{ required: true, message: 'Please select Nationality!' }]}
        >
          <Select placeholder="select your nationality">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>

    </Card>
  );
};
