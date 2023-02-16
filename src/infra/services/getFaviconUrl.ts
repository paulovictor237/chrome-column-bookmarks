import { VITE_DEV_MODE } from '@/domain/constants';

export const getFaviconUrlV3 = (link: string) => {
  try {
    if (VITE_DEV_MODE) throw new Error('Dev mode');
    const url = new URL(chrome.runtime.getURL('/_favicon/'));
    url.searchParams.set('pageUrl', link);
    url.searchParams.set('size', '32');
    return url.toString();
  } catch (error) {
    return `https://www.google.com/s2/favicons?sz=32&domain_url=${link}`;
  }
};
