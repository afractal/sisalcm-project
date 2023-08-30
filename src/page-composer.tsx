import React, { useState } from 'react';
import { Button, message, Space, Steps, theme } from 'antd';
import { PersonalsForm } from './personal-page';
import { SummaryPage } from './summary-page';
import { CredentialsForm } from './credential-page';

const steps = [
  {
    title: 'Personal Info',
    content: <PersonalsForm></PersonalsForm>,
  },
  {
    title: 'Credentials',
    content: <CredentialsForm></CredentialsForm>,
  },
  {
    title: 'Summary',
    content: <SummaryPage></SummaryPage>,
  },
];

export const PageComposer: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <Space direction="vertical" size={16}>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
      {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>
    </Space>
  );
};

