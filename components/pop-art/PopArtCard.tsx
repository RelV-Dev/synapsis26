"use client"

import { cn } from "@/lib/utils"
import { motion, type HTMLMotionProps } from "framer-motion"

interface InfoCardProps extends Omit<HTMLMotionProps<"article">, "children"> {
  number: string
  title: string
  description?: string
  className?: string
  size?: "default" | "large"
}

export function InfoCard({
  number,
  title,
  description,
  className,
  size = "default",
  ...props
}: InfoCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "group relative bg-[#003d7a] text-white transition-all duration-300",
        "shadow-[0_4px_20px_rgba(0,61,122,0.12)] hover:shadow-[0_12px_32px_rgba(0,61,122,0.28)]",
        size === "large" ? "p-8 md:p-10" : "p-6 md:p-7",
        "rounded-sm overflow-hidden flex flex-col justify-between",
        className
      )}
      {...props}
    >
      {/* Subtle top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d4a843] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-mono text-white/40 group-hover:text-[#d4a843] transition-colors duration-300">
            {number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#d4a843] transition-colors duration-300" />
        </div>

        <h3
          className={cn(
            "font-semibold leading-snug tracking-tight group-hover:text-white transition-colors",
            size === "large" ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          )}
        >
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-sm text-white/70 leading-relaxed font-normal">
            {description}
          </p>
        )}
      </div>

      <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-white/50 tracking-wider font-mono uppercase">Detail</span>
        <span className="text-xs text-[#d4a843] transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </motion.article>
  )
}
