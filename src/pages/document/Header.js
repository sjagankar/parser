import React from 'react';
import { Breadcrumb } from 'antd';
import {useNavigate} from 'umi';

const  Header = () => {
    
    const navigate = useNavigate();


    return(
  <Breadcrumb
    routes={[
      {
        path: '/documents',
        breadcrumbName: 'Documents',
        onClick: () => navigate('/documents', { replace: true }),
      },
      {
        path: '/documents/:id',
        breadcrumbName: 'John_Doe_resume.pdf',
        children: [
          {
            path: '/resume_ui.pdf',
            breadcrumbName: 'John_Doe_resume.pdf',
          },
          {
            path: '/resume_ui2.pdf',
            breadcrumbName: 'John_Doe_resume.pdf',
          },
        ],
      },
    ]}
  />
)};

export default Header;