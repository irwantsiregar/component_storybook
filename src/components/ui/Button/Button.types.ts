import { ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./Button.styles";
import { TTooltipPosition } from "../Tootip/Tooltip";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface IButtonProps extends ButtonVariantProps {
  children: ReactNode | string;
  className?: string;

  bgColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";

  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";

  radius?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg" | "xl";

  startContent?: ReactNode;
  endContent?: ReactNode;

  spinner?: ReactNode;
  spinnerPlacement?: "start" | "end";

  fullWidth?: boolean;

  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;

  tooltipText?: string;
  tooltipPosition?: TTooltipPosition;

  onClick?: () => void;
}
