const Loading = () => (
  <main className="main-container pt-[170px] pb-20" aria-busy="true" aria-label="Cargando contenido">
    <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4">
      <div className="skeleton h-7 w-40 !rounded-full" />
      <div className="skeleton h-14 w-full" />
      <div className="skeleton h-14 w-4/5" />
      <div className="skeleton mt-2 h-5 w-3/5" />
      <div className="mt-4 flex gap-3">
        <div className="skeleton h-12 w-36 !rounded-full" />
        <div className="skeleton h-12 w-36 !rounded-full" />
      </div>
    </div>
    <div className="skeleton mx-auto mt-14 h-[320px] max-w-[980px] !rounded-[28px]" />
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="skeleton h-44" />
      ))}
    </div>
  </main>
);

export default Loading;
