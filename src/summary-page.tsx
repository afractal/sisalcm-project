import React from 'react';
import { Card, Descriptions } from 'antd';
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

export const SummaryPage: React.FC = () => {
  return (
    <Card title="Review data"  style={{ width: 800 }}>
      <Descriptions title="Personal Info" items={items} />
      <Descriptions title="Credentials" items={items} />
    </Card>
  );
};

