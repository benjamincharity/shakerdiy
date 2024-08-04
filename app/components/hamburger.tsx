import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { clsx } from "clsx";

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultActive?: boolean;
}

export function HamburgerButton({
  defaultActive = false,
  className,
  onClick,
  ...buttonProps
}: HamburgerButtonProps) {
  const [isActive, setIsActive] = useState(defaultActive);

  useEffect(() => {
    setIsActive(defaultActive);
  }, [defaultActive]);

  function internalOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    setIsActive(!isActive);
    onClick?.(e);
  }

  return (
    <button
      className={clsx("hamb scale-75", className, {
        active: isActive,
      })}
      aria-label="Open Menu"
      onClick={internalOnClick}
      {...buttonProps}
    >
      <span className="sr-only">Open Menu</span>
      <svg className="ham" viewBox="0 0 100 100">
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </button>
  );
}
