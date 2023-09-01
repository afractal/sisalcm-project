
import React from 'react';
import { Button, Card, Space } from 'antd';

type PropType = {
  onClose: () => void
};

export const ConfirmationPage = (props: PropType) => {
  return (
    <Card title="Registration Complete" style={{ width: 800 }}>
      <Space wrap direction='vertical'>
        <div style={{ display: 'inline-flex' }}>
          Your registration has completed!
        </div>

        <Button type="primary" htmlType="button" onClick={() => props.onClose()}>
          Close
        </Button>
      </Space>
    </Card>
  );
};
