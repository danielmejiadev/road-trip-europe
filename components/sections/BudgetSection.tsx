import { budgetSummary, vignettes, drivingLegs } from "@/lib/data/budget";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatEur } from "@/utils/format";

export function BudgetSection() {
  return (
    <section id="presupuesto" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Presupuesto estimado
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          Estimación para 4 personas · Septiembre 2027
        </p>
      </div>

      {/* Tarjetas totales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Card
          elevated
          className="p-6 text-center border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]"
        >
          <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Total 4 personas</p>
          <p className="text-4xl font-bold text-[var(--color-accent)]">
            {formatEur(budgetSummary.totalFourPeople)}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">estimado</p>
        </Card>
        <Card elevated className="p-6 text-center">
          <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Por pareja</p>
          <p className="text-4xl font-bold text-[var(--color-text-primary)]">
            {formatEur(budgetSummary.totalPerCouple)}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">estimado</p>
        </Card>
        <Card elevated className="p-6 text-center">
          <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-2">Por persona</p>
          <p className="text-4xl font-bold text-[var(--color-text-primary)]">
            {formatEur(budgetSummary.totalPerPerson)}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">estimado</p>
        </Card>
      </div>

      {/* Tabla de desglose */}
      <Card className="overflow-hidden mb-10">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Categoría
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider hidden sm:table-cell">
                  Unidades
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {budgetSummary.categories.map((budgetCategory, index) => (
                <tr
                  key={budgetCategory.category}
                  className={index % 2 === 0 ? "bg-[var(--color-surface)]" : "bg-[var(--color-surface-elevated)]"}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl" aria-hidden="true">{budgetCategory.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                          {budgetCategory.category}
                        </p>
                        {budgetCategory.notes && (
                          <p className="text-xs text-[var(--color-text-muted)] hidden sm:block">
                            {budgetCategory.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right hidden sm:table-cell">
                    {budgetCategory.unitCount > 0 && (
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {budgetCategory.unitCount} {budgetCategory.unitLabel}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {formatEur(budgetCategory.total)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[var(--color-accent)]/30">
                <td colSpan={2} className="px-4 py-4">
                  <span className="text-base font-bold text-[var(--color-text-primary)]">
                    Total estimado (4 personas)
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <span className="text-xl font-bold text-[var(--color-accent)]">
                    {formatEur(budgetSummary.totalFourPeople)}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>

      {/* Viñetas y peajes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
            🛣️ Viñetas y peajes por país
          </h3>
          <div className="space-y-3">
            {vignettes.map((vignette) => (
              <Card key={vignette.country} className="p-4 flex items-start gap-3">
                <Badge variant={vignette.required ? "crimson" : "emerald"}>
                  {vignette.required ? "Obligatoria" : "Sin viñeta"}
                </Badge>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">{vignette.country}</p>
                  {vignette.cost && (
                    <p className="text-xs text-[var(--color-accent)]">{vignette.cost}</p>
                  )}
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{vignette.notes}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">
            🗺️ Etapas de conducción
          </h3>
          <div className="space-y-2">
            {drivingLegs.map((leg) => (
              <Card key={leg.from} className="p-3 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[var(--color-text-primary)] font-medium truncate">
                    {leg.from} → {leg.to}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-[var(--color-text-muted)]">{leg.distanceKm} km</span>
                  <Badge variant="muted">{leg.driveTime}</Badge>
                </div>
              </Card>
            ))}
            <Card className="p-3 flex items-center justify-between gap-4 border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)]">
              <p className="text-sm font-bold text-[var(--color-accent)]">Total carretera</p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[var(--color-accent)]">~1.805 km</span>
                <Badge variant="accent">~22h</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
