const api = JSON.parse('[{"title":"Rate","properties":[{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"allowHalf","tag":{"cn":"是否允许半选","en":"Whether to allow semi selection","default":"false","version":""},"required":false,"type":"boolean "},{"name":"clearable","tag":{"cn":"是否允许再次点击后清除","en":"whether to allow clear when click again","default":"false","version":""},"required":false,"type":"boolean "},{"name":"disabled","tag":{"cn":"是否只读","en":"read-only","default":"false","version":""},"required":false,"type":"boolean "},{"name":"max","tag":{"cn":"选项最大值，整数","en":"The maximum value of the option, integer","default":"5","version":""},"required":false,"type":"number "},{"name":"repeat","tag":{"cn":"为 true 时，显示的选项为当前分值对应选项的复制","en":"When repeat is true, display item is a copy of the item corresponding to the current value","default":"true","version":""},"required":false,"type":"boolean "},{"name":"size","tag":{"cn":"图标大小","en":"the size of the icon","default":"20","version":""},"required":false,"type":"string | number "},{"name":"text","tag":{"cn":"附加文字","en":"Text","default":"","version":""},"required":false,"type":"ReactNode[] "},{"name":"value","tag":{"cn":"选中的 key （受控)","en":"Selected key (controlled)","default":"0","version":""},"required":false,"type":"number "},{"name":"defaultValue","tag":{"cn":"默认值  和 value 类型相同","en":"Default value","default":"","version":""},"required":false,"type":"number "},{"name":"onChange","tag":{"cn":"值改变回调","en":"value change callback","default":"","version":""},"required":false,"type":"((value: number) => void) "},{"name":"background","tag":{"cn":"未选中元素背景","en":"Unselected element background","default":"","version":""},"required":false,"type":"ReactElement | string | Array<string | ReactElement>"},{"name":"front","tag":{"cn":"选中元素背景","en":"selected element background","default":"background","version":""},"required":false,"type":"ReactElement | string | Array<string | ReactElement>"},{"name":"name","tag":{"cn":"Form 内存取数据的 key","en":"The key access data in the Form","default":"","version":""},"required":false,"type":"Name "},{"name":"beforeChange","tag":{"cn":"值改变前的回调，当返回值不为空时将作为组件的新值","en":"The callback before the value is changed, when the return value is not empty, it will be used as the new value of the component","default":"","version":""},"required":false,"type":"((value: T) => void | T ) "},{"name":"reserveAble","tag":{"cn":"设置为 true 组件卸载后表单不自动删除数据","en":"If set to true, the form will not automatically delete the data after the component is uninstalled","default":"","version":""},"required":false,"type":"boolean "},{"name":"rules","tag":{"cn":"校验规则 详见 [Rule](/components/rule)","en":"Validation rules, see [Rule](/components/rule) usage for details","default":"","version":""},"required":false,"type":"RuleItem[]"},{"name":"onError","tag":{"cn":"rules 校验回调","en":"rules validation callback","default":"","version":""},"required":false,"type":"((error?: Error ) => void) "},{"name":"bind","tag":{"cn":"当值改变是会联动校验 bind 中的字段, 需要配合 Form 使用","en":"When the value changes, it will link to verify the fields in the bind, which needs to be used with Form","default":"","version":""},"required":false,"type":"string[] "},{"name":"popover","tag":{"cn":"校验信息弹出位置","en":"The position where the validation info pop up","default":"","version":""},"required":false,"type":"PopoverProps[\\\"position\\\"]"},{"name":"tip","tag":{"cn":"提示信息","en":"Prompt information","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"popoverProps","tag":{"cn":"校验或者tip弹框接受的属性","en":"Vilidate popup properties","default":"","version":""},"required":false,"type":"PopoverProps "}],"cn":"","en":"","sort":"0"},{"title":"RateFunction","subTitle":"(background, front): ReactClass","properties":[{"name":"background","tag":{"cn":"未选中元素背景","en":"Unselected element background","default":"","version":""},"required":true,"type":"ReactElement | string | Array<string | ReactElement>"},{"name":"front","tag":{"cn":"选中元素背景","en":"selected element background","default":"","version":""},"required":true,"type":"ReactElement | string | Array<string | ReactElement>"}],"cn":"","en":"","sort":"0"}]');
export default api;