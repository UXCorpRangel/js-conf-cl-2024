const baseUrl = import.meta.env.PROD ? `${import.meta.env.SITE}/` : '';

export const TEXTURE = `${baseUrl}/assets/misc/band.png`.replaceAll('//', '/');
export const MODEL = `${baseUrl}/assets/misc/ticket.glb`.replaceAll('//', '/');
