---
title: GinzaModal 弹窗
nav:
  title: 组件
  path: /components
group:
  title: 组件
  order: 2
---

# GinzaModal 弹窗

基于 antd 5.x 封装的弹窗组件。

## 基础用法

```tsx
import React, { useState } from 'react';
import { GinzaModal } from '@ginza/modal';
import { Button } from 'antd';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开弹窗
      </Button>
      <GinzaModal
        open={open}
        title="基础弹窗"
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <p>这是弹窗内容</p>
      </GinzaModal>
    </>
  );
};
```

## 关闭前确认

```tsx
import React, { useState } from 'react';
import { GinzaModal } from '@ginza/modal';
import { Button, message } from 'antd';

export default () => {
  const [open, setOpen] = useState(false);

  const handleBeforeClose = async () => {
    // 模拟异步操作
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        message.info('确认关闭');
        resolve(true);
      }, 1000);
    });
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开弹窗（关闭前确认）
      </Button>
      <GinzaModal
        open={open}
        title="关闭前确认"
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        onBeforeClose={handleBeforeClose}
      >
        <p>关闭时会触发确认</p>
      </GinzaModal>
    </>
  );
};
```

## 隐藏关闭按钮

```tsx
import React, { useState } from 'react';
import { GinzaModal } from '@ginza/modal';
import { Button } from 'antd';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开弹窗（无关闭按钮）
      </Button>
      <GinzaModal
        open={open}
        title="无关闭按钮"
        showCloseIcon={false}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <p>右上角没有关闭按钮</p>
      </GinzaModal>
    </>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否显示弹窗 | `boolean` | `false` |
| showCloseIcon | 是否显示右上角关闭按钮 | `boolean` | `true` |
| onBeforeClose | 关闭前的回调，返回 false 可阻止关闭 | `() => boolean \| Promise<boolean>` | - |

其他属性继承自 antd Modal 组件。
