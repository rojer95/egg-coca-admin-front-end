/**
 * title: 编辑管理账号
 * authority:
 *  - user
 */
import React from 'react';
import { Editor } from '@/component/Pager';
import RoleSelect from '@/component/RoleSelect';
import { useModel } from 'umi';
import model from './model';

export default () => {
  const { refresh } = useModel('@@initialState');

  const forms: ICocaForm[] = [
    {
      name: 'account',
      type: 'string',
      label: '账号',
      required: true,
      props: (data: any) => {
        if (data.id) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },

    {
      name: 'password',
      type: 'string',
      label: '密码',
      rules: [
        (form: any) => ({
          required: !form.getFieldValue('id'),
        }),
      ],
      extra: '创建时必填。修改时填则修改密码；不填则不会修改密码',
    },
    {
      name: 'roles',
      type: 'component',
      component: <RoleSelect />,
      label: '分配角色',
    },
    {
      name: 'type',
      type: 'radio',
      label: '类型',
      options: [
        { label: '超级管理员', value: 'super' },
        { label: '管理员', value: 'admin' },
        { label: '普通员工', value: 'normal' },
      ],
      required: true,
    },
  ];

  const hook = {
    after: refresh, // 刷新权限
  };

  return (
    <Editor
      model="user"
      query={model.query}
      name="管理员账号"
      links={['Roles']}
      forms={forms}
      initialValues={model.initialValues}
      hook={hook}
    />
  );
};
