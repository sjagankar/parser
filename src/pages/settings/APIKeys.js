import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Input,
  message,
  Space,
  Table,
  Modal,
  Select,
  Row,
  Col
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { fetchData } from "@/utils/hooks";
import { createApiKey, fetchApiKeys } from "@/services/apis";
import { run } from "umi";

const APIKeys = () => {
  const [copiedKey, setCopiedKey] = useState("");
  const [revokeKey, setRevokeKey] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newKey, setNewKey] = useState("");
  const [keyName, setKeyName] = useState("");
  const [expiration, setExpiration] = useState("Never");
  const [showCopyModal, setShowCopyModal] = useState(false);

  const {
    data: apiKeys,
    loading,
    runAsync: runFetchApiKeys,
  } = fetchData(fetchApiKeys, true, []);
  const {
    data: newKeyData,
    loading: loading2,
    runAsync: runCreateApiKey,
  } = fetchData(createApiKey, true, []);

  useEffect(() => {
    runFetchApiKeys();
  }, []);

  const handleGenerateKey = () => {
    setShowModal(true);
  };

  const handleModalOk = () => {
    generateApiKey();
    runFetchApiKeys();
    message.success("API key generated successfully!");
    setShowModal(false);
    setShowCopyModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const calculateExpirationDate = (days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + parseInt(days));
    return expirationDate.toISOString();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "API Key",
      dataIndex: "value",
      key: "value",
      render: (apiKey) => {
        const sanitizedKey =
          apiKey.substring(0, 5) +
          "*".repeat(apiKey.length - 5).substring(0, 35);
        return <span>{sanitizedKey}</span>;
      },
    },
    {
      title: "Created",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Expires",
      dataIndex: "expiry_date",
      key: "expiry_date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button
            type="primary"
            danger
            onClick={() => revokeApiKey(record.apiKey)}
            disabled={record.apiKey === revokeKey}
          >
            Revoke
          </Button>
        </Space>
      ),
    },
  ];

  const copyApiKey = (apiKey) => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(apiKey);
    message.success("API key copied to clipboard!");
  };

  const revokeApiKey = (apiKey) => {
    // remove the key from the list
    setApiKeys(apiKeys.filter((key) => key.apiKey !== apiKey));
  };

  const generateApiKey = () => {
    runCreateApiKey({
      name: keyName,
    }).then((data) => {
      setNewKey(data);
      return data;
    });
  };

  return (
    <Card title="API Keys">
      <Modal
        open={showModal}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        title="Enter a name for the API key"
        okText="Generate API Key"
        destroyOnClose
      >
        <div>
          <Input
            placeholder="API Key Name"
            onChange={(e) => setKeyName(e.target.value)}
          />
          <br />
          {/* <br />
          <span>Select expiration:</span>
          &nbsp;
          <Select
            defaultValue="Never"
            onChange={(value) => setExpiration(calculateExpirationDate(value))}
          >
            <Select.Option value="Never">Never</Select.Option>
            <Select.Option value="7">7 days</Select.Option>
            <Select.Option value="30">30 days</Select.Option>
            <Select.Option value="90">90 days</Select.Option>
          </Select> */}
        </div>
      </Modal>

      <Modal
        title="New API Key"
        open={showCopyModal}
        okText="Done"
        okButtonProps={{ style: { display: "none" } }}
        onOk={() => setShowCopyModal(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        destroyOnClose
        onCancel={() => setShowCopyModal(false)}
      >
        <Row type='flex' justify='space-between' gutter={12}>
          <Col span={20}>
          <Input value={newKey} />
          </Col>
          <Col span={4}>
          <Button compact type="primary" onClick={() => copyApiKey(newKey)}>
            Copy
          </Button>
          </Col>
        </Row>
      </Modal>

      <Space direction="vertical" style={{ width: "100%" }}>
        <Table
          dataSource={apiKeys}
          columns={columns}
          pagination={false}
          style={{ overflowY: "scroll" }}
        />

        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleGenerateKey}
            loading={loading2}
          >
            Generate API Key
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

export default APIKeys;
