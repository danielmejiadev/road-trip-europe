import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  hoverable?: boolean;
}

export function Card({ children, className, elevated = false, hoverable = false }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border",
        {
          "bg-[var(--color-surface)] border-[var(--color-border)]": !elevated,
          "bg-[var(--color-surface-elevated)] border-[var(--color-border)]": elevated,
          "transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5":
            hoverable,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
