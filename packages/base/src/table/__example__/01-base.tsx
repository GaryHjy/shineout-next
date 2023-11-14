/**
 * cn - 基本用法
 *    --
 * en - Basic
 *    --
 */
import React from 'react';
import { Table, RadioGroup } from '@sheinx/base';
import { useTableStyle, useRadioStyle } from '@sheinx/shineout-style';

const jssStyle = {
  table: useTableStyle,
  radio: useRadioStyle,
};

// mock 1000 rows 学生数据
const data = Array(100)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Edward King ${i}`,
    age: Math.floor(Math.random() * 100),
    address: `London, Park Lane no. ${i}`,
    sex: i % 2 === 0 ? 'man' : 'femail',
  }));

const columns = [
  {
    title: 'ID2',
    render: 'id',
    width: 20,
    fixed: 'left',
    sorter: (order: 'asc' | 'desc') => (a: any, b: any) =>
      order === 'asc' ? a.id - b.id : b.id - a.id,
    defaultOrder: 'asc',
  },
  {
    title: 'age',
    render: 'age',
    width: 20,
    fixed: 'left',
    sorter: 'age',
  },
  {
    title: 'Name',
    render: 'name',
    width: 80,
    fixed: 'left',
    sorter: 'name',
  },
  {
    title: 'Age',
    render: 'age',
    width: 100,
    group: ['group1', 'group2'],
  },
  {
    title: 'Address',
    render: 'address',
    width: 100,
  },
  {
    title: 'Sex',
    render: 'sex',
    width: 50,
    fixed: 'right',
  },
];

type DataItem = typeof data[0];
const sorters = {
  id: (order: 'asc' | 'desc') => (a: DataItem, b: DataItem) =>
    order === 'asc' ? a.id - b.id : b.id - a.id,
  name: (order: 'asc' | 'desc') => (a: DataItem, b: DataItem) =>
    order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  age: (order: 'asc' | 'desc') => (a: DataItem, b: DataItem) =>
    order === 'asc' ? a.age - b.age : b.age - a.age,
};

export default () => {
  const [bordered, setBordered] = React.useState(1);
  return (
    <div>
      <div>
        <span>bordered:</span>
        <RadioGroup
          jssStyle={jssStyle}
          data={[0, 1]}
          value={bordered}
          onChange={(d) => setBordered(d)}
          keygen
          renderItem={(d) => (!!d ? 'true' : 'false')}
        />
      </div>
      <Table
        bordered={!!bordered}
        sorter={(key: string, order: 'asc' | 'desc', list: any) => {
          console.log(key, order, list);
          const orderFunc = sorters[key as unknown as keyof typeof sorters];
          return orderFunc(order);
        }}
        width={1200}
        keygen='id'
        jssStyle={jssStyle}
        data={data}
        columns={columns}
      />
    </div>
  );
};
