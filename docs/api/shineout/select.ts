const api = JSON.parse('[{"title":"Select","properties":[{"name":"value","tag":{"cn":"在 Form 中，value 会被表单接管，value 无效","en":"In the Form, the value will be taken over by the form and the value will be invalid","default":"","version":""},"required":false,"type":"any"},{"name":"defaultValue","tag":{"cn":"默认值 通过 Value 类型","en":"Initial value","default":"","version":""},"required":false,"type":"Value "},{"name":"separator","tag":{"cn":"多选情况下设置后，value 会处理为 separator 分隔的字符串","en":"Set with multiple, value will separator by this","default":"","version":""},"required":false,"type":"string "},{"name":"multiple","tag":{"cn":"是否是多选","en":"If it is true, it will be multiple selection","default":"false","version":""},"required":false,"type":"boolean "},{"name":"disabled","tag":{"cn":"如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项","en":"When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true","default":"false","version":""},"required":false,"type":"boolean | ((data: DataItem) => boolean) "},{"name":"prediction","tag":{"cn":"默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配","en":"By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function needs to be used to determine whether match","default":"(val, d) => val===format(d)","version":""},"required":false,"type":"((value: Value, Data: DataItem) => boolean) "},{"name":"format","tag":{"cn":"格式化 value, 默认值，返回原始数据。 为 string 时，会作为 key 从原始数据中获取值，相当于 (d) => d[format]; 为函数时，以函数返回结果作为 value","en":"Format value. The defaule value is return the original data. When it is a string, the value is fetched from the original data as a key equivalent to (d) => d[format] When it is a function, use its return value","default":"d => d","version":""},"required":false,"type":"((data: DataItem) => Value extends (infer U)[] ? U : Value) | ObjectKey<DataItem> "},{"name":"beforeChange","tag":{"cn":"值改变前的回调，当返回值不为空时将作为组件的新值","en":"The callback before the value is changed, when the return value is not empty, it will be used as the new value of the component","default":"","version":""},"required":false,"type":"((value: Value) => any) "},{"name":"onChange","tag":{"cn":"值改变回调","en":"Change callback","default":"","version":""},"required":false,"type":"((value: Value, data?: DataItem | DataItem[] , checked?: boolean ) => void) "},{"name":"groupBy","tag":{"cn":"分组","en":"Group by","default":"","version":""},"required":false,"type":"((item: DataItem, index?: number , data?: DataItem[] ) => string) "},{"name":"className","tag":{"cn":"自定义类名","en":"Custom class name","default":"","version":""},"required":false,"type":"string "},{"name":"style","tag":{"cn":"自定义样式","en":"Custom style","default":"","version":""},"required":false,"type":"CSSProperties "},{"name":"size","tag":{"cn":"不同尺寸","en":"There are three built-in size: small、default、large.","default":"\\\"default\\\"","version":""},"required":false,"type":"\\\"small\\\" | \\\"large\\\" | \\\"default\\\""},{"name":"status","tag":{"cn":"组件状态","en":"The status of the component","default":"","version":""},"required":false,"type":"\\\"error\\\" "},{"name":"innerTitle","tag":{"cn":"内嵌标题","en":"inner title","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"absolute","tag":{"cn":"为 true 时，选项弹出层在 DOM 中独立 render; 为函数时，返回值作为弹出层容器","en":"When it is true, the pop-up layer of option append into document.body; When it is a function, the return value is used as the popup layer container","default":"false","version":""},"required":false,"type":"boolean | (() => HTMLElement | null) "},{"name":"zIndex","tag":{"cn":"选项列表 z-index 值, 需要配合 absolute","en":"options z-index should use with absolute","default":"1000","version":""},"required":false,"type":"number "},{"name":"keygen","tag":{"cn":"生成 key 的辅助方法, 为函数时，使用此函数返回值, 为 string 时，使用这个 string 对应的数据值。如 \\\"id\\\"，相当于 (d) => d.id","en":"Auxiliary method for generating key. When it is a function, use the return value of this function. When it is a string, use the data value corresponding to this string. For example, \\\"id\\\" is the same thing as (d) => d.id","default":"index","version":""},"required":true,"type":"| ObjectKey<DataItem>  | ((data: DataItem, index?: number) => string | number)  | true"},{"name":"inputable","tag":{"cn":"可输入","en":"Allow enter something into DatePicker","default":"false","version":""},"required":false,"type":"boolean "},{"name":"clearable","tag":{"cn":"是否显示清除数据图标","en":"If clearable is true, show clear value icon","default":"true","version":""},"required":false,"type":"boolean "},{"name":"placeholder","tag":{"cn":"占位文字","en":"Placeholder text","default":"","version":""},"required":false,"type":"string "},{"name":"loading","tag":{"cn":"数据加载中，为true时会展示一个默认的 [Spin](/components/Spin) 组件，可以传入一个自定义的Spin代替","en":"When it is true, a default [Spin](/components/Spin) component will be displayed, a custom loading icon can be passed in to replace.","default":"false","version":""},"required":false,"type":"boolean | ReactNode"},{"name":"header","tag":{"cn":"自定义渲染列表头部内容","en":"Custom render option list header","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"footer","tag":{"cn":"自定义渲染列表底部内容","en":"Custom render option list header","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"renderOptionList","tag":{"cn":"自定义渲染下拉列表","en":"Custom render dropdown","default":"","version":""},"required":false,"type":"((list: ReactNode, info: { loading?: ReactNode; }) => ReactNode) "},{"name":"underline","tag":{"cn":"是否只展示下边框","en":"Only display border bottom","default":"false","version":""},"required":false,"type":"boolean "},{"name":"open","tag":{"cn":"控制浮层显隐","en":"Set visible of datepicker popup","default":"","version":""},"required":false,"type":"boolean "},{"name":"width","tag":{"cn":"选择框的宽度","en":"Custom width","default":"","version":""},"required":false,"type":"string | number "},{"name":"height","tag":{"cn":"下拉列表的高度","en":"Custom width","default":"","version":""},"required":false,"type":"string | number "},{"name":"optionWidth","tag":{"cn":"下拉列表的宽度","en":"Custom width","default":"100%","version":""},"required":false,"type":"string | number "},{"name":"itemsInView","tag":{"cn":"单次 render 的最大行数。Select 采用了lazy render 的方式来优化在大量数据下的性能，如果你的表格显示的高度超出了 10 条，可以调整 itemsInView","en":"The maximum number of rows for a single render. Select uses lazy render to optimize performance under large amounts of data. If your table displays more than 10 rows, you can change the value of itemsInView.","default":"10","version":""},"required":false,"type":"number "},{"name":"lineHeight","tag":{"cn":"选项高度。列表项使用虚拟列表渲染，当选项高度改变时，应该通过 lineHeight 来指定正确高度","en":"Option height. List items are rendered using virtual lists, and when the option height changes, the correct height should be specified via lineHeight","default":"32","version":""},"required":false,"type":"number "},{"name":"position","tag":{"cn":"弹出框位置","en":"Set Position can control the different position of DatePicker","default":"","version":""},"required":false,"type":"\\\"auto\\\" | \\\"bottom-left\\\" | \\\"top-left\\\" "},{"name":"columns","tag":{"cn":"columns 大于 1 时，选项展示为多列布局模式","en":"Option columns.","default":"1","version":""},"required":false,"type":"number "},{"name":"columnsTitle","tag":{"cn":"多列选项多选时的标题文字","en":"Title of columns multiple select","default":"","version":""},"required":false,"type":"ReactNode"},{"name":"noCache","tag":{"cn":"是否开启数据缓存，如果数据存在动态更新的情况建议开启","en":"Data cache, if data change asynchronously, better set true","default":"false","version":""},"required":false,"type":"boolean "},{"name":"showArrow","tag":{"cn":"是否显示下拉箭头，仅针对单选情况","en":"Show dropdown arrow, only single select","default":"true","version":""},"required":false,"type":"boolean "},{"name":"focusSelected","tag":{"cn":"onCreate 或 onFilter 在单选情况下单击值后是否选中值","en":"Selected value while click under onCreate or onFilter","default":"true","version":""},"required":false,"type":"boolean "},{"name":"trim","tag":{"cn":"trim 为 true 时，失去焦点时会自动删除空白字符","en":"When trim is true, blank characters are automatically deleted when lose focus","default":"false","version":""},"required":false,"type":"boolean "},{"name":"columnWidth","tag":{"cn":"columns 大于 1 时，选项展示为多列布局模式","en":"Option column width, only effective when columns > 1","default":"160","version":""},"required":false,"type":"number "},{"name":"maxLength","tag":{"cn":"Select 输入框输入字符串最大长度","en":"The maximum length of the input string in the Select input box","default":"","version":""},"required":false,"type":"number "},{"name":"autoAdapt","tag":{"cn":"下拉列表宽度根据内容自由展开","en":"Option list is auto adapt","default":"false","version":""},"required":false,"type":"boolean "},{"name":"compressed","tag":{"cn":"将选中值合并，只在多选模式下有效; 为 \\\"no-repeat\\\" 时弹出框中不重复展示值","en":"Merges selected values, valid only in multiselect mode；When it is \\\"no-repeat\\\", the value is not repeated in the pop-up box","default":"false","version":""},"required":false,"type":"boolean | \\\"no-repeat\\\" "},{"name":"compressedBound","tag":{"cn":"开启多选后，指定允许展示标签数量，超过后将折叠","en":"When compressed is True,the comptessedBound can limit the numbers of multiple selected item\\\"s label","default":"","version":""},"required":false,"type":"number "},{"name":"compressedClassName","tag":{"cn":"多选合并展示弹出框的类名","en":"Compressed popover classname","default":"","version":""},"required":false,"type":"string "},{"name":"hideCreateOption","tag":{"cn":"在使用创建选项时，在选项列表中隐藏该选项，回车后直接选中","en":"Hide the creat option while set onCreate","default":"false","version":""},"required":false,"type":"boolean "},{"name":"filterSingleSelect","tag":{"cn":"当筛选数据仅为一条时，失焦后直接选中该条数据。仅在 Filter 下有效","en":"Blur to select the data when filter data has only single. only work in filter","default":"false","version":""},"required":false,"type":"boolean "},{"name":"defaultExpanded","tag":{"cn":"默认展开的节点 key（非受控）","en":"default expanded nodes","default":"","version":""},"required":false,"type":"(string | number)[]"},{"name":"defaultExpandAll","tag":{"cn":"默认展开全部子节点, 仅树形数据下有效","en":"Expand all node, only in can be use in treeData","default":"false","version":""},"required":false,"type":"boolean "},{"name":"expanded","tag":{"cn":"展开的节点 key(受控)","en":"Expanded node","default":"","version":""},"required":false,"type":"(string | number)[]"},{"name":"showHitDescendants","tag":{"cn":"筛选后是否展示命中节点的后代节点","en":"Whether to show the descendant nodes of the hit node after filtering","default":"false","version":""},"required":false,"type":"boolean "},{"name":"resultClassName","tag":{"cn":"选中结果内容容器的className","en":"The className of the selected result content container","default":"","version":""},"required":false,"type":"string | ((value: DataItem) => string) "},{"name":"renderItem","tag":{"cn":"为 string 时，返回 d[string]。 为 function 时，返回函数结果","en":"When it is a string, return d[string]. When it is a function, return the result of the function","default":"d => d","version":""},"required":true,"type":"((data: DataItem, index?: number ) => ReactNode) | ObjectKey<DataItem>"},{"name":"renderResult","tag":{"cn":"为 选中后在结果中显示的内容，默认和 renderItem 相同","en":"The content displayed in the result after selecting, if not set, use renderItem","default":"renderItem","version":""},"required":false,"type":"((data: DataItem, index?: number ) => ReactNode) "},{"name":"renderUnmatched","tag":{"cn":"渲染未匹配值的方式","en":"The way to render not matched data value","default":"","version":""},"required":false,"type":"((value: Value extends (infer U)[] ? U : Value) => ReactNode) "},{"name":"onBlur","tag":{"cn":"blur 事件回调","en":"blur event callback","default":"","version":""},"required":false,"type":"((e: any) => void) "},{"name":"onFocus","tag":{"cn":"focus 事件回调","en":"focus event callback","default":"","version":""},"required":false,"type":"((e: any) => void) "},{"name":"onFilter","tag":{"cn":"onFilter 不为空时，可以输入过滤数据。onFilter 如果返回一个函数，使用这个函数做前端过滤。如果不返回，可以自行做后端过滤","en":"When the onFilter is not empty, you can filter data by input. If the onFilter returns a function, use this function as a front-end filter. If return undefined, you can do your own backend filtering","default":"","version":""},"required":false,"type":"((text: string, from?: string ) => void | ((data: DataItem) => boolean) ) "},{"name":"onCreate","tag":{"cn":"如果设置了 onCreate 事件，组件为可输入状态。onCreate 为函数时，将此函数返回值作为新的选项拆入最上方。onCreate 为 true 时，使用默认函数 text => text","en":"If the onCreate event is set, the component is inputable. When onCreate is a function, the return value of this function is diaplay at the top as a new option. When onCreate is true, use the built-in functuon text => text","default":"","version":""},"required":false,"type":"boolean | ((input: string | DataItem) => string | DataItem) "},{"name":"onEnterExpand","tag":{"cn":"回车触发下拉框展开的时候调用","en":"Expand option list while enter press","default":"","version":""},"required":false,"type":"((e: KeyboardEvent<HTMLDivElement>) => boolean) "},{"name":"onCollapse","tag":{"cn":"下拉列表展开/收起回调","en":"Option list collapse callback","default":"","version":""},"required":false,"type":"((collapse: boolean) => void) "},{"name":"onExpand","tag":{"cn":"节点展开回调，参数为当前展开节点 key 数组","en":"Expand event","default":"","version":""},"required":false,"type":"((value: (string | number)[]) => void) "},{"name":"onFilterWidthCreate","tag":{"cn":"新增 api ，开启 onFilter 和 onCreate 时，用于比对是否已经存在相同的数据，默认用输入的值和 keygen 值比对","en":"Added a new API, which is used to compare whether the same data already exists when onFilter and onCreate are turned on. By default, the input value is compared with the keygen value","default":"","version":""},"required":false,"type":"((data: DataItem, createdData: DataItem, key: string | number) => boolean) "}],"cn":"","en":"","sort":"0"}]');
export default api;