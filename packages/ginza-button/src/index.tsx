import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';
import 'antd/dist/antd.css';

export interface GinzaButtonProps extends AntdButtonProps {
  /** 是否显示加载中的图标 */
  showLoading?: boolean;
  /** 按钮前缀文本 */
  prefixText?: string;
}

/**
 * GinzaButton - 基于 antd 4.x 封装的按钮组件
 *
 * @example
 * ```tsx
 * <GinzaButton type="primary" prefixText="点击">提交</GinzaButton>
 * ```
 */
export const GinzaButton: React.FC<GinzaButtonProps> = ({
  children,
  showLoading = false,
  prefixText,
  loading,
  ...restProps
}) => {
  const isLoading = showLoading || loading;

  return (
    <AntdButton loading={isLoading} {...restProps}>
      {prefixText && <span style={{ marginRight: 4 }}>{prefixText}</span>}
      {children}
    </AntdButton>
  );
};

export default GinzaButton;
