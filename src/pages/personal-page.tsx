import React, { } from 'react';
import { Card, DatePicker, Space } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import { allCountries } from './country-list';
import { allPrefixes } from './prefix-list';

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
    return <Option key={x.code} value={x.code}>{x.name}</Option>
  });
};

const allPrexisOptions = () => {
  return allPrefixes.map(x => {
    return <Option key={x} value={x}>{x}</Option>
  });
};

type PropType = {
  onNext: (data:any) => void
};

export const PersonalsForm = (props: PropType) => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.onNext(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        {allPrexisOptions()}
      </Select>
    </Form.Item>
  );

  return (
    <Card title="Insert personal informations" style={{ width: 800 }}>
      <Form
        {...formItemLayout}
        form={form}
        name="personal"
        onFinish={onFinish}
        initialValues={{ nationality: 'AL', prefix: '+355' }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >

        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, type: "string", message: 'Please input your Name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="surname"
          label="Surname"
          rules={[{ required: true, type: "string", message: 'Please input your Surname!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, type: "regexp", message: 'Please input your Phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>


        <Form.Item
          name="dateOfBirth"
          label="Date of birth"
          rules={[{ required: true, type: "date", message: 'Please input your Date of birth!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="nationality"
          label="Nationality"
          rules={[{ required: true, message: 'Please select your Nationality!' }]}
        >
          <Select placeholder="Select your nationality">
            {allCountriesOptions()}
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout} >
          <Space wrap>
            <Button type="default" htmlType="submit" disabled={!submittable}>
              Next
            </Button>
          </Space>
        </Form.Item>

      </Form>
    </Card >
  );
};
