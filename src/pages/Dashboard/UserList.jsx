import React from "react";
import { List, useTable, EditButton, DeleteButton } from "@refinedev/antd";

import { Table, Space } from "antd";

export default function UserList() {
  const { tableProps } = useTable();
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="firstName" title="First Name" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column dataIndex="skills" title="Skills" />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_text, record) => {
            return (
              <Space>
                <EditButton size="small" recordItemId={record.id} hideText />
                <DeleteButton size="small" recordItemId={record.id} hideText />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
}
