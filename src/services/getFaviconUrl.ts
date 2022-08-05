export const getFaviconUrlV3 = (url: string) => {
  const prefixLessUrl = new URL(url || "").hostname;
  const devFavicon = `https://api.faviconkit.com/${prefixLessUrl}/32`;
  try {
    return devFavicon;
  } catch (err) {
    return "";
  }
};

export const getFaviconUrlV2 = (url: string) => {
  const prefixLessUrl = new URL(url || "").hostname;
  // const devFavicon = `https://api.statvoo.com/favicon/?url=${prefixLessUrl}`
  // const devFavicon = `https://s2.googleusercontent.com/s2/favicons?domain=${prefixLessUrl}&sz=32`
  const devFavicon = `https://api.faviconkit.com/${prefixLessUrl}/32`;
  const chromeFavicon = `chrome://favicon/size/16@2x/${url}`

  try {
    if (process.env.NODE_ENV === "development") {
      return devFavicon;
    } else {
      var http = new XMLHttpRequest();
      http.open('HEAD', chromeFavicon, false);
      http.send();
      return http.status !== 404 ? chromeFavicon : '';
    }
  } catch (err) {
    try {
      return devFavicon;
    } catch (err) {
      return "";
    }
  }
};

