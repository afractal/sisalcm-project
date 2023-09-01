import React from 'react';
import { Button, Card, Descriptions, Space } from 'antd';

export type KeyValuePair = { label: string, value: string }

type PropType = {
  personals: KeyValuePair[]
  credentials: KeyValuePair[]
  onComplete: () => void
  onPrev: () => void
};

const mapType = (items: KeyValuePair[]) => {
  return items.map((i, indx) => {
    return { key: indx, label: i.label, children: i.value };
  });
};

export const SummaryPage = (props: PropType) => {
  console.log(props)
  return (
    <Card title="Review data" style={{ width: 800 }}>
      <Descriptions title="Personal Info" items={mapType(props.personals)} />
      <Descriptions title="Credentials" items={mapType(props.credentials)} />

      <Space wrap>
        <Button type="text" htmlType="button" onClick={() => props.onPrev()}>
          Back
        </Button>
        <Button type="primary" htmlType="submit" onClick={() => props.onComplete()}>
          Complete
        </Button>
      </Space>
    </Card>
  );
};
