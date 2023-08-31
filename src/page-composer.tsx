import React, { useState } from 'react';
import { message, Space, Steps, theme } from 'antd';
import { PersonalsForm } from './personal-page';
import { KeyValuePair, SummaryPage } from './summary-page';
import { CredentialsForm } from './credential-page';


export const PageComposer: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [personals, setPersonals] = useState<KeyValuePair[]>([]);
  const [credentials, setCredentials] = useState<KeyValuePair[]>([]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'Personal Info',
      content: <PersonalsForm
        onNext={(data) => {
          const payload = Object.entries(data).map(([k, v]) => ({ label: k, value: String(v) }));
          setPersonals(payload as KeyValuePair[]);
          next();
        }}></PersonalsForm>,
    },
    {
      title: 'Credentials',
      content: <CredentialsForm
        onNext={(data) => {
          const payload = Object.entries(data).map(([k, v]) => ({ label: k, value: v }));
          setCredentials(payload as KeyValuePair[]);
          next();
        }}
        onPrev={() => prev()}></CredentialsForm>,
    },
    {
      title: 'Summary',
      content: <SummaryPage
        personals={personals}
        credentials={credentials}
        onComplete={() => message.success('Processing complete!')}
        onPrev={() => prev()}></SummaryPage>,
    },
  ];

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

      {/* <div style={{ marginTop: 24 }}>
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
      </div> */}
    </Space>
  );
};

