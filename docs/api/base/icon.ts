const api = JSON.parse('[{"title":"Icon","subTitle":"function(url, fontFamily, prefix):ReactClass","properties":[{"name":"url","tag":{"cn":"图标css或js文件地址，使用在线地址，不需要引入到项目中。如果在 link或script 中已经引用过，可以为空字符串","en":"The address of css or js file of the icon. If it has been introduced in the link/script tag, it can be empty.","default":"","version":""},"required":true,"type":"string"},{"name":"fontFamily","tag":{"cn":"font-family 需要和引入的css/js文件内的font-family一致","en":"The font-family needs to be the same as the font-family in the introduced CSS/JS file","default":"\\\"iconfont\\\"","version":""},"required":false,"type":"string "},{"name":"prefix","tag":{"cn":"类名前缀","en":"The prefix of the class","default":"\\\"icon\\\"","version":""},"required":false,"type":"string "}],"cn":"函数，返回一个新的组件，一个项目内可以创建多个，但是 fontFamily 不能相同","en":"Function, returns a new component. A project can create more than one, but fontFamily must be the unique.","sort":"0"},{"title":"MyIcon","properties":[{"name":"jssStyle","tag":{"cn":"","en":"","default":"","version":""},"required":false,"type":"{ icon: () => {  wrapper: string, small: string, large: string, primary: string, success: string, secondary: string, info: string, warning: string, danger: string, svg: string }; } "},{"name":"children","tag":{"cn":"图标 unicode 编码，和 name 二选一","en":"The unicode code of the icon.","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"name","tag":{"cn":"图标类名（去除前缀的部分），值参照具体使用的图标库","en":"Icon class name (the part without the prefix)","default":"\\\"\\\"","version":""},"required":false,"type":"string "},{"name":"fontSize","tag":{"cn":"图标大小，和 style.fontSize 相同","en":"Icon size, same as style.fontsize","default":"","version":""},"required":false,"type":"string | number "},{"name":"type","tag":{"cn":"内置颜色类型","en":"Built-in color type","default":"\\\"default\\\"","version":""},"required":false,"type":"\\\"default\\\" | \\\"primary\\\" | \\\"secondary\\\" | \\\"success\\\" | \\\"info\\\" | \\\"warning\\\" | \\\"danger\\\" "},{"name":"prefix","tag":{"cn":"","en":"","default":"","version":""},"required":false,"type":"string "},{"name":"fontFamily","tag":{"cn":"","en":"","default":"","version":""},"required":false,"type":"string "},{"name":"ext","tag":{"cn":"","en":"","default":"","version":""},"required":false,"type":"string "},{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "}],"cn":"Icon函数创建的图标组件","en":"Component created by the Icon function","sort":"0"}]');
export default api;
