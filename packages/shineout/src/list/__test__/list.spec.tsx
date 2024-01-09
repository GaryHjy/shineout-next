import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List, TYPE, Button } from 'shineout';
import mountTest from '../../tests/mountTest';
import {
  attributesTest,
  classTest,
  createClassName,
  displayTest,
  styleContentTest,
  styleTest,
  textContentTest,
} from '../../tests/utils';
import { classLengthTest } from '../../tests/structureTest';

const SO_PREFIX = 'list';
const originClasses = [
  'wrapper',
  'scrollContainer',
  'row',
  'item',
  'empty',
  'pagination',
  'checkContent',
];
const originItemClasses = ['wrapperBordered', 'wrapperLarge', 'wrapperSmall', 'wrapperStriped'];
const {
  wrapper,
  scrollContainer,
  row,
  item: itemClassName,
  wrapperBordered,
  wrapperLarge,
  wrapperSmall,
  empty: emptyClassName,
  wrapperStriped,
  pagination,
  // checkContent
} = createClassName(SO_PREFIX, originClasses, originItemClasses);

const defaultStyle = 'width: 100%;';
const defaultLineHeight = 32;

interface ListItem {
  id: number;
  lastName: string;
  firstName: string;
}

type ListProps = TYPE.List.Props<ListItem, ListItem>;
type ListData = ListProps['data'];
type ListRenderItem = ListProps['renderItem'];

const createMoreData = (num: number, begin: number = 1) => {
  const result: ListData = [];
  for (let i = begin; i <= num; i++) {
    result.push({
      id: i,
      firstName: 'test',
      lastName: `${i}`,
    });
  }
  return result;
};

const data: ListData = createMoreData(4);
const virtualData: ListData = createMoreData(30);

const renderItem: ListRenderItem = (rowData) => (
  <div>{`Name: ${rowData.firstName}-${rowData.lastName}`}</div>
);

const RenderList = (props: any) => (
  <List data={data} keygen='id' renderItem={renderItem} {...props} />
);

afterEach(cleanup);
mountTest(<RenderList />);

describe('List[Base]', () => {
  displayTest(List as React.FC<any>, 'ShineoutList');
  test('should render when set className and style', () => {
    const style = { backgroundColor: 'red' };
    const sytleRender = 'background-color: red;';
    const className = 'test';
    const { container } = render(<RenderList style={style} className={className} />);
    const list = container.querySelector(wrapper)!;
    classTest(list, className);
    styleTest(list, sytleRender);
  });
  test('should render default', () => {
    const { container } = render(<RenderList />);
    const list = container.querySelector(wrapper)!;
    const listScrollContainer = list.querySelector(scrollContainer)!;
    const listRow = listScrollContainer.querySelectorAll(row);
    expect(listRow.length).toBe(data.length);
    listRow.forEach((i, index) => {
      const item = i.querySelector(itemClassName)!;
      styleTest(item, defaultStyle);
      textContentTest(item, `Name: ${data[index].firstName}-${data[index].lastName}`);
    });
  });
  test('should render without renderItem', () => {
    const dataWithoutRenderItem = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'];
    const { container } = render(<List data={dataWithoutRenderItem} keygen />);
    const list = container.querySelector(wrapper)!;
    const rows = list.querySelectorAll(row);
    rows.forEach((item, index) => {
      textContentTest(item, dataWithoutRenderItem[index]);
    });
  });
  test('should render when set keygen is true with data item is object', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<RenderList keygen />);
    expect(
      JSON.stringify(errorSpy.mock.calls).indexOf(
        'Error: keygen result expect a string or a number, get',
      ),
    ).toBeTruthy();
  });
  test('should render when set bordered', () => {
    const { container } = render(<RenderList bordered />);
    const list = container.querySelector(wrapper)!;
    classTest(list, wrapperBordered);
  });
  test('should render when set size is large', () => {
    const { container } = render(<RenderList size='large' />);
    const list = container.querySelector(wrapper)!;
    classTest(list, wrapperLarge);
  });
  test('should render when set size is small', () => {
    const { container } = render(<RenderList size='small' />);
    const list = container.querySelector(wrapper)!;
    classTest(list, wrapperSmall);
  });
  test('should render when set height', () => {
    const height = 300;
    const { container } = render(<RenderList height={height} />);
    const list = container.querySelector(wrapper)!;
    styleTest(list, `height: ${height}px;`);
  });
  test('should render when set data is empty', () => {
    const emptyData: ListData = [];
    const { container } = render(<RenderList data={emptyData} />);
    const list = container.querySelector(wrapper)!;
    classLengthTest(list, emptyClassName, 1);
    classLengthTest(list.querySelector(emptyClassName)!, 'svg', 1);
  });
  test('should render when set empty', () => {
    const emptyContainer = 'none';
    const emptyData: ListData = [];
    const { container } = render(<RenderList data={emptyData} empty={emptyContainer} />);
    const listEmpty = container.querySelector(emptyClassName)!;
    textContentTest(listEmpty, emptyContainer);
  });
  test('should render when set striped', () => {
    const { container } = render(<RenderList striped />);
    const list = container.querySelector(wrapper)!;
    classTest(list, wrapperStriped);
  });
  test('should render when set rowClassName is string', () => {
    const rowClassName = 'test';
    const { container } = render(<RenderList rowClassName={rowClassName} />);
    const listRow = container.querySelectorAll(row);
    listRow.forEach((item) => {
      classTest(item.querySelector(itemClassName)!, rowClassName);
    });
  });
  test('should render when set rowClassName is function', () => {
    const rowClassName = (rowData: ListItem) => `test-${rowData.id}`;
    const { container } = render(<RenderList rowClassName={rowClassName} />);
    const listRow = container.querySelectorAll(row);
    listRow.forEach((item, index) => {
      classTest(item.querySelector(itemClassName)!, rowClassName(data[index]));
    });
  });
});
describe('List[Fixed]', () => {
  test('should render when set fixed', () => {
    const scrollTop = 50;
    const { container } = render(<RenderList data={virtualData} fixed />);
    const list = container.querySelector(wrapper)!;
    const listScroll = list.firstElementChild?.firstElementChild as Element;
    const listScrollContainer = listScroll.firstElementChild as Element;
    const listScrollMain = listScrollContainer.firstElementChild as Element;
    const listRow = container.querySelectorAll(row);
    listRow.forEach((item) => {
      styleContentTest(item.querySelector(itemClassName)!, `height: ${defaultLineHeight}px;`);
    });
    attributesTest(listScroll, 'data-soui-type', 'scroll');
    attributesTest(listScrollContainer, 'data-soui-type', 'scroll-container');
    styleTest(listScrollMain, 'transform: translate3d(0, -0px, 0);');
    fireEvent.scroll(listScroll, { target: { scrollTop } });
    styleTest(listScrollMain, `transform: translate3d(0, -${scrollTop - defaultLineHeight}px, 0);`);
  });
  // lineHeight is unUseful without fixed
  test('should render when set lineHeight with fixed', () => {
    const tempLightHeight = 50;
    const { container } = render(
      <RenderList data={virtualData} fixed lineHeight={tempLightHeight} />,
    );
    const listRow = container.querySelectorAll(row);
    listRow.forEach((item) => {
      styleContentTest(item.querySelector(itemClassName)!, `height: ${tempLightHeight}px;`);
    });
  });
});
describe('List[ColNum]', () => {
  test('should render when set colNum without fixed', () => {
    const colNum = 2;
    const { container } = render(<RenderList colNum={colNum} />);
    const list = container.querySelector(wrapper)!;
    const rows = list.querySelectorAll(row);
    expect(rows.length).toBe(Math.ceil(data.length / colNum));
    rows.forEach((item) => {
      const listRow = item.querySelectorAll(itemClassName);
      expect(listRow.length).toBe(colNum);
    });
    const items = list.querySelectorAll(itemClassName);
    items.forEach((i) => {
      styleTest(i, `width: ${100 / colNum}%;`);
    });
  });
  test('should render when set colNum with fixed', () => {
    const colNum = 2;
    const { container } = render(<RenderList data={virtualData} colNum={colNum} fixed />);
    const list = container.querySelector(wrapper)!;
    const listScroll = list.firstElementChild?.firstElementChild as Element;
    const listScrollContainer = listScroll.firstElementChild as Element;
    const listScrollFoot = listScrollContainer.nextElementSibling as Element;
    styleContentTest(
      listScrollFoot,
      `margin-top: ${defaultLineHeight * Math.ceil(virtualData.length / colNum)}px;`,
    );
  });
});
describe('List[DataLoad]', () => {
  test('should load data when click', () => {
    const dataLength = 10;
    const App = () => {
      const [tempData, setTempData] = React.useState(data);
      const renderFooter = () => (
        <div>
          <Button onClick={() => setTempData(createMoreData(dataLength))}>Load More</Button>
        </div>
      );
      return <List keygen='id' data={tempData} renderItem={renderItem} footer={renderFooter} />;
    };
    const { container } = render(<App />);
    const list = container.querySelector(wrapper)!;
    const rows = list.querySelectorAll(row);
    expect(rows.length).toBe(data.length);
    fireEvent.click(container.querySelector('button')!);
    expect(list.querySelectorAll(row).length).toBe(dataLength);
  });
  test('should load data when scroll', () => {
    const dataLength = 10;
    const App = () => {
      const [tempData, setTempData] = React.useState(data);
      return (
        <List
          keygen='id'
          data={tempData}
          renderItem={renderItem}
          scrollLoading={() => setTempData(createMoreData(dataLength))}
        />
      );
    };
    const { container } = render(<App />);
    const list = container.querySelector(wrapper)!;
    const listScrollContainer = list.querySelector(scrollContainer)!;
    const rows = list.querySelectorAll(row);
    expect(rows.length).toBe(data.length);
    fireEvent.scroll(listScrollContainer, { target: { scrollTop: defaultLineHeight * 4 } });
    expect(list.querySelectorAll(row).length).toBe(dataLength);
  });
});
describe('List[Pagination]', () => {
  test('should render when set pagination', () => {
    const pageSize = 4;
    const RenderWithPag = () => {
      const [tempData, setTempData] = React.useState(data);
      const [current, setCurrent] = React.useState<number>(1);
      const pagination = {
        current,
        total: 20,
        pageSize,
        onChange: (i: number) => {
          setCurrent(i);
          setTempData(createMoreData(pageSize * (i - 1) + pageSize, pageSize * (i - 1) + 1));
        },
      };
      return <List keygen='id' data={tempData} renderItem={renderItem} pagination={pagination} />;
    };
    const { container } = render(<RenderWithPag />);
    const listPag = container.querySelector(pagination)!;
    expect(listPag).toBeInTheDocument();
    textContentTest(container.querySelectorAll(row)[0], `Name: test-1`);
    fireEvent.click(listPag.querySelectorAll('button')[2]);
    textContentTest(container.querySelectorAll(row)[0], `Name: test-${pageSize * 1 + 1}`);
  });
});
describe('List[Select]', () => {
  test('should render when set value and select', () => {
    const App = () => {
      const [value, setValue] = React.useState<ListItem[]>([]);
      const handleChange = (v: ListItem[]) => {
        setValue(v);
      };
      return <RenderList value={value} onChange={handleChange} />;
    };
    render(<App />);
    screen.debug();
  });
});
