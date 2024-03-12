/**
 * cn - 不同尺寸
 *    -- 通过设置 size 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中
 * en - Size
 *    -- Set size to `large` or `small` to change the size of button
 */
import React, { useState } from 'react';
import { List, Radio, TYPE } from 'shineout';

interface ListItem {
  id: number;
  time: string;
  start: string;
  height: number;
  salary: number;
  office: string;
  country: string;
  office5: string;
  position: string;
  lastName: string;
  firstName: string;
}
type ListProps = TYPE.List.Props<ListItem, ListItem>;
type ListData = ListProps['data'];
type ListRenderItem = ListProps['renderItem'];

const data: ListData = [
  {
    id: 1,
    firstName: 'Ephraim',
    lastName: 'Wisozk',
    position: 'Marketing Designer',
    start: '2012-01-29',
    time: '01:42',
    salary: 115777,
    country: 'Reunion',
    office: 'Miami',
    office5: 'Istanbul',
    height: 113.74,
  },
  {
    id: 2,
    firstName: 'Osvaldo',
    lastName: 'Beer',
    position: 'Financial Controller',
    start: '2007-09-04',
    time: '03:26',
    salary: 396093,
    country: 'Syrian Arab Republic',
    office: 'San Paulo',
    office5: 'Shenzhen',
    height: 82.13,
  },
  {
    id: 3,
    firstName: 'Dylan',
    lastName: 'Ratke',
    position: 'Development Lead',
    start: '2009-10-16',
    time: '01:45',
    salary: 236064,
    country: 'Peru',
    office: 'Boston',
    office5: 'Delhi',
    height: 179.53,
  },
  {
    id: 4,
    firstName: 'Shaniya',
    lastName: 'Jacobs',
    position: 'Developer',
    start: '2014-06-30',
    time: '02:17',
    salary: 338985,
    country: 'Peru',
    office: 'Chengdu',
    office5: 'Dallas-Fort Worth',
    height: 190.11,
  },
];

const renderItem: ListRenderItem = (rowData) => (
  <div>{`Name: ${rowData.firstName}-${rowData.lastName}`}</div>
);

const sizeList = ['small', 'default', 'large'];
const App: React.FC = () => {
  const [size, setSize] = useState('default');

  return (
    <>
      <Radio.Group
        style={{ marginBottom: 24 }}
        keygen
        data={sizeList}
        value={size}
        onChange={setSize}
      />
      <List keygen='id' bordered data={data} renderItem={renderItem} size={size} />
    </>
  );
};

export default App;