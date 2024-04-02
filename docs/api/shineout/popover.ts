const api = JSON.parse('[{"title":"Popover","properties":[{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"position","tag":{"cn":"弹出层位置。若不设置，则默认为 auto","en":"The position of pop-up layer. Default auto","default":"","version":""},"required":false,"type":"| \\\"left-top\\\"  | \\\"left-bottom\\\"  | \\\"right-top\\\"  | \\\"right-bottom\\\"  | \\\"top-right\\\"  | \\\"top-left\\\"  | \\\"bottom-right\\\"  | \\\"bottom-left\\\"  | \\\"left\\\"  | \\\"right\\\"  | \\\"top\\\"  | \\\"bottom\\\" | \\\"auto\\\" "},{"name":"priorityDirection","tag":{"cn":"弹出位置优先级, 默认为左右优先, 只在未设置 position 时生效","en":"Popup location priority, default is top and bottom priority, only valid when position is not set, Options: [\\\"vertical\\\", \\\"horizontal\\\", \\\"auto\\\"]","default":"\\\"vertical\\\"","version":""},"required":false,"type":"\\\"auto\\\" | \\\"vertical\\\" | \\\"horizontal\\\" "},{"name":"mouseEnterDelay","tag":{"cn":"移入显示延迟(毫秒)","en":"The show delay of mouseenter(ms)","default":"0","version":""},"required":false,"type":"number "},{"name":"mouseLeaveDelay","tag":{"cn":"移除隐藏延迟(毫秒)","en":"The hidden delay of mouseleave (ms)","default":"0","version":""},"required":false,"type":"number "},{"name":"trigger","tag":{"cn":"触发方式","en":"Trigger mode","default":"\\\"hover\\\"","version":""},"required":false,"type":"\\\"click\\\" | \\\"hover\\\" "},{"name":"destroy","tag":{"cn":"关闭 Popover 后销毁内容 dom","en":"Delete dom when close","default":"false","version":""},"required":false,"type":"boolean "},{"name":"visible","tag":{"cn":"是否可见(受控)","en":"Is visible (controlled)","default":"","version":""},"required":false,"type":"boolean "},{"name":"onVisibleChange","tag":{"cn":"The event of visible change","en":"显示隐藏改变时事件","default":"","version":""},"required":false,"type":"((open: boolean) => void) "},{"name":"onOpen","tag":{"cn":"Popover 弹出回调事件","en":"Callback event when open","default":"","version":""},"required":false,"type":"(() => void) "},{"name":"onClose","tag":{"cn":"Popover 关闭时回调事件","en":"Callback event when close","default":"","version":""},"required":false,"type":"(() => void) "},{"name":"children","tag":{"cn":"弹出显示内容，如果内容为函数，则参数是主动关闭操作","en":"Pop-up content","default":"index","version":""},"required":false,"type":"ReactNode | ((close: () => void) => ReactNode)"},{"name":"getPopupContainer","tag":{"cn":"自定义 Popover 容器，覆盖默认渲染在 body 下的行为, () => DOMElement","en":"Custom Popover container, override the default behavior which is rendering under the body, () => DOMElement","default":"","version":""},"required":false,"type":"(() => HTMLElement | null) "},{"name":"useTextStyle","tag":{"cn":"使用内置文本样式","en":"Using inner styles","default":"","version":""},"required":false,"type":"boolean "},{"name":"type","tag":{"cn":"Type of popover","en":"类型","default":"","version":""},"required":false,"type":"\\\"info\\\" | \\\"success\\\" | \\\"warning\\\" | \\\"danger\\\" | \\\"error\\\" "},{"name":"border","tag":{"cn":"弹出层边框颜色（含箭头）","en":"The color of pop-up border(with arrows)","default":"","version":""},"required":false,"type":"string "},{"name":"background","tag":{"cn":"弹出层背景色（含箭头）","en":"Pop-up background-color(with arrows)","default":"","version":""},"required":false,"type":"string "},{"name":"zIndex","tag":{"cn":"Popover 层级","en":"Z-index of popover","default":"1060","version":""},"required":false,"type":"number "},{"name":"showArrow","tag":{"cn":"是否显示箭头","en":"Show arrow","default":"true","version":""},"required":false,"type":"boolean "},{"name":"defaultVisible","tag":{"cn":"默认是否显示","en":"Whether to display by default","default":"","version":""},"required":false,"type":"boolean "},{"name":"clickToCancelDelay","tag":{"cn":"MouseEnterDelay 内点击元素后取消弹出","en":"Cancel the popup after clicking the element in mouseEnterDelay","default":"false","version":""},"required":false,"type":"boolean "},{"name":"scrollDismiss","tag":{"cn":"滚动来关闭气泡框，如果需要指定滚动元素，则通过函数返回","en":"Scroll to dismiss, return el to order scroller","default":"false","version":""},"required":false,"type":"boolean | (() => HTMLElement | null) "}],"cn":"","en":"","sort":"1"},{"title":"Popover.Confirm & Popover.Content","properties":[{"name":"type","tag":{"cn":"类型同 [Alert](/components/Alert) type 属性","en":"same with [Alert](/components/Alert) type","default":"\\\"confirmwarning\\\"","version":""},"required":false,"type":"\\\"success\\\" | \\\"info\\\" | \\\"warning\\\" | \\\"danger\\\" | \\\"confirmwarning\\\" | \\\"error\\\" "},{"name":"children","tag":{"cn":"弹出显示内容","en":"Pop-up content.","default":"","version":""},"required":true,"type":"ReactNode"},{"name":"text","tag":{"cn":"按钮文字","en":"button text","default":"{ ok: \\\"Ok\\\", cancel: \\\"Cancel\\\" }","version":""},"required":false,"type":"{ ok?: string ; cancel?: string ; } "},{"name":"onOk","tag":{"cn":"点击确定按钮时触发事件，返回 Promise 时，会在 Promise resolve 后关闭 Tooltip","en":"ok button click callback, will close tooltip while returned promise resolve","default":"","version":""},"required":false,"type":"(() => void | Promise<any>) "},{"name":"onCancel","tag":{"cn":"点击取消按钮时触发事件，返回 Promise 时，会在 Promise resolve 后关闭 Tooltip","en":"cancel button click callback, will close tooltip while returned promise resolve","default":"","version":""},"required":false,"type":"(() => void | Promise<any>) "},{"name":"okType","tag":{"cn":"确认按钮的类型，与 [Button](/components/Button) 类型相同","en":"ok button\\\"s type, same with [Button](/components/Button) type","default":"\\\"danger\\\"","version":""},"required":false,"type":"| \\\"default\\\"  | \\\"primary\\\"  | \\\"secondary\\\"  | \\\"danger\\\"  | \\\"warning\\\"  | \\\"success\\\"  | \\\"link\\\" "},{"name":"icon","tag":{"cn":"自定义Icon","en":"custom icon","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"title","tag":{"cn":"标题","en":"title","default":"","version":""},"required":false,"type":"ReactNode"}],"cn":"基本API 和 Popover 一致，特定API如下","en":"The basic API is consistent with Popover, and the specific API is as follows","sort":"2"}]');
export default api;
