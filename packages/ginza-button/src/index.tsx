import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';

export interface GinzaButtonProps extends AntdButtonProps {
  /** 是否显示加载中的图标 */
  showLoading?: boolean;
  /** 按钮前缀文本 */
  prefixText?: string;
  /** 按钮后缀文本 */
  suffixText?: string;
  /** 是否为胶囊形状（圆角） */
  rounded?: boolean;
  /** 文字是否加粗 */
  bold?: boolean;
}

/**
 * GinzaButton - 基于 antd 5.x 封装的按钮组件
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
  suffixText,
  rounded = false,
  bold = false,
  loading,
  style,
  ...restProps
}) => {
  const isLoading = showLoading || loading;
  const combinedStyle = {
    ...(rounded ? { borderRadius: 999 } : {}),
    ...(bold ? { fontWeight: 'bold' } : {}),
    ...style,
  };

  return (
    <AntdButton loading={isLoading} style={combinedStyle} {...restProps}>
      {prefixText && <span style={{ marginRight: 4 }}>{prefixText}</span>}
      {children}
      {suffixText && <span style={{ marginLeft: 4 }}>{suffixText}</span>}
    </AntdButton>
  );
};

export default GinzaButton;
