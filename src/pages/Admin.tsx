import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import UserManage from './admin/userManage';
import User from 'mock/user';

const Admin: React.FC = () => {
  return (
    <PageContainer>
      <UserManage />
    </PageContainer>
    
  );
};
export default Admin;
