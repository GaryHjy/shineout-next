import { CommonType } from '../common/type';
import { BaseTreeProps, ObjectKey, KeygenResult, TreePathType } from '@sheinx/hooks';
import { SpinClasses } from '../spin/spin.type';
import { CheckboxClasses } from '../checkbox/checkbox.type';

export interface TreeClasses {
  tree: string;
  root: string;
  line: string;
  noline: string;
  content: string;
  childnode: string;
  checkbox: string;
  contentWrapper: string;
  inlineContent: string;
  text: string;
  list: string;
  iconWrapper: string;
  icon: string;
  node: string;
  children: string;
  leaf: string;
  placement: string;
}
export type TreeRenderItemType<DataItem> =
  | ((item: DataItem, expanded: boolean, active: boolean, id: KeygenResult) => React.ReactNode)
  | ObjectKey<DataItem>;

export type JsstyleType = {
  tree: () => TreeClasses;
  spin: () => SpinClasses;
  checkbox: () => CheckboxClasses;
};

export interface TreeProps<DataItem>
  extends BaseTreeProps<DataItem>,
    Pick<CommonType, 'className' | 'style'> {
  jssStyle: JsstyleType;
  line?: boolean;
  iconClass?: string;
  nodeClass?: string | ((data: DataItem) => string);
  leafClass?: string;
  expandIcons?: (React.ReactNode | ((d: DataItem) => React.ReactNode))[];
  childrenClass?: ((data: DataItem) => string) | string;
  onDrop?: (data: DataItem[], key: KeygenResult, targetKey: KeygenResult, position: number) => void;
  active?: KeygenResult;
  doubleClickExpand?: boolean;
  parentClickExpand?: boolean;
  dragImageSelector?: ((data?: DataItem) => string) | string;
  onExpand?: (value: KeygenResult[]) => void;
  renderItem: TreeRenderItemType<DataItem>;
  onChange?: (value: KeygenResult[]) => void;
  dragImageStyle?: React.CSSProperties;
  dragSibling?: boolean;
  dragHoverExpand?: boolean;
  inlineNode?: boolean;
  highlight?: boolean;
  loader?: (key: KeygenResult, data: DataItem) => void;
  onClick?: (data: DataItem, id: KeygenResult, path?: TreePathType) => void;
  onDragStart?: (e: React.DragEvent, data: DataItem) => void;
  onDragEnd?: (e: React.DragEvent, data: DataItem) => void;
  onDragOver?: (e: React.DragEvent, data: DataItem) => void;
  onDragLeave?: (e: React.DragEvent, data: DataItem) => void;
}