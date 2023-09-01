import React, { useState } from 'react';
import { message, Progress, Space, Steps, theme } from 'antd';
import { PersonalsForm } from './personal-page';
import { KeyValuePair, SummaryPage } from './summary-page';
import { CredentialsForm } from './credential-page';
import { ConfirmationPage } from './confirmation-page';
import { signUp } from './signup-service';



export const PageComposer = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(25);
  const [personals, setPersonals] = useState<KeyValuePair[]>([]);
  const [credentials, setCredentials] = useState<KeyValuePair[]>([]);

  const next = () => {
    setCurrent(current + 1);
    setProgress(p => p + 25);
  };

  const prev = () => {
    setCurrent(current - 1);
    setProgress(p => p - 25);
  };

  const steps = [
    {
      title: 'Personal Data',
      content: <PersonalsForm
        onNext={(data) => {
          const payload = Object.entries(data).map(([k, v]) => ({ label: k, value: String(v) }));
          setPersonals(payload as KeyValuePair[]);
          next();
        }}></PersonalsForm>,
    },
    {
      title: 'Email and password',
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
        onComplete={() => {
          message.loading(' ...');
          signUp({ personals, credentials }).then(() => {
            message.success('Registration complete!')
            next();
          }, () => {
            message.error('Error occured!')
          });
        }}
        onPrev={() => prev()}></SummaryPage>,
    },
    {
      title: 'Confirmation',
      content: <ConfirmationPage
        onClose={() => {
          message.loading('Closing Registration ...');
          setTimeout(() => window.location.reload(), (4000));
        }}></ConfirmationPage>,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: -14,
  };

  return (
    <Space direction="vertical" size={18} style={{ marginTop: "4em" }}>
      <Steps current={current} items={items} />
      <Progress percent={progress} status="active" showInfo={false} />
      <div style={contentStyle}>{steps[current].content}</div>
    </Space>
  );
};

