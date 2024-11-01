"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { getCountryFromCode } from "@/helper/helper"

export function SelectSearch({ items, selectedItem, onChange, text = '', defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full h-12 justify-between rounded-md"
                >
                    {selectedItem
                        ? getCountryFromCode(items.find((item) => item === selectedItem))
                        : `Izbor ${text}`
                    }
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full min-w-96 p-0">
                <Command>
                    <CommandInput placeholder="Pretraga..." />
                    <CommandList>
                        <CommandEmpty>{`Nijedna ${text} ne odgovara pretrazi`}</CommandEmpty>
                        <CommandGroup>
                            {items.map((item) => (
                                <CommandItem
                                    key={item}
                                    value={item}
                                    onSelect={(currentValue) => {
                                        onChange(currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedItem === item ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {getCountryFromCode(item)}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
