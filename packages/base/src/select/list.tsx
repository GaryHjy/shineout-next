import React from 'react';
import { KeygenResult } from '@sheinx/hooks';
import { BaseListProps } from './select.type';
import VirtualList from '../virtual-scroll/virtual-list';
import ListOption from './list-option';

const List = <DataItem, Value>(props: BaseListProps<DataItem, Value>) => {
  const {
    jssStyle,
    data,
    height,
    optionWidth,
    header,
    keygen,
    datum,
    itemsInView = 10,
    lineHeight = 32,
    loading,
    renderItem: renderItemProp = (d) => d as React.ReactNode,
  } = props;
  const style = {
    width: optionWidth,
    height,
  };

  const renderLoading = () => {
    return <div>loading</div>;
  };

  const renderHeader = () => {
    return <div>header</div>;
  };

  const renderItem = (item: DataItem, index: number, key: KeygenResult) => {
    return (
      <React.Fragment key={key}>
        <ListOption
          datum={datum}
          jssStyle={jssStyle}
          index={index}
          data={item}
          renderItem={renderItemProp}
        ></ListOption>
      </React.Fragment>
    );
  };

  const renderList = () => {
    if (loading) return renderLoading();

    return (
      <VirtualList
        jssStyle={jssStyle}
        data={data}
        keygen={keygen}
        height={height}
        lineHeight={lineHeight}
        rowsInView={itemsInView}
        renderItem={renderItem}
      ></VirtualList>
    );
  };

  return (
    <div style={style}>
      {header && renderHeader()}
      {renderList()}
    </div>
  );
};

export default List;
