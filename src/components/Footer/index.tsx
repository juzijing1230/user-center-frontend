import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright="Powered by bobo"
      links={[
        {
          key: 'bobo',
          title: 'bobo',
          href: 'https://gitee.com/chen0226',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/juzijing1230',
          blankTarget: true,
        },
        {
          key: 'gitee',
          title: 'gitee',
          href: 'https://gitee.com/chen0226',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
