import { KeygenResult, UnMatchedData } from '@sheinx/hooks';
import { SelectProps } from './select.type';

export type ResultType<Value> = UnMatchedData | Value;

export interface ResultProps<DataItem, Value>
  extends Pick<
    SelectProps<DataItem, Value>,
    | 'jssStyle'
    | 'size'
    | 'multiple'
    | 'placeholder'
    | 'keygen'
    | 'value'
    | 'compressed'
    | 'compressedBound'
    | 'compressedClassName'
    | 'disabled'
    | 'resultClassName'
    | 'renderUnmatched'
    | 'focusSelected'
    | 'maxLength'
    | 'trim'
    | 'separator'
  > {
  data: DataItem[];
  focus: boolean;
  childrenKey?: keyof DataItem & string;
  renderResult: (
    data: DataItem,
    index?: number,
    nodes?: (DataItem | UnMatchedData)[],
  ) => React.ReactNode;
  inputText?: string;
  filterText?: string;
  onRef: React.MutableRefObject<HTMLInputElement | undefined>;
  allowOnFilter: boolean;
  closeable?: boolean;
  renderItem: (data: DataItem, index?: number) => React.ReactNode;
  setInputText: (text: string) => void;
  onCreate?: (text: string) => string | DataItem | undefined;
  onFilter?: (text: string) => void;
  onInputBlur?: (text?: string) => void;
  onResetFilter: () => void;
  // crud
  onClearCreatedData?: () => void;
  getDataByValues: (values: Value) => (DataItem | UnMatchedData)[];
  checkUnMatched: (item: DataItem | UnMatchedData) => boolean;
  onRemove?: (item: DataItem | UnMatchedData, key?: KeygenResult, index?: number) => void;
}
