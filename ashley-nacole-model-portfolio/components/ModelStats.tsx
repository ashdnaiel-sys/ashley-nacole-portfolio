import { modelData, primaryStats, secondaryStats } from '@/data/modelData';

export function ModelStats({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`stats-section ${compact ? 'stats-compact' : ''}`} id={compact ? undefined : 'stats'} aria-labelledby={compact ? 'compact-stats-title' : 'stats-title'}>
      <div className="section-shell stats-inner">
        <div className="stats-title-block">
          <p className="eyebrow">Model Stats</p>
          <h2 id={compact ? 'compact-stats-title' : 'stats-title'}>{modelData.name}</h2>
        </div>
        <dl className="primary-stats">
          {primaryStats.map(([label, value]) => (
            <div className="stat-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {!compact ? (
          <dl className="secondary-stats">
            {secondaryStats.map(([label, value]) => (
              <div className="stat-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
