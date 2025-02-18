import { KeygenResult, TreeKeygenType, ObjectKey } from '../../common/type';
import { DisabledOption } from '../use-tree';
import { TreeModeType } from '../use-tree/use-tree.type';

export interface BaseCascaderProps<DataItem, Value extends KeygenResult[]> {
  value?: Value;
  defaultValue?: Value;
  data: DataItem[];
  control: boolean;
  unmatch: boolean;
  childrenKey?: ObjectKey<DataItem>;
  onChange?: (value: Value, selected?: DataItem) => void;
  beforeChange?: (value: Value) => any;
  mode?: TreeModeType;
  keygen: TreeKeygenType<DataItem>;
  disabled?: DisabledOption<DataItem> | boolean | ((item: DataItem) => boolean);
  filterSameChange?: boolean;
}
