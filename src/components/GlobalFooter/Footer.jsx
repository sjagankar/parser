import React from 'react';
import CopyRight from '@/components/CopyRight';
import styles from './index.less';
import { Typography } from 'antd';
const {Link} = Typography;

const GlobalFooter = () => {
  const links = [];

  return (
    <footer className={styles.globalFooter}>
      {links && (
        <div className={styles.links}>
          {links.map(link => (
            <Link
              key={link.key}
              title={link.key}
              target={link.blankTarget ? '_blank' : '_self'}
              href={link.href} rel="noreferrer"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
      <div className={styles.copyright}><CopyRight/></div>
    </footer>
  );
};

export default GlobalFooter;
