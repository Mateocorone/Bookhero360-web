import { AppSkeleton } from '@/components/panel/AppSkeleton';

const Loading = () => (
  <div className="bg-background-3 dark:bg-background-8 min-h-screen p-6 xl:grid xl:grid-cols-[264px_1fr] xl:gap-8">
    <div className="skeleton hidden h-[92vh] xl:block" />
    <div className="mx-auto w-full max-w-[1180px]">
      <AppSkeleton view="calendar" />
    </div>
  </div>
);

export default Loading;
