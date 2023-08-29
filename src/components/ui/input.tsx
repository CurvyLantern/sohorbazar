import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        /* focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 */
        // "focus required w-full rounded bg-gray-100 p-2 text-xs focus:border focus:border-rose-500
        //                              focus:bg-white focus:outline-none"
        return (
            <input
                type={type}
                className={cn(
                    "focus required flex w-full rounded rounded-r-none border bg-input p-2 px-3 text-xs text-input-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border focus:border-green-500 focus:bg-white  focus:outline-none focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
