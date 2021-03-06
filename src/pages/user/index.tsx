import React from 'react';
import Pager from '@/component/Pager';
import model from './model';

export default () => {
  const columns = [
    {
      title: '账号',
      dataIndex: 'account',
    },
    {
      title: '分配角色',
      dataIndex: 'roles',
      render: (text: any) => {
        return (text || []).map((i: any) => i.name).join('、') || '-';
      },
    },
    {
      title: '类型',
      dataIndex: 'type',
      render: (text: 'super' | 'admin' | 'normal') =>
        ({ super: '超级管理员', admin: '管理员', normal: '普通员工' }[text]),
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ];

  return (
    <Pager
      name="账号管理"
      model="user"
      query={model.query}
      filters={model.filters}
      table={{
        columns,
      }}
    ></Pager>
  );
};
