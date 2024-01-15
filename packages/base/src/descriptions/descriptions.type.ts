import React from 'react';
import type { CommonType } from '../common/type';
import type { BaseDescriptionsProps } from '@sheinx/hooks';

export interface DescriptionsClasses {
  /**
   * 最外层class
   */
  wrapper: string;
  header: string;
  title: string;
  extra: string;
  body: string;
  table: string;
  row: string;
  label: string;
  value: string;
  border: string;
  tableLayoutFixed: string;
  item: string;
  labelInline: string;
  valueInline: string;
  inlineHorizontal: string;
  horizontal: string;
  inlineTable: string;
  small: string;
  large: string;
}

export interface DescriptionsProps
  extends Pick<CommonType, 'className' | 'style' | 'size'>,
    BaseDescriptionsProps {
  jssStyle?: {
    descriptions: () => DescriptionsClasses;
  };
  border?: boolean;
  extra?: React.ReactNode;
  title?: React.ReactNode;
  layout?: 'horizontal' | 'vertical' | 'inlineHorizontal' | 'inlineVertical';
  colon?: React.ReactNode;
  tableLayout?: 'auto' | 'fixed';
}