# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个 pnpm monorepo 项目，用于开发 "Ginza" —— 基于 Ant Design 5.x 的 React 组件库。项目使用 dumi 作为文档工具，father 作为构建工具。

## 常用命令

```bash
# 安装依赖
pnpm install

# 开发 - 启动文档开发服务器
pnpm start        # 或: pnpm dev

# 构建所有子包
pnpm build:packages

# 仅构建根包
pnpm build

# 监听模式构建
pnpm build:watch

# 构建并预览文档
pnpm docs:build
pnpm docs:preview

# 代码检查
pnpm lint         # 运行 ESLint 和 Stylelint
pnpm lint:es      # 仅 ESLint
pnpm lint:css     # 仅 Stylelint

# 发布 QA 预发布版本
pnpm release:qa

# 发布正式版本
pnpm release:ol
```

## 架构

### Monorepo 结构

- **包管理器**: pnpm + workspaces
- **Monorepo 工具**: Lerna（独立版本模式）
- **构建工具**: father（umi 生态）
- **文档工具**: dumi

### 包目录结构

```
packages/
├── ginza-button/     # @coder-cloud/ginza-button - 按钮组件
├── ginza-modal/      # @coder-cloud/ginza-modal - 弹窗组件
└── ginza-all/        # 聚合包，重新导出所有组件
```

### 依赖版本目录

共享依赖版本定义在 `pnpm-workspace.yaml` 的 catalog 中：
- React ^18.0.0
- React DOM ^18.0.0
- Ant Design ^5.22.0

在 package.json 中使用 `catalog:` 引用这些版本。

### 组件开发模式

组件继承 Ant Design 基础组件并扩展额外属性：

```tsx
// 示例: GinzaButton 扩展 AntdButton
export interface GinzaButtonProps extends AntdButtonProps {
  showLoading?: boolean;   // 是否显示加载图标
  prefixText?: string;     // 按钮前缀文本
  suffixText?: string;     // 按钮后缀文本
}
```

### 构建配置

- 根目录 `.fatherrc.ts`: ESM 输出到 `dist/`
- 子包 `.fatherrc.ts`: 同时输出 ESM 和 CJS

### 文档配置

dumi 配置扫描以下组件目录：
- `packages/ginza-button/src`
- `packages/ginza-modal/src`

在 markdown 文件中编写组件示例，或在组件文件中使用 JSDoc 示例。
