/**
 * cn - 渲染未匹配值
 *    -- 通过`renderUnmatched`属性可以渲染未匹配的值
 * en - renderUnmatched
 *    -- The unmatched value can be rendered through the `renderUnmatched` property.
 */
import React from 'react';
import { Select } from 'shineout';

export default () => {
  const data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet', 'pink'];

  const renderUnmatched = (v: string) => {
    return `I am ${v} color`;
  };

  return (
    <div>
      <Select
        width={300}
        defaultValue='redddd'
        renderUnmatched={renderUnmatched}
        data={data}
        keygen
        placeholder='Select Color'
        renderItem={(d) => d}
      />
    </div>
  );
};
