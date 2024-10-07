export const URL_STREAM = 'https://www.youtube.com/live/O8M8h3_lZxA?si=7PD_dEz4f0VjH6zJ';

export const hostname = process.env.NODE_ENV === 'development' ? 'localhost' : 'laprevia.jsconf.cl';

// sabado 12 october 9:30 hasta 7:00pm (PREVIA) hora chile.
export const dataLiveStreamWidget = {
  timeZone: 'America/Santiago',
  startStream: '2024-10-12T09:30:00',
  endStream: '2024-10-12T19:00:00'
  // startStream: '2024-10-07T01:11:50',
  // endStream: '2024-10-07T01:11:59'
};
