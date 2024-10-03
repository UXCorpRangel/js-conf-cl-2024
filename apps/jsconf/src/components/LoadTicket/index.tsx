import { lazy, Suspense } from 'react';

const LazyTicket = lazy(() => import('./LazyTicket'));

export default function LoadTicket() {
  return (
    <Suspense fallback={'loading'}>
      <LazyTicket />
    </Suspense>
  );
}
