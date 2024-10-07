import './styles.css';

import { hostame, URL_STREAM } from './config';

const newUrl = new URL(URL_STREAM);
const videoId = newUrl.pathname.split('/').pop() || '';
const siValue = newUrl.searchParams.get('si') || '';

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

const VideoPanel = ({ panelType }: { panelType: 'left' | 'right' }) => (
  <iframe
    className={`panel ${panelType}-panel`}
    data-status={'closed'}
    width={panelType === 'left' ? 560 : 520}
    height="315"
    src={
      panelType === 'left'
        ? `https://www.youtube.com/embed/${videoId}?si=${siValue}`
        : `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${hostame}`
    }
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
);

export default function LiveStreamWidget() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', marginTop: '1rem' }}>
      <div className="container-resizable-panels">
        <VideoPanel panelType="left" />
        <VideoPanel panelType="right" />
      </div>
      <div className="widget-controls">
        <BtnToggleChat />
      </div>
    </div>
  );
}
