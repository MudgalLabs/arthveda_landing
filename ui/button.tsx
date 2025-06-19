import { ComponentProps, FC, memo } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loading } from "@/ui/loading";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md font-heading font-content font-medium transition-all disabled:opacity-69 disabled:cursor-not-allowed enabled:active:scale-[0.98] cursor-pointer",

    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-foreground enabled:hover:bg-primary/90 enabled:active:bg-primary focus-visible:ring-foreground!",
                secondary:
                    "bg-secondary text-foreground enabled:hover:bg-secondary/80 enabled:active:bg-secondary",
            },
            size: {
                default: "text-base px-4 py-2 ",
                small: "text-sm px-3 py-1.5 font-normal",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

interface ButtonProps
    extends ComponentProps<"button">,
        VariantProps<typeof buttonVariants> {
    loading?: boolean;
}

const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        disabled,
        loading = false,
        variant = "primary",
        size = "default",
        ...rest
    } = props;

    return (
        <button
            className={cn(
                "relative",
                buttonVariants({ variant, size, className })
            )}
            disabled={disabled || loading}
            {...rest}
        >
            {loading && (
                <div className="absolute inset-0 inline-flex items-center justify-center">
                    <Loading color="currentColor" />
                </div>
            )}

            <span
                className={cn(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition",
                    {
                        "opacity-0": loading,
                        "opacity-100": !loading,
                    }
                )}
            >
                {children}
            </span>
        </button>
    );
});

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
