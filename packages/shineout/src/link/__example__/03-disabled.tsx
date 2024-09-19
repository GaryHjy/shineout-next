/**
* cn - 禁用状态
*    -- 设置 `disabled` 属性可以禁用链接。
* en - Disabled
*    -- Set the disabled property to disable the link.
 */
import React from 'react';
import { Gap, Link } from 'shineout';

export default () => {
  return (
    <Gap column={36}>
      <Link href="#" type="primary" disabled>Link</Link>
      <Link href="#" type="secondary" disabled>Link</Link>
      <Link href="#" type="danger" disabled>Link</Link>
      <Link href="#" type="warning" disabled>Link</Link>
      <Link href="#" type="success" disabled>Link</Link>
    </Gap>
  );
};