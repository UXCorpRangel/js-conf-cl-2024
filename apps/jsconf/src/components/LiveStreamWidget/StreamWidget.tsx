import { lazy, Suspense, useEffect, useState } from 'react';

const LazLiveStreamWidget = lazy(() => import('./LiveStreamWidget'));

export type StreamWidgetProps = {
  urlStream: string;
};

/* ZONA DEL STREAM */
const timeZone = 'America/Santiago'; // Zona horaria de Chile
const startStream = '2024-10-05T12:27:40';
const endStream = '2024-10-05T12:27:45';

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

export default function StreamWidget(props: StreamWidgetProps) {
  const isLive = useLiveStream(startStream, endStream, timeZone);

  return (
    <>
      {isLive && 'is live'}
      <Suspense>
        <LazLiveStreamWidget {...props} />
      </Suspense>
    </>
  );
}
