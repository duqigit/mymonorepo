import React, { useState, useCallback } from 'react';
import { Modal as AntdModal } from 'antd';
import type { ModalProps as AntdModalProps } from 'antd';

export interface GinzaModalProps extends Omit<AntdModalProps, 'visible'> {
  /** 是否显示弹窗 */
  open?: boolean;
  /** 是否显示右上角关闭按钮 */
  showCloseIcon?: boolean;
  /** 关闭前的回调，返回 false 可阻止关闭 */
  onBeforeClose?: () => boolean | Promise<boolean>;
}

/**
 * GinzaModal - 基于 antd 5.x 封装的弹窗组件
 *
 * @example
 * ```tsx
 * <GinzaModal open={visible} onCancel={() => setVisible(false)} title="标题">
 *   内容
 * </GinzaModal>
 * ```
 */
export const GinzaModal: React.FC<GinzaModalProps> = ({
  children,
  open = false,
  showCloseIcon = true,
  onBeforeClose,
  onCancel,
  ...restProps
}) => {
  const [loading, setLoading] = useState(false);

  const handleCancel = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onBeforeClose) {
        setLoading(true);
        try {
          const canClose = await onBeforeClose();
          if (!canClose) {
            setLoading(false);
            return;
          }
        } catch {
          setLoading(false);
          return;
        }
        setLoading(false);
      }
      onCancel?.(e);
    },
    [onBeforeClose, onCancel],
  );

  return (
    <AntdModal
      open={open}
      closable={showCloseIcon}
      onCancel={handleCancel}
      confirmLoading={loading}
      {...restProps}
    >
      {children}
    </AntdModal>
  );
};

export default GinzaModal;
