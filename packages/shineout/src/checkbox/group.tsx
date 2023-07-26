import { BaseCheckboxGroupProps, CheckboxGroupProps } from './group.type';
import { CheckboxGroup as UnStyledCheckboxGroup } from '@sheinx/base';
import { useCheckboxStyle, useInputStyle } from '@sheinx/shineout-style';
import useFieldCommon from '../hooks/use-field-common';
import { useMemo } from 'react';

const BaseCheckboxGroup = <DataItem, Value extends any[]>(
  props: BaseCheckboxGroupProps<DataItem, Value>,
) => {
  const checkboxStyle = useCheckboxStyle();
  const inputStyle = useInputStyle();
  const jssStyle = useMemo(
    () => ({ checkbox: checkboxStyle, input: inputStyle }),
    [checkboxStyle, inputStyle],
  );

  return <UnStyledCheckboxGroup {...props} jssStyle={jssStyle} />;
};

const CheckboxGroupWithField = <DataItem, Value extends any[]>(
  props: CheckboxGroupProps<DataItem, Value>,
) => {
  return useFieldCommon<
    BaseCheckboxGroupProps<DataItem, Value>,
    BaseCheckboxGroupProps<DataItem, Value>['value']
  >(props, BaseCheckboxGroup);
};

export default CheckboxGroupWithField;
