import { cn } from "@/utils/cn";
import { ClipLoader } from "@/components/lib/Spinners";
import { IButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.styles";
import { useState } from "react";
import Tooltip from "../Tootip";

export default function Button({
  children,
  className,
  spinnerPlacement = "start",
  tooltipPosition,
  tooltipText,
  ...props
}: IButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  if (!props.spinner) props.spinner = <ClipLoader />;

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        onFocus={() => setIsTooltipVisible(true)}
        onBlur={() => setIsTooltipVisible(false)}
        aria-describedby="tooltip"
        type="button"
        {...props}
        className={cn(buttonVariants(props), className)}
      >
        {props.startContent}

        {props.isLoading && spinnerPlacement === "start" && props.spinner}

        {props.isLoading && props.isIconOnly ? null : children}

        {props.isLoading && spinnerPlacement === "end" && props.spinner}

        {props.endContent}
      </button>

      {isTooltipVisible && !!tooltipText && (
        <Tooltip tooltipText={tooltipText} position={tooltipPosition} />
      )}
    </div>
  );
}
