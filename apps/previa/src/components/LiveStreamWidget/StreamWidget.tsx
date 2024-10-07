import { lazy, Suspense, useEffect, useState } from 'react';
import { dataLiveStreamWidget } from './config';

const LazLiveStreamWidget = lazy(() => import('./LiveStreamWidget'));

const useLiveStream = (startDate: string, endDate: string, timeZone: string) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const getLocalTime = () => {
      return new Date(new Date().toLocaleString('en-US', { timeZone }));
    };

    const start = new Date(startDate);
    const end = new Date(endDate);

    const checkLiveStatus = () => {
      const now = getLocalTime();
      const isLive = now >= start && now <= end;
      setIsLive(isLive);
    };

    checkLiveStatus();

    const intervalId = setInterval(checkLiveStatus, 1000);
    return () => clearInterval(intervalId);
  }, [startDate, endDate, timeZone]);
  return isLive;
};

// const CurrentCLockChile = () => {
//   const [time, setTime] = useState(new Date());
//   useEffect(() => {
//     const intervalId = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <div style={{ textAlign: 'center' }}>
//       {timeZone} - {time.toLocaleString('es-cl', { timeZone })}
//     </div>
//   );
// };

const { endStream, startStream, timeZone } = dataLiveStreamWidget;

export default function StreamWidget() {
  const isLive = useLiveStream(startStream, endStream, timeZone);
  return (
    <>
      {/* <CurrentCLockChile /> */}
      {isLive && (
        <Suspense>
          <LazLiveStreamWidget />
        </Suspense>
      )}
    </>
  );
}
