import React, { useRef, useState, useEffect } from 'react';
import { KeygenResult, usePersistFn } from '@sheinx/hooks';
import { SelectClasses } from '@sheinx/shineout-style';
import { BaseListProps } from './select.type';
import { VirtualScrollList } from '../virtual-scroll';
import ListOption from './list-option';
import { VirtualListType } from '../virtual-scroll/virtual-scroll-list.type';

const List = <DataItem, Value>(props: BaseListProps<DataItem, Value>) => {
  const {
    jssStyle,
    data,
    height,
    size,
    optionWidth,
    header,
    keygen,
    datum,
    multiple,
    // groupKey,
    itemsInView = 10,
    lineHeight: lineHeightProp,
    loading,
    controlType,
    hideCreateOption,
    optionListRef,
    renderItem: renderItemProp = (d) => d as React.ReactNode,
    closePop,
    onControlTypeChange,
  } = props;

  const style = {
    width: optionWidth,
    height,
  };
  const styles = jssStyle?.select?.() as SelectClasses;
  const [hoverIndex, setHoverIndex] = useState(hideCreateOption ? -1 : 0);
  const virtualRef = useRef<VirtualListType>({
    scrollByStep: undefined,
  });

  const getLineHeight = () => {
    if (lineHeightProp) return lineHeightProp;
    if (size === 'small') return 26;
    if (size === 'default') return 34;
    if (size === 'large') return 42;
    return 34;
  };

  const handleHover = usePersistFn((index: number, force?: boolean) => {
    if ((controlType === 'mouse' || force) && hoverIndex !== index) {
      setHoverIndex(index);
    }
  });

  const handleHoverByStep = usePersistFn((step: number) => {
    const next = hoverIndex + step;
    handleHover(next, true);
  });

  const handleMove = usePersistFn((step: number) => {
    virtualRef.current?.scrollByStep(step);
  });

  const lineHeight = getLineHeight();

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
          closePop={closePop}
          jssStyle={jssStyle}
          index={index}
          data={item}
          isHover={hoverIndex === index}
          multiple={multiple}
          onHover={handleHover}
          renderItem={renderItemProp}
        ></ListOption>
      </React.Fragment>
    );
  };

  // const renderGroupTitle = (d) => {
  //   const title = d[groupKey];
  //   return (
  //     <div className={styles.optionGroupTitle} title={title}>
  //       {title}
  //     </div>
  //   );
  // };

  const renderList = () => {
    if (loading) return renderLoading();

    return (
      <VirtualScrollList
        virtualRef={virtualRef}
        data={data}
        keygen={keygen}
        tag={'ul'}
        tagClassName={styles.virtualList}
        height={height}
        lineHeight={lineHeight}
        rowsInView={itemsInView}
        renderItem={renderItem}
        onControlTypeChange={onControlTypeChange}
      ></VirtualScrollList>
    );
  };

  useEffect(() => {
    if (optionListRef) {
      optionListRef.current = {
        hoverMove: handleMove,
        hoverHover: handleHoverByStep,
      };
    }
  }, []);

  return (
    <div className={styles.list} style={style}>
      {header && renderHeader()}
      {renderList()}
    </div>
  );
};

export default List;
