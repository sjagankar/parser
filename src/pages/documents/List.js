import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Dropdown,
  Menu,
  Space,
  Spin,
  Skeleton,
} from "antd";
import {
  EyeOutlined,
  FileTextOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  LoadingOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import {useNavigate} from 'umi';

// const data = [
//     {
//       key: "1",
//       name: "John_Doe_resume.pdf",
//       email : "john_doe@gmail.com",
//       phone : "1234567890",
//       position: "Software Engineer",
//       experience: "5 years",
//       resume: "https://example.com/resume1.pdf",
//     },
//     {
//       key: "2",
//       name: "Jane_Smith_resume.docx",
//       email : "jane_smith@gmail.com",
//       phone : "1234567890",
//       position: "Frontend Developer",
//       experience: "3 years",
//       resume: "https://example.com/resume2.pdf",
//     },
//   // Add more data as needed
// ];

const List = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);
  const navigate = useNavigate();

  const showModal = (record) => {
    setSelectedResume(record.resume);
    setVisible(true);
  };

  const handleCancel = () => {
    setSelectedResume(null);
    setVisible(false);
  };

  const handleViewResume = (record) => {
    window.open(record.resume, "_blank");
  };

  const handleArchive = (record) => {
    // TODO: Implement archive logic
  };

  const actionsMenu = (record) => (
    <Menu>
      <Menu.Item key="1" onClick={() => handleViewResume(record)}>
        <EyeOutlined />
        View Resume
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleArchive(record)}>
        <FileTextOutlined />
        Archive
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "File Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          {!record?.is_complete && <Spin indicator={<LoadingOutlined />} />}
          {record?.is_complete && <CheckOutlined style={{ color: "green" }} />}
          <Button type="link" onClick={ () => navigate('/documents/123', { replace: true })}>
            {text}
            <EllipsisOutlined />
          </Button>
        </Space>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => (
        <Space>
          {!record?.is_complete && (
            <Skeleton.Input active={true} size={"small"} />
          )}
          {record?.is_complete && text}
        </Space>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text, record) => (
        <Space>
          {!record?.is_complete && (
            <Skeleton.Input active={true} size={"small"} />
          )}
          {record?.is_complete && text}
        </Space>
      ),
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      render: (text, record) => (
        <Space>
          {!record?.is_complete && (
            <Skeleton.Input active={true} size={"small"} />
          )}
          {record?.is_complete && text}
        </Space>
      ),
    },
    {
      title: "Actions",
      dataIndex: "resume",
      key: "resume",
      render: (text, record) => (
        <Space>
          {record?.is_complete && (
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => showModal(record)}
            >
              Archive
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={data} columns={columns} />

      <Modal open={visible} onCancel={handleCancel} footer={null} width={800}>
        <iframe
          src={selectedResume}
          width="100%"
          height="600px"
          title="Resume"
        />
      </Modal>
    </>
  );
};

export default List;
