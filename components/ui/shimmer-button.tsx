import Link, { type LinkProps } from "next/link"
import React, { ComponentPropsWithoutRef, CSSProperties } from "react"

import { cn } from "@/lib/utils"

type ShimmerVisualOptions = {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

type ShimmerCustomProperties = CSSProperties & Record<`--${string}`, string | number>

const SHIMMER_GRADIENT_STYLE: CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, transparent 30%, var(--shimmer-color) 50%, transparent 70%)",
}

const createShimmerVars = ({
  shimmerColor,
  shimmerSize,
  shimmerDuration,
  borderRadius,
  background,
}: Required<Omit<ShimmerVisualOptions, "className" | "children">>): ShimmerCustomProperties => ({
  "--spread": "90deg",
  "--shimmer-color": shimmerColor,
  "--radius": borderRadius,
  "--speed": shimmerDuration,
  "--cut": shimmerSize,
  "--bg": background,
})

const ShimmerLayers = ({
  children,
}: {
  children?: React.ReactNode
}) => (
  <>
    <span className="pointer-events-none absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]" />

    <span className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [border-radius:var(--radius)]">
      <span
        className="absolute -left-1/2 top-0 h-full w-[200%] animate-shimmer-slide opacity-60"
        style={SHIMMER_GRADIENT_STYLE}
      />
    </span>

    <span
      className={cn(
        "pointer-events-none absolute inset-0 [border-radius:var(--radius)]",
        "px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
        "transform-gpu transition-all duration-300 ease-in-out",
        "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
        "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
      )}
    />

    <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
  </>
)

export interface ShimmerButtonProps
  extends ComponentPropsWithoutRef<"button">,
    ShimmerVisualOptions {}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const shimmerVars = createShimmerVars({
      shimmerColor,
      shimmerSize,
      shimmerDuration,
      borderRadius,
      background,
    })

    return (
      <button
        style={{ ...shimmerVars, ...style }}
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        <ShimmerLayers>{children}</ShimmerLayers>
      </button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"

export interface ShimmerLinkProps
  extends ShimmerVisualOptions,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {}

export const ShimmerLink = React.forwardRef<HTMLAnchorElement, ShimmerLinkProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      style,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const shimmerVars = createShimmerVars({
      shimmerColor,
      shimmerSize,
      shimmerDuration,
      borderRadius,
      background,
    })

    return (
      <Link
        href={href}
        ref={ref}
        style={{ ...shimmerVars, ...style }}
        className={cn(
          "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        {...props}
      >
        <ShimmerLayers>{children}</ShimmerLayers>
      </Link>
    )
  }
)

ShimmerLink.displayName = "ShimmerLink"
