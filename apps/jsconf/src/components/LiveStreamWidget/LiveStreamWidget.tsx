import './styles.css';

import type { StreamWidgetProps } from './StreamWidget';

const handleToggleChat = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.currentTarget as HTMLButtonElement;
  const parentElement = target.parentElement?.parentElement;

  const panels = ['right-panel', 'left-panel', 'divider'].map(className =>
    parentElement?.querySelector(`.container-resizable-panels .${className}`)
  );
  const [panelRChat] = panels;
  const newStatus = panelRChat?.getAttribute('data-status') === 'open' ? 'closed' : 'open';

  panels.forEach(panel => panel?.setAttribute('data-status', newStatus));
  target.classList.add('jello-horizontal');
  target.addEventListener('animationend', () => target.classList.remove('jello-horizontal'), {
    once: true
  });
};

const BtnToggleChat = () => {
  return (
    <button className="widget-controls__toggle-chat" onClick={handleToggleChat}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="m8.5 19h-.5c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4z"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <g strokeWidth="2">
            <path d="m15.9965 11h.0089" />
            <path d="m11.9955 11h.009" />
            <path d="m7.99451 11h.00898" />
          </g>
        </g>
      </svg>
    </button>
  );
};

const handleDivideMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  const parentElement = e.currentTarget.parentElement?.parentElement;
  const panelRight = parentElement?.querySelector<HTMLDivElement>('.right-panel');
  const panelLeft = parentElement?.querySelector<HTMLDivElement>('.left-panel');

  if (panelRight && panelLeft) {
    panelRight.style.pointerEvents = 'none';
    panelLeft.style.pointerEvents = 'none';
    document.body.style.cursor = 'col-resize';

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newFlexRight = Math.max(100, Math.min(window.innerWidth - moveEvent.clientX, 800));
      panelRight.style.flex = `0 0 ${newFlexRight}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
      panelRight.style.pointerEvents = 'auto';
      panelLeft.style.pointerEvents = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  } else {
    console.log('No se encontraron los paneles');
  }
};

const Divide = () => {
  return (
    <div className="divider" onMouseDown={handleDivideMouseDown}>
      <svg
        width="24"
        height="30"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[9, 15].map(cx =>
          [5, 12, 19].map(cy => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1" />)
        )}
      </svg>
    </div>
  );
};

const VideoPanel = ({
  videoId,
  panelType,
  siValue
}: {
  videoId: string;
  panelType: 'left' | 'right';
  siValue?: string;
}) => (
  <iframe
    className={`panel ${panelType}-panel`}
    data-status="open"
    width={panelType === 'left' ? 560 : 520}
    height="315"
    src={
      panelType === 'left'
        ? `https://www.youtube.com/embed/${videoId}?si=${siValue}`
        : `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${new URL(import.meta.url).hostname}`
    }
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
);

export default function LiveStreamWidget({ urlStream }: StreamWidgetProps) {
  const newUrl = new URL(urlStream);
  const videoId = newUrl.pathname.split('/').pop() || '';
  const siValue = newUrl.searchParams.get('si') || '';

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div className="container-resizable-panels">
        <VideoPanel videoId={videoId} panelType="left" siValue={siValue} />
        <Divide />
        <VideoPanel videoId={videoId} panelType="right" />
      </div>
      <div className="widget-controls">
        <BtnToggleChat />
      </div>
    </div>
  );
}

// const timeZone = 'America/Santiago'; // Zona horaria.

// const TestingAreaTimeZone = () => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone }));
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <p>
//       <em>{timeZone}</em> {time}
//     </p>
//   );
// };
