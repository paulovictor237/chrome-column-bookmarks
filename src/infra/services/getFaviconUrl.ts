export const getFaviconUrlV3 = (url: string) => {
  const prefixLessUrl = new URL(url || '').hostname;
  try {
    try {
      return `https://www.google.com/s2/favicons?sz=32&domain_url=${url}`;
    } catch {
      return `https://api.faviconkit.com/${prefixLessUrl}/32`;
    }
  } catch (err) {
    return '';
  }
};
