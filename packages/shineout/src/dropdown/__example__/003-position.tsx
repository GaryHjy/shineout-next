/**
 * cn - 弹出位置
 *    -- 设置 position 属性可以控制下拉菜单弹出的方向和位置
 * en - Position
 *    -- Set position property can control the direction and position of the drop-down menu.
 */
import React from 'react';
import { Dropdown, TYPE } from 'shineout';

type DropdownItem = TYPE.Dropdown.Item;

const style = { marginInlineEnd: 12, marginBottom: 12 };

const menu: DropdownItem[] = [
  {
    content: 'First',
    children: [
      {
        content: 'link1',
      },
      {
        content: 'link2',
      },
    ],
  },
  {
    content: 'Second',
    url: 'http://www.google.com',
    children: [
      {
        content: 'link3',
        onClick: () => {
          console.log('this is special');
        },
      },
      {
        content: 'link4',
        children: [
          {
            content: 'link5',
          },
          {
            content: 'link6',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
    <div>
      <Dropdown placeholder='Right Top' style={style} position='right-top' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Bottom Left' style={style} position='bottom-left' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Bottom' style={style} position='bottom' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Bottom Right' style={style} position='bottom-right' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Left Top' style={style} position='left-top' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Right' style={style} position='right' data={menu} />
    </div>
    <div style={{ gridColumn: 'span 3' }}></div>
    <div>
      <Dropdown placeholder='Left' style={style} position='left' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Right Bottom' style={style} position='right-bottom' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Top Left' style={style} position='top-left' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Top' style={style} position='top' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Top Right' style={style} position='top-right' data={menu} />
    </div>
    <div>
      <Dropdown placeholder='Left Bottom' style={style} position='left-bottom' data={menu} />
    </div>

    <div>
      <Dropdown placeholder='Auto Position' style={style} position='auto' data={menu} />
    </div>
  </div>
);

export default App;
