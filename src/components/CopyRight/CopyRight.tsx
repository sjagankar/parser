import React, { Fragment } from 'react';
import { Typography } from 'antd';
const { Link, Paragraph } = Typography;

export default function CopyRight() {
  return (
    <Fragment>
      <Paragraph type='secondary'>
        Powered by{' '}
        <Link
          href="https://cvviz.com"
          target="_blank"
          rel="noreferrer"
        >
          CVViZ
        </Link>
        <Link
          type='secondary'
          href="https://cvviz.com"
          target="_blank"
          rel="noreferrer"
        >
          , Modern Applicant Tracking System
        </Link>
        !
      </Paragraph>
    </Fragment>
  );
}
