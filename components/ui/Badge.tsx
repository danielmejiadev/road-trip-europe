import { clsx } from "clsx";

type BadgeVariant = "default" | "accent" | "emerald" | "crimson" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]":
            variant === "default",
          "bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/20":
            variant === "accent",
          "bg-emerald-500/10 text-[var(--color-emerald)] border border-emerald-500/20": variant === "emerald",
          "bg-red-500/10 text-[var(--color-crimson)] border border-red-500/20": variant === "crimson",
          "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]":
            variant === "muted",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
