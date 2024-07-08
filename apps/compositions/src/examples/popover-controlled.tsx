"use client"

import { Button } from "compositions/ui/button"
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "compositions/ui/popover"
import { useState } from "react"

export const PopoverControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <PopoverTrigger>
        <Button size="sm" variant="outline">
          Click me
        </Button>
      </PopoverTrigger>
      <PopoverContent showArrow>
        <PopoverBody>
          This is a popover with the same width as the trigger button
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}
