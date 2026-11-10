import { stats } from '@/lib/site';

export default function StatsBar() {
  return (
    <div className="section relative z-10 -mt-16">
      <dl className="card grid grid-cols-2 divide-slate-200/80 lg:grid-cols-4 lg:divide-x">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col gap-1 px-6 py-6 sm:px-8 sm:py-8">
            <dt className="order-last text-sm text-ink-subtle">{stat.name}</dt>
            <dd className="flex items-baseline gap-1 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {stat.value}
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
