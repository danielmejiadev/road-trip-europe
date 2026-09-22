import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        {
          "bg-[var(--color-accent)] text-[#0a0a0f] hover:bg-[#f5c97a] active:scale-[0.97]": variant === "primary",
          "bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-border)]":
            variant === "secondary",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]":
            variant === "ghost",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-6 py-3 text-base": size === "lg",
          "opacity-50 cursor-not-allowed pointer-events-none": disabled,
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
