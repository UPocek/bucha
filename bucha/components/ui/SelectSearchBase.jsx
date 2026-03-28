'use client';

import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { getCountryFromCode } from '@/helper/helper';

function SelectSearchBase({
    items,
    selectedItem,
    onChange,
    text = '',
    defaultOpen = false,
    locale = 'sr',
    searchPlaceholder = 'Pretraga...',
    emptyText,
}) {
    const [open, setOpen] = useState(defaultOpen);
    const resolvedEmptyText = emptyText || `Nijedna ${text} ne odgovara pretrazi`;

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="h-12 w-full justify-between rounded-md">
                    {selectedItem
                        ? getCountryFromCode(
                              items.find((item) => item === selectedItem),
                              locale,
                          )
                        : `Izbor ${text}`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full min-w-96 p-0">
                <Command>
                    <CommandInput placeholder={searchPlaceholder} />
                    <CommandList>
                        <CommandEmpty>{resolvedEmptyText}</CommandEmpty>
                        <CommandGroup>
                            {items.map((item) => (
                                <CommandItem
                                    key={item}
                                    value={item}
                                    onSelect={(currentValue) => {
                                        onChange(currentValue);
                                        setOpen(false);
                                    }}>
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            selectedItem === item ? 'opacity-100' : 'opacity-0',
                                        )}
                                    />
                                    {getCountryFromCode(item, locale)}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default SelectSearchBase;
export { SelectSearchBase };
