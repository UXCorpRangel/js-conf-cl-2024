import './styles.css';

const handleToggleChat = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.currentTarget as HTMLButtonElement;
  const parentElement = target.parentElement?.parentElement;
  const panels = ['right-panel', 'left-panel'].map(className =>
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
    data-status={'closed'}
    width={panelType === 'left' ? 560 : 520}
    height="315"
    src={
      panelType === 'left'
        ? `https://www.youtube--.com/embed/${videoId}?si=${siValue}`
        : `https://www.youtube--.com/live_chat?v=${videoId}&embed_domain=${'localhost'}`
    }
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
);
// 9:30 7:00pm
export default function LiveStreamWidget({ urlStream }: { urlStream: string }) {
  const newUrl = new URL(urlStream);
  const videoId = newUrl.pathname.split('/').pop() || '';
  const siValue = newUrl.searchParams.get('si') || '';
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div className="container-resizable-panels">
        <VideoPanel videoId={videoId} panelType="left" siValue={siValue} />
        <VideoPanel videoId={videoId} panelType="right" />
      </div>
      <div className="widget-controls">
        <BtnToggleChat />
      </div>
    </div>
  );
}
