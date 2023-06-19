import React from 'react';
import { CommonType } from '../types/common';
import { BaseInputProps } from '@sheinx/hooks';

export interface InputClasses {
  /**
   * 最外层class
   */
  wrapper: string;
  /**
   * 当 input focus 时最外层class
   */
  wrapperFocus: string;
  /**
   * 当 input 禁用时最外层class
   */
  wrapperDisabled: string;
  /**
   * 当 status 为 error 时
   */
  wrapperError: string;
  input: string;
  clear: string;
  clearWrapper: string;
  wrapperLarge: string;
  wrapperSmall: string;
  wrapperUnderline: string;
  wrapperNoBorder: string;
  wrapperInGroup: string;
  paddingBox: string;
}

export interface InputBaseProps
  extends BaseInputProps,
    Pick<CommonType, 'status' | 'style' | 'className' | 'size'> {
  jssStyle: InputClasses;
  clearIcon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  getStatus?: (status: { focused?: boolean }) => void;
  underline?: boolean;
  /**
   * @default: true
   */
  border?: boolean;
  /**
   * @default: false
   */
  inGroup?: boolean;
  onEnterPress?: (value: string, e: React.KeyboardEvent) => void;
  showClear?: boolean;
  renderInput?: (inputEl: React.ReactElement) => React.ReactElement;
}

export type InputProps = InputBaseProps;