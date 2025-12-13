---
title: GinzaButton 按钮
nav:
  title: 组件
  path: /components
group:
  title: 组件
  order: 1
---

# GinzaButton 按钮

基于 antd 4.x 封装的按钮组件。

## 基础用法

```tsx
import React from 'react';
import { GinzaButton } from '@ginza/button';

export default () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <GinzaButton type="primary">主按钮</GinzaButton>
    <GinzaButton>默认按钮</GinzaButton>
    <GinzaButton type="dashed">虚线按钮</GinzaButton>
    <GinzaButton type="link">链接按钮</GinzaButton>
  </div>
);
```

## 带前缀文本

```tsx
import React from 'react';
import { GinzaButton } from '@ginza/button';

export default () => (
  <GinzaButton type="primary" prefixText="点击">
    提交
  </GinzaButton>
);
```

## 加载状态

```tsx
import React, { useState } from 'react';
import { GinzaButton } from '@ginza/button';

export default () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <GinzaButton type="primary" showLoading={loading} onClick={handleClick}>
      点击加载
    </GinzaButton>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showLoading | 是否显示加载中的图标 | `boolean` | `false` |
| prefixText | 按钮前缀文本 | `string` | - |

其他属性继承自 antd Button 组件。
