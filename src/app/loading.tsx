const Loading = () => (
  <main className="main-container pt-[170px] pb-20" aria-busy="true" aria-label="Cargando contenido">
    <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4">
      <div className="skeleton h-14 w-full" />
      <div className="skeleton h-14 w-4/5" />
      <div className="skeleton mt-2 h-5 w-3/5" />
      <div className="mt-4 flex gap-3">
        <div className="skeleton h-12 w-40 !rounded-2xl" />
        <div className="skeleton h-12 w-40 !rounded-2xl" />
      </div>
    </div>
    <div className="skeleton mx-auto mt-14 h-[320px] max-w-[980px] !rounded-[28px]" />
  </main>
);

export default Loading;
