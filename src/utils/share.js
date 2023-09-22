import React from 'react';
import {Typography, message } from 'antd';
import {
  FacebookFilled,
  LinkedinFilled,
  MailFilled,
  TwitterOutlined,
  CopyTwoTone,
  CheckCircleTwoTone,
  ShareAltOutlined
} from '@ant-design/icons';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from 'react-share';

import { RiWhatsappFill } from '@react-icons/all-files/ri/RiWhatsappFill';

const { Text } = Typography;
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { formatMessage } from '@/utils/locale';

const handleJobLinkCopy = () => {
  message.success('Link copied');
};

export function shareItems(link, title) {
  const shareItems = [
    {
      key: 'linkedin',
      icon: <LinkedinFilled/>,
      label: (
        <LinkedinShareButton url={`${link}?source=linkedin`} title={title}>
          {formatMessage({
            id: 'jobdetails.shareonlinkedin',
            defaultMessage: 'Share on LinkedIn',
          })}
        </LinkedinShareButton>
      ),
    },
    {
      key: 'facebook',
      icon: <FacebookFilled/>,
      label: (
        <FacebookShareButton url={`${link}?source=facebook`} title={title}>
          {formatMessage({
            id: 'jobdetails.shareonfacebook',
            defaultMessage: 'Share on Facebook',
          })}
        </FacebookShareButton>
      ),
    },
    {
      key: 'twitter',
      icon: <TwitterOutlined/>,
      label: (
        <TwitterShareButton url={`${link}?source=twitter`} title={title}>
          {formatMessage({
            id: 'jobdetails.shareontwitter',
            defaultMessage: 'Share on Twitter',
          })}
        </TwitterShareButton>
      ),
    },
    {
      key: 'whatsapp',
      icon: <RiWhatsappFill/>,
      label: (
        <WhatsappShareButton url={`${link}?source=whatsapp`} title={title}>
          {formatMessage({
            id: 'jobdetails.shareonwhatsapp',
            defaultMessage: 'Share on Whatsapp',
          })}
        </WhatsappShareButton>
      ),
    },
    {
      key: 'email',
      icon: <MailFilled/>,
      label: (
        <EmailShareButton url={`${link}?source=email`} title={title}>
          {formatMessage({
            id: 'jobdetails.shareonemail',
            defaultMessage: 'Share on Email',
          })}
        </EmailShareButton>
      ),
    },
    {
       type: 'divider',
    },
    {
      key: 'copy',
      icon: <ShareAltOutlined />,
      label: (
        <CopyToClipboard text={window.location.href}>
        <Text
          onClick={() => handleJobLinkCopy()}
          // eslint-disable-next-line react/jsx-key
          copyable={{ text: `${window.location.href}` , icon:[<CopyTwoTone/>, <CheckCircleTwoTone />]}}
        >
          {formatMessage({
            id:"jobdetails.copyjoblink",
            defaultMessage:"Copy job link"})}
        </Text>
      </CopyToClipboard>
      ),
    },
  ];
  return shareItems;
}
