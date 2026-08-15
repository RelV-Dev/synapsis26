import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PopArtCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  name: string;
  colorClass?: string;
}

export function PopArtCard({
  title,
  name,
  colorClass = "bg-pop-blue",
  className,
  ...props
}: PopArtCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] duration-300 group",
        colorClass,
        className
      )}
      {...props}
    >
      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 bg-halftone-white opacity-40 mix-blend-overlay pointer-events-none transition-opacity group-hover:opacity-60" />
      
      {/* Decorative Border / Stamp effect can go here, but for now just the card content */}
      <CardContent className="p-8 h-full flex flex-col justify-between min-h-[320px] relative z-10">
        <h3 className="font-rye text-3xl sm:text-4xl text-white text-shadow-outline leading-tight">
          {title}
        </h3>
        
        <div className="text-right mt-8">
          <span className="font-space text-2xl font-light tracking-widest text-white/80 lowercase">
            {name}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
