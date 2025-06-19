import { FC, ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends ComponentProps<"input"> {
    hidePlaceholderOnFocus?: boolean;
    type?:
        | "email"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "url"
        | "file";
    value?: string | number | readonly string[] | undefined;
}

const Input: FC<InputProps> = (props) => {
    const { className, disabled, ...rest } = props;

    return (
        <>
            <input
                className={cn(
                    "bg-muted text-foreground border-border h-10 w-full rounded-md border-1 p-3 text-sm sm:w-[300px]",
                    "focus:border-accent focus:bg-background focus:border-1",
                    "disabled:opacity-69",
                    "transition-all outline-none disabled:cursor-not-allowed",
                    {
                        "file:bg-accent-muted file:text-foreground hover:file:bg-accent p-0 file:mr-4 file:h-full file:border-0 file:px-4 file:py-2 file:text-sm file:font-medium hover:cursor-pointer hover:file:cursor-pointer sm:w-[420px]":
                            props.type === "file",
                    },
                    className
                )}
                disabled={disabled}
                {...rest}
            />
        </>
    );
};

Input.displayName = "Input";

export { Input };
export type { InputProps };
