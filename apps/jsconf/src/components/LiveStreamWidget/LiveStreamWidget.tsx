import { useEffect, useState } from 'react';

import './styles.css';

import type { StreamWidgetProps } from './StreamWidget';

const BtnToggleChat = () => {
  return (
    <button
      className="widget-controls__toggle-chat"
      onClick={() => {
        const panelChat = document.querySelector('.container-resizable-panels .right-panel');
        const divider = document.querySelector('.container-resizable-panels .divider');

        const currentStatus = panelChat?.getAttribute('data-status');

        const newStatus = currentStatus === 'open' ? 'closed' : 'open';
        panelChat?.setAttribute('data-status', newStatus);
        divider?.setAttribute('data-status', newStatus);
      }}
    >
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="m8.5 19h-.5c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4z"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
          <g stroke-width="2">
            <path d="m15.9965 11h.0089" />
            <path d="m11.9955 11h.009" />
            <path d="m7.99451 11h.00898" />
          </g>
        </g>
      </svg>
    </button>
  );
};

const Divide = () => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const panelRight = document.querySelector<HTMLDivElement>(
      '.container-resizable-panels .right-panel'
    );
    const panelLeft = document.querySelector<HTMLDivElement>(
      '.container-resizable-panels .left-panel'
    );

    if (panelRight && panelLeft) {
      // Desactivamos los eventos de ambos paneles para evitar interferencias
      panelRight.style.pointerEvents = 'none';
      panelLeft.style.pointerEvents = 'none';

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const newFlexRight = Math.max(100, Math.min(window.innerWidth - moveEvent.clientX, 800));
        panelRight.style.flex = `0 0 ${newFlexRight}px`;
        document.body.style.cursor = 'col-resize';
      };

      const handleMouseUp = () => {
        // Eliminamos los eventos cuando termina el arrastre
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'auto';

        // Reactivamos los eventos en ambos paneles
        panelRight.style.pointerEvents = 'auto';
        panelLeft.style.pointerEvents = 'auto';
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <div className="divider" onMouseDown={handleMouseDown}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="30"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="9" cy="12" r="1" />
        <circle cx="9" cy="5" r="1" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="15" cy="5" r="1" />
        <circle cx="15" cy="19" r="1" />
      </svg>
    </div>
  );
};

const ResizablePanels = ({ urlStream }: StreamWidgetProps) => {
  const newUrl = new URL(urlStream);
  const videoId = newUrl.pathname.split('/').pop();
  const siValue = newUrl.searchParams.get('si');

  return (
    <div className="container-resizable-panels">
      <iframe
        className="panel left-panel"
        data-status="open"
        width="560"
        src={`https://www.youtube.com/embed/${videoId}?si=${siValue}`}
        height="315"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <Divide />
      <iframe
        className="panel right-panel"
        data-status="open"
        width="520"
        height="315"
        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${new URL(import.meta.url).hostname}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const timeZone = 'America/Santiago'; // Zona horaria de Chile

const TestingAreaTimeZone = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone }));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <p>
      <em>{timeZone}</em> {time}
    </p>
  );
};

export default function LiveStreamWidget(props: StreamWidgetProps) {
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <TestingAreaTimeZone />
      <ResizablePanels {...props} />
      <div className="widget-controls">
        <BtnToggleChat />
      </div>
    </div>
  );
}
