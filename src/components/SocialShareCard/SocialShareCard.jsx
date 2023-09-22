import React from 'react';
import CardWrapper from '@/components/CardWrapper';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from 'react-share';


import linkedinIcon from '@/assets/linkedin.svg';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { AiFillTwitterCircle } from '@react-icons/all-files/ai/AiFillTwitterCircle';
import { ImMail4 } from '@react-icons/all-files/im/ImMail4';
import { RiWhatsappFill } from '@react-icons/all-files/ri/RiWhatsappFill';

import { Space, Row, Col, Divider, Typography } from 'antd';
const { Paragraph, Text } = Typography;

const SocialShareCard = () => {
  const brand_name = '';
  return <div><Row type='flex' justify='space-around' align='top' className="space-align-block"  >
    <Space align="start">
      <LinkedinShareButton
        style={{ cursor: 'pointer' }}
        url={`${window.location.href}?source=linkedin`}
      >
        <img src={linkedinIcon} style={{ height: 34 }} />
      </LinkedinShareButton>

      <TwitterShareButton
        title={'Apply for job openings at ' + brand_name}
        url={`${window.location.href}?source=twitter`}
        style={{ cursor: 'pointer' }}
      >
        <AiFillTwitterCircle className='anticon' style={{ fontSize: 36, color: '#1677ff' }} />
      </TwitterShareButton>

      <FacebookShareButton
        style={{ cursor: 'pointer' }}
        url={`${window.location.href}?source=facebook`}
      >
        <FaFacebook className='anticon' style={{ fontSize: 32, color: 'blue' }} />
      </FacebookShareButton>
      <WhatsappShareButton
        style={{ cursor: 'pointer' }}
        url={`${window.location.href}?source=whatsapp`}
      >
        <RiWhatsappFill className='anticon' style={{ fontSize: 34, color: '#25D366' }} />
      </WhatsappShareButton>

      <EmailShareButton
        style={{ cursor: 'pointer' }}
        title={'Apply for job openings at ' + brand_name}
        url={`${window.location.href}?medium=email`}
      >
        <ImMail4 className='anticon' style={{ fontSize: 34, color: '#69b1ff' }} />
      </EmailShareButton>
    </Space>


  </Row>
    <Divider style={{ margin: '12px 0' }}><Text type='secondary' style={{ fontSize: 12 }}>OR</Text></Divider>
    <Row type='flex' justify='space-around'>
      <Col span={24}
        style={{
          border: '1px solid #d9d9d9',
          padding: '5px 8px',
          borderRadius: '5px',
          height: '35px'
        }}>
        <Paragraph
          editable={{
            icon: null,
            enterIcon: null,
            triggerType: 'text',
          }}
          ellipsis
          copyable={{
            tooltips: ['click to copy job url', 'Copied!!'],
          }}
        >
          {window.location.href}
        </Paragraph>
      </Col>
    </Row>

  </div>
};

// const SocialShareWrapped = CardWrapper(SocialShareCard, {style:{background:'#fcfdfd'}});
// export default SocialShareWrapped;
export default CardWrapper(SocialShareCard);