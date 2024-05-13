## 3.1.7
2024-05-11

### 🐞 BugFix

- 修复 `TreeSelect` 属性 `childrenKey` 没有生效的问题 ([#432](https://github.com/sheinsight/shineout-next/pull/432))

## 3.1.6
2024-05-11

### 🐞 BugFix

- 修复 `TreeSelect` 本地筛选的时候防抖没有生效导致频繁渲染的问题 ([#428](https://github.com/sheinsight/shineout-next/pull/428))

## 3.1.0
2024-05-09

### 🆕 Feature
- `TreeSelect` 属性 `loader` 支持返回 Promise 来关闭加载状态 ([#417](https://github.com/sheinsight/shineout-next/pull/417))

### 🐞 BugFix

- 修复 `TreeSelect` 初次渲染时 `compressed` 没有生效的问题 ([#411](https://github.com/sheinsight/shineout-next/pull/411))

## 3.0.11
2024-05-08

### 🐞 BugFix

- 修复 `TreeSelect` 在多选模式下，进行过滤后选择新项会导致原有选择项被覆盖的问题 ([#411](https://github.com/sheinsight/shineout-next/pull/411))
- 修复 `TreeSelect` 组件在渲染未匹配数据时可能出现的数据重复和无法删除的问题 ([#412](https://github.com/sheinsight/shineout-next/pull/412))



## 3.0.9
2024-04-26

### 🐞 BugFix

- 修复 `TreeSelect` 合并选项功能当数据动态变化或者宽度变化时没有动态更新的问题 ([#402](https://github.com/sheinsight/shineout-next/pull/402))

## 3.0.8
2024-04-26

### 🐞 BugFix

- 修复 `TreeSelect` noCache 属性无效的问题 ([#398](https://github.com/sheinsight/shineout-next/pull/398))
- 修复 `TreeSelect` 首次渲染 `compressed` 属性无效的问题 ([#399](https://github.com/sheinsight/shineout-next/pull/399))

## 3.0.5
2024-04-24

### 🐞 BugFix

- 修复 `TreeSelect` 当清空输入框文本时会展示上次筛选内容的问题 ([#391](https://github.com/sheinsight/shineout-next/pull/391))

## 3.0.3
2024-04-22

### 🐞 BugFix

- 修复 `TreeSelect` 在多选场景下点击下拉输入框无法自动聚焦的问题 ([#380](https://github.com/sheinsight/shineout-next/pull/380))
- 修复 `TreeSelect` 在失去焦点时筛选文本清空存在延迟的问题 ([#380](https://github.com/sheinsight/shineout-next/pull/380))
- 修复 `TreeSelect` 当 `renderItem` 返回 ReactElement 时，输入框可能会展示 `[object Object]` 的问题 ([#379](https://github.com/sheinsight/shineout-next/pull/379))