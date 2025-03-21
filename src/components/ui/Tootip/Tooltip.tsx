import { cn } from "@/utils/cn";

export type TTooltipPosition = "top" | "bottom" | "left" | "right";

export interface ITooltipProps {
  position?: TTooltipPosition | undefined;
  tooltipText: string;
}

export default function Tooltip({
  tooltipText = "Tooltip",
  position = "top",
}: ITooltipProps) {
  const tooltipPositionClass = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const positionClass = {
    top: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700",
    bottom:
      "absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900 dark:border-b-gray-700",
    left: "absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-700",
    right:
      "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700",
  };

  return (
    <div
      className={cn(
        "absolute min-w-24 px-3 py-2 text-sm font-medium text-white bg-pink-600 rounded-md shadow-sm transition-all duration-300 z-50",
        tooltipPositionClass[position]
      )}
    >
      {tooltipText}
      <div className={positionClass[position]}></div>
    </div>
  );
}
