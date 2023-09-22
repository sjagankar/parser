import React from 'react';
import { Descriptions } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons';

const PersonalInfo = ({ personal_information }) => {
  const items = [];
  if (personal_information.first_name || personal_information.last_name) {
    items.push({
      key: '0',
      label: 'Name',
      icon: <UserOutlined />,
      children: `${personal_information.first_name} ${personal_information.last_name}`,
    });
  }

  if (personal_information.email) {
    items.push({
      key: '1',
      label: 'Email',
      icon: <MailOutlined />,
      children: <a href={`mailto:${personal_information.email}`}>{personal_information.email}</a>,
    });
  }

  if (personal_information.phone) {
    items.push({
      key: '2',
      label: 'Phone',
      icon: <PhoneOutlined />,
      children: personal_information.phone,
    });
  }

  if (personal_information.address) {
    items.push({
      key: '3',
      label: 'Address',
      icon: <EnvironmentOutlined />,
      children: personal_information.address,
    });
  }

  if (personal_information.city) {
    items.push({
      key: '4',
      label: 'City',
      icon: <EnvironmentOutlined />,
      children: personal_information.city,
    });
  }

  if (personal_information.zipcode) {
    items.push({
      key: '5',
      label: 'Zipcode',
      icon: <EnvironmentOutlined />,
      children: personal_information.zipcode,
    });
  }

  if (personal_information.github) {
    items.push({
      key: '6',
      label: 'Github',
      icon: <GithubOutlined />,
      children: <a href={personal_information.github} target="_blank" rel="noopener noreferrer">{personal_information.github}</a>,
    });
  }

  if (personal_information.linkedin) {
    items.push({
      key: '7',
      label: 'LinkedIn',
      icon: <LinkedinOutlined />,
      children: <a href={personal_information.linkedin} target="_blank" rel="noopener noreferrer">{personal_information.linkedin}</a>,
    });
  }

  if (personal_information.medium) {
    items.push({
      key: '8',
      label: 'Medium',
      icon: <MediumOutlined />,
      children: <a href={personal_information.medium} target="_blank" rel="noopener noreferrer">{personal_information.medium}</a>,
    });
  }

  return (
    <Descriptions title={``} column={1}>
      {items.map(item => (
        <Descriptions.Item key={item.key} label={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{item.icon} {item.label}</span>}>
          {item.children}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default PersonalInfo;
