// const chromeFavicon = `chrome://favicon/size/16@2x/${url}`;
// const devFavicon = `https://s2.googleusercontent.com/s2/favicons?domain=${prefixLessUrl}&sz=32`
// const devFavicon = `https://api.statvoo.com/favicon/?url=${prefixLessUrl}`
// const devFavicon = `https://api.faviconkit.com/${prefixLessUrl}/32`;

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
