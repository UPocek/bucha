import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = ({ className, type, ref, ...props }) => {
    return (
        <input
            type={type}
            className={cn(
                'mt-3 mb-3 flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
};
Input.displayName = 'Input';

export { Input };
