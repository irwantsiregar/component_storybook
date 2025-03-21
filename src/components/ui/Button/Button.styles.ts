import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "min-w-18 flex justify-center items-center gap-2 font-medium py-2 px-3 hover:opacity-80 hover:cursor-pointer transition-all",
  {
    variants: {
      variant: {
        solid: "!text-white bg-blue-500",
        bordered: "!text-blue-400 !bg-slate-50 border-2 border-blue-500",
        light: "!text-blue-400 !bg-transparent hover:bg-blue-100",
        flat: "!text-blue-500 !bg-blue-100",
        faded: "!text-blue-400 !bg-slate-100 border-2 border-slate-300",
        shadow: "!text-white !bg-blue-500 shadow-lg",
        ghost: "!text-blue-400 !bg-transparent border-2 border-blue-600",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl",
        xl: "text-2xl",
      },
      bgColor: {
        default: "bg-slate-300 text-slate-800",
        primary: "bg-blue-600 text-white",
        secondary: "bg-purple-600 text-white",
        success: "bg-green-600 text-black",
        warning: "bg-yellow-600 text-black",
        danger: "bg-pink-600 text-white",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-xl",
        full: "rounded-full",
      },
      isDisabled: {
        false: null,
        true: "opacity-50 cursor-not-allowed hover:cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      bgColor: "default",
      isDisabled: false,
      variant: "solid",
      radius: "md",
    },
  }
);

export { buttonVariants };
