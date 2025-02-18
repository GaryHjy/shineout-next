import { useRef } from 'react';
import classNames from 'classnames';
import { KeygenResult, util, useRender } from '@sheinx/hooks';
import { TreeClasses } from './tree.type';
import { TreeVirtualContextProps } from './tree-content.type';
import Checkbox from './tree-checkbox';
import { useTreeContext } from './tree-context';
import Icons from '../icons';
import Spin from '../spin';
import { useConfig } from '../config';

const NodeVirtualContent = <DataItem, Value extends KeygenResult[]>(
  props: TreeVirtualContextProps<DataItem, Value>,
) => {
  const {
    jssStyle,
    id,
    level,
    active,
    data,
    line,
    iconClass,
    contentClass: contentClassProp,
    expandIcons,
    renderItem,
    expanded,
    fetching,
    inlineNode,
    childrenKey,
    parentClickExpand,
    doubleClickExpand,
    bindContent,
    highlight,
    setFetching,
    loader,
    onChange,
    onToggle,
    onNodeClick,
  } = props;
  const forceUpdate = useRender();
  const { isDisabled, bindUpdate } = useTreeContext();
  const clickLock = useRef(false);
  const config = useConfig();
  const disabled = isDisabled(id);

  bindUpdate(id, forceUpdate);

  const contentStyle = jssStyle?.tree() || ({} as TreeClasses);
  const rootClass = classNames(contentStyle.contentWrapper, {
    [contentStyle.childnode]: data[childrenKey] && (data[childrenKey] as DataItem[]).length > 0,
    [contentStyle.inlineContent]: inlineNode,
    [contentStyle.contentDisabled]: disabled,
  });
  const contentClass = classNames(
    contentStyle.content,
    util.isString(contentClassProp) && contentClassProp,
    util.isFunc(contentClassProp) && contentClassProp(data),
  );
  // const textClass = classNames(contentStyle.text, disabled ? contentStyle.textDisabled : '');
  const textClass = classNames(contentStyle.text);
  const hasExpandIcons = expandIcons !== undefined;
  const children = data[childrenKey] as DataItem[];
  const hasChildren = children && children.length > 0;

  const contentDataProps = () => {
    const dataProps: {
      'data-active'?: boolean;
      'data-disabled'?: boolean;
    } = {};
    if (highlight) {
      dataProps['data-active'] = active;
    }
    // if (disabled) {
    //   dataProps['data-disabled'] = disabled;
    // }
    return dataProps;
  };

  const handleIndicatorClick = () => {
    onToggle?.(id);

    if (data[childrenKey] !== undefined) return;

    if (loader) {
      setFetching(true);
      const result = loader(id, data) as any;
      if (util.isPromise(result)) {
        result.then(() => {
          setFetching(false);
        });
      }
    }
  };

  const handleNodeClick = () => {
    if (parentClickExpand && hasChildren) {
      if (clickLock.current) {
        clickLock.current = false;
        return;
      }
      handleIndicatorClick();
    } else {
      onNodeClick(data, id);
    }
  };

  const handleClick = () => {
    clickLock.current = true;
  };

  const handleNodeExpand = () => {
    if (!doubleClickExpand) return;
    if (hasChildren) handleIndicatorClick();
  };
  const renderLoading = () => {
    return (
      <span
        style={{ left: (level - 1) * 24 }}
        className={contentStyle.iconWrapper}
        data-expanded={expanded}
        data-icon={hasExpandIcons}
        dir={config.direction}
      >
        <Spin size={12} jssStyle={jssStyle} ignoreConfig name='ring'></Spin>
      </span>
    );
  };

  const renderIndicator = () => {
    const children = data[childrenKey] as DataItem[];

    const icon = expandIcons
      ? expandIcons[expanded ? 1 : 0]
      : expanded
      ? Icons.tree.LineExpand
      : Icons.tree.LineCollapse;

    let indicator: React.ReactNode;

    if (line) {
      indicator = (
        <span
          className={contentStyle.iconWrapper}
          data-expanded={expanded}
          data-icon={hasExpandIcons}
          dir={config.direction}
        >
          <span
            className={classNames(contentStyle.icon, iconClass)}
            onClick={handleIndicatorClick}
            dir={config.direction}
          >
            {util.isFunc(icon) ? icon(data) : icon}
          </span>
        </span>
      );
    } else {
      indicator = (
        <span
          style={{ left: (level - 1) * 24 }}
          className={contentStyle.iconWrapper}
          data-expanded={expanded}
          data-icon={hasExpandIcons}
          dir={config.direction}
        >
          <span
            className={classNames(contentStyle.icon, iconClass)}
            onClick={handleIndicatorClick}
            dir={config.direction}
          >
            {util.isFunc(icon) ? icon(data) : hasExpandIcons ? icon : Icons.tree.Expand}
          </span>
        </span>
      );
    }
    if (children && children.length > 0) return indicator;
    if (Array.isArray(children) || children === null) return null;
    if (fetching && !children) return renderLoading();
    if (loader && children === undefined) return indicator;

    return null;
  };

  const renderCheckbox = () => {
    return (
      <Checkbox
        jssStyle={jssStyle}
        id={id}
        disabled={disabled}
        className={contentStyle.checkbox}
        onChange={onChange}
        onClick={handleClick}
      ></Checkbox>
    );
  };

  const renderNode = () => {
    const render = util.isFunc(renderItem) ? renderItem : (item: DataItem) => item[renderItem];
    return render(data, expanded, active, id) as React.ReactNode;
  };

  const contentEvent = {
    onClick: inlineNode ? undefined : handleNodeClick,
  };

  const textEvent = {
    onClick: inlineNode ? handleNodeClick : undefined,
  };

  return (
    <div className={rootClass} dir={config.direction}>
      {renderIndicator()}
      <div
        dir={config.direction}
        data-expanded={expanded}
        ref={bindContent}
        className={contentClass}
        {...contentDataProps()}
        {...contentEvent}
      >
        {onChange && renderCheckbox()}
        <div
          dir={config.direction}
          className={textClass}
          onDoubleClick={handleNodeExpand}
          {...textEvent}
        >
          {renderNode()}
        </div>
      </div>
    </div>
  );
};

export default NodeVirtualContent;
