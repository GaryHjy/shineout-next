import { useRef } from 'react';
import classNames from 'classnames';
// import { util } from '@sheinx/hooks';
import { KeygenResult } from '@sheinx/hooks';
import TreeNode from './tree-node';
import { TreeClasses } from './tree.type';
import { TreeListProps } from './tree-list.type';

const List = <DataItem, Value extends KeygenResult>(props: TreeListProps<DataItem, Value>) => {
  const hasExpanded = useRef(false);

  const {
    jssStyle,
    className,
    data,
    mode,
    id = '',
    keygen,
    expanded,
    expandedProp,
    active,
    line,
    isControlled,
    style,
    onChange,
    renderItem,
    iconClass,
    leafClass,
    nodeClass,
    contentClass,
    expandIcons,
    childrenKey,
    inlineNode,
    highlight,
    loader,
    onNodeClick,
    onToggle,
    onDrop,
    onDragEnd,
    onDragLeave,
    onDragOver,
    onDragStart,
    bindNode,
    dragImageSelector,
    dragSibling,
    dragHoverExpand,
    dragImageStyle,
    childrenClass,
    childrenClassName,
    parentClickExpand,
    doubleClickExpand,
  } = props;
  const listClass = jssStyle?.tree() || ({} as TreeClasses);
  const rootClass = classNames(className || listClass.children, childrenClassName);

  const getKey = (data: DataItem, index: number) => {
    if (typeof keygen === 'function') return keygen(data, id as string);
    if (keygen) return data[keygen];
    return id + (id ? ',' : '') + index;
  };

  const empty = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const renderNode = (node: DataItem, index: number) => {
    const id = getKey(node, index) as Value;

    return (
      <TreeNode<DataItem, Value>
        jssStyle={jssStyle}
        id={id}
        isControlled={isControlled}
        data={node}
        mode={mode}
        index={index}
        key={id}
        line={line}
        keygen={keygen}
        listComponent={List}
        active={active}
        childrenClass={childrenClass}
        childrenKey={childrenKey}
        renderItem={renderItem}
        iconClass={iconClass}
        leafClass={leafClass}
        nodeClass={nodeClass}
        contentClass={contentClass}
        expandIcons={expandIcons}
        bindNode={bindNode}
        loader={loader}
        inlineNode={inlineNode}
        highlight={highlight}
        dragImageSelector={dragImageSelector}
        dragImageStyle={dragImageStyle}
        dragSibling={dragSibling}
        dragHoverExpand={dragHoverExpand}
        parentClickExpand={parentClickExpand}
        doubleClickExpand={doubleClickExpand}
        expanded={expandedProp!}
        onNodeClick={onNodeClick}
        onToggle={onToggle}
        onChange={onChange}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragLeave={onDragLeave}
      ></TreeNode>
    );
  };

  if (!expanded && !hasExpanded.current) return null;
  hasExpanded.current = true;

  const newStyle = Object.assign({}, style, { display: expanded ? 'block' : 'none' });

  return (
    <div onDrop={empty} onDragOver={empty} style={newStyle} className={rootClass}>
      {data.map(renderNode)}
    </div>
  );
};

export default List;
