import React from 'react';
import { Button, Card, Form, Input, Space } from 'antd';

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

type PropType = {
  onNext: (data: any) => void
  onPrev: () => void
};

export const CredentialsForm = (props: PropType) => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        console.log(true)
        setSubmittable(true);
      },
      () => {
        console.log(false)
        setSubmittable(false);
      },
    );
  }, [values]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.onNext(values);
  };

  return (
    <Card title="Insert access credentials" style={{ width: 800 }}>
      <Form
        form={form}
        name="credentials"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{}}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
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

        <Form.Item {...tailFormItemLayout}>
          <Space wrap>
            <Button type="text" htmlType="button" onClick={() => props.onPrev()}>
              Back
            </Button>
            <Button type="default" htmlType="submit" disabled={!submittable}>
              Next
            </Button>
          </Space>
        </Form.Item>

      </Form>
    </Card>
  );
};
