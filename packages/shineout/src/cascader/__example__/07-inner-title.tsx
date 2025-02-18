/**
 /**
 * cn - 内嵌标题
 *    -- 使用 innerTitle 展示内嵌标题
 * en - inner title
 *    -- use innerTitle to display the inner title
 */
import React from 'react';
import { Cascader, Gap } from 'shineout';

interface DataItem {
  value: string;
  children?: DataItem[];
}

const data: DataItem[] = [
  {
    value: 'jiangsu',
    children: [
      {
        value: 'nanjing',
        children: [
          {
            value: 'jiangning',
          },
        ],
      },
    ],
  },
  {
    value: 'anhui',
    children: [
      {
        value: 'hefei',
        children: [
          {
            value: 'feidong',
          },
        ],
      },
    ],
  },
];

export default () => {
  return (
    <Gap style={{ flexDirection: 'column', gap: 24 }}>
      <Cascader
        innerTitle='Inner Title'
        width={300}
        placeholder='Please select city'
        clearable
        data={data}
        keygen='value'
        renderItem={(n) => `${n?.value}`}
        size="small"
      />
      <Cascader
        innerTitle='Inner Title'
        width={300}
        placeholder='Please select city'
        clearable
        data={data}
        keygen='value'
        renderItem={(n) => `${n?.value}`}
      />
      <Cascader
        innerTitle='Inner Title'
        width={300}
        placeholder='Please select city'
        clearable
        data={data}
        keygen='value'
        renderItem={(n) => `${n?.value}`}
        size="large"
      />
    </Gap>
  );
};
