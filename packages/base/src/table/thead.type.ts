import { TableProps } from './table.type';
import { useTableSort, useTableLayout } from '@sheinx/hooks';
import type { TableFormatColumn } from '@sheinx/hooks';

export type UseTableLayoutResultFunc = ReturnType<typeof useTableLayout>['func'];

export interface TheadProps
  extends Pick<TableProps<any, any>, 'data' | 'jssStyle' | 'onColumnResize' | 'columnResizable'>,
    Pick<ReturnType<typeof useTableSort<any>>, 'sortInfo' | 'onSorterChange'>,
    Pick<UseTableLayoutResultFunc, 'dragCol' | 'resizeCol'> {
  columns: TableFormatColumn<any>[];
  isScrollY?: boolean;
  bordered?: boolean;
  colgroup: (number | undefined)[];
}
