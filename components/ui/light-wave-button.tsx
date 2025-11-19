import React from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface LightWaveProps {
  waveColor?: string;
  waveDuration?: string;
}

interface LightWaveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, LightWaveProps {}

export const LightWaveButton = React.forwardRef<HTMLButtonElement, LightWaveButtonProps>(
  ({ className, children, waveColor, waveDuration, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 z-10 -translate-x-full animate-[shimmer-slide_3s_infinite]"
          style={{
            animationDuration: waveDuration || "3s",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${waveColor || "rgba(255, 255, 255, 0.5)"}, transparent)`,
              transform: "skewX(-20deg)",
            }}
          />
        </div>
        <span className="relative z-20 flex items-center justify-center gap-2">
            {children}
        </span>
      </button>
    );
  }
);
LightWaveButton.displayName = "LightWaveButton";

interface LightWaveLinkProps extends LinkProps, LightWaveProps {
  className?: string;
  children: React.ReactNode;
}

export const LightWaveLink = React.forwardRef<HTMLAnchorElement, LightWaveLinkProps>(
  ({ className, children, href, waveColor, waveDuration, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "group relative inline-flex overflow-hidden px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 z-10 -translate-x-full animate-[shimmer-slide_3s_infinite]"
          style={{
            background: `linear-gradient(90deg, transparent, ${waveColor || "rgba(255, 255, 255, 0.5)"}, transparent)`,
            animationDuration: waveDuration || "3s",
            transform: "skewX(-20deg)",
          }}
        />
        <span className="relative z-20 flex items-center justify-center gap-2">
            {children}
        </span>
      </Link>
    );
  }
);
LightWaveLink.displayName = "LightWaveLink";
