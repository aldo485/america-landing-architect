import React from 'react';
import { Button } from './button';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface MobileButtonProps extends React.ComponentProps<typeof Button> {
  hapticFeedback?: boolean;
  touchTarget?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const MobileButton: React.FC<MobileButtonProps> = ({
  hapticFeedback = true,
  touchTarget = 'medium',
  className,
  onClick,
  children,
  ...props
}) => {
  const { isTouch } = useIsMobile();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Add haptic feedback for touch devices
    if (hapticFeedback && isTouch && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }

    // Add visual feedback for touch devices
    if (isTouch) {
      const target = e.currentTarget;
      target.style.transform = 'scale(0.98)';
      setTimeout(() => {
        target.style.transform = 'scale(1)';
      }, 100);
    }

    onClick?.(e);
  };

  const touchTargetClasses = {
    small: 'min-h-[44px] min-w-[44px]',
    medium: 'min-h-[48px] min-w-[48px] px-4 py-3',
    large: 'min-h-[56px] min-w-[56px] px-6 py-4 text-lg'
  };

  return (
    <Button
      {...props}
      className={cn(
        'transition-all duration-150 ease-out',
        isTouch && touchTargetClasses[touchTarget],
        isTouch && 'active:scale-95',
        className
      )}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}; 