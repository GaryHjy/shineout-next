/**
 * cn - 树形数据
 *    --
 * en - Tree Data
 *    --
 */
import React from 'react';
import { Select } from 'shineout';

type DataItem = {
  id: string;
  title: string;
  children?: DataItem[];
};

export default () => {
  const treeData: DataItem[] = [
    {
      id: '1',
      title: 'node 1',
      children: [
        {
          id: '1-1',
          title: 'node 1-1',
          children: [
            { id: '1-1-1', title: 'node 1-1-1' },
            { id: '1-1-2', title: 'node 1-1-2' },
          ],
        },
        { id: '1-2', title: 'node 1-2' },
      ],
    },
    {
      id: '2',
      title: 'node 2',
    },
    { id: '3', title: 'node 3', children: [{ id: '3-1', title: 'node 3-1' }] },
    { id: '4', title: 'node 4' },
  ];

  return (
    <div>
      <Select
        width={260}
        multiple
        childrenKey='children'
        treeData={treeData}
        keygen='id'
        format='id'
        placeholder='Select Color'
        prediction={(v, d) => v === d.id}
        renderItem={(d) => d.title}
      />
    </div>
  );
};
