type SkeletonView = 'summary' | 'calendar' | 'clients' | 'emails' | 'settings';

const Head = () => (
  <div className="mb-6 flex items-end justify-between gap-4">
    <div className="space-y-3">
      <div className="skeleton h-6 w-28 !rounded-full" />
      <div className="skeleton h-9 w-72 max-w-full" />
      <div className="skeleton h-4 w-56 max-w-full" />
    </div>
    <div className="skeleton h-12 w-36 !rounded-full" />
  </div>
);

const Stats = () => (
  <div className="mb-6 grid gap-4 sm:grid-cols-3">
    {[0, 1, 2].map((i) => (
      <div key={i} className="skeleton h-[88px] !rounded-3xl" />
    ))}
  </div>
);

export const AppSkeleton = ({ view }: { view: SkeletonView }) => (
  <div aria-busy="true" aria-label="Cargando contenido">
    <Head />
    {(view === 'summary' || view === 'calendar') && <Stats />}
    {view === 'summary' && (
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="skeleton h-72 !rounded-3xl" />
        <div className="skeleton h-72 !rounded-3xl" />
      </div>
    )}
    {view === 'calendar' && (
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="skeleton h-[520px] !rounded-3xl" />
        <div className="skeleton h-64 !rounded-3xl" />
      </div>
    )}
    {view === 'clients' && (
      <div className="space-y-3">
        <div className="skeleton h-12 !rounded-full" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="skeleton h-[72px] !rounded-2xl" />
        ))}
      </div>
    )}
    {(view === 'emails' || view === 'settings') && (
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="skeleton h-80 !rounded-3xl" />
        <div className="skeleton h-80 !rounded-3xl" />
      </div>
    )}
  </div>
);
