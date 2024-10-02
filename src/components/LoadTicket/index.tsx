import { lazy, Suspense } from 'react';

const LazyTicket = lazy(() => import('./LazyTicket'));

type IdBadgeProps = {
  tag: string;
  band: string;
};

export default function LoadTicket(data: IdBadgeProps) {
  return (
    <Suspense fallback={'loading'}>
      <LazyTicket tag={data.tag} band={data.band} />
    </Suspense>
  );
}
