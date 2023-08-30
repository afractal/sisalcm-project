import React from 'react';
import { Button, Card, Descriptions, Space } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Name',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Surname',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '3',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '4',
    label: 'Date of birth',
    children: '01/01/2000',
  },
  {
    key: '5',
    label: 'Nationality',
    children: 'China',
  },
];


type PropType = {
  personal: any
  credentials: any
  onComplete: () => void
  onPrev: () => void
};

export const SummaryPage = (props: PropType) => {
  return (
    <Card title="Review data" style={{ width: 800 }}>
      <Descriptions title="Personal Info" items={items} />
      <Descriptions title="Credentials" items={items} />

      <Space wrap>
        <Button type="text" htmlType="button" onClick={() => props.onPrev()}>
          Back
        </Button>
        <Button type="primary" htmlType="submit">
          Complete
        </Button>
      </Space>
    </Card>
  );
};
