'use client'

import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'

type ErrorTooltipProps = {
    label: string
    children: React.ReactNode
    side?: "top" | "left" | "right" | "bottom"
    align?: "start" | "center" | "end"
}  

const ErrorTooltip = ({label, children, side, align}: ErrorTooltipProps) => {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                <p className='text-sm'>{label?.toLowerCase()}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ErrorTooltip