import { IS_LIVE_EXAMPLE, NODE_ENV } from "../utils/constants";

export const getFaviconUrl = (url: string) => {

  const prefixLessUrl = new URL(url || "").hostname;
  const chromeFavicon = `chrome://favicon/size/16@2x/${url}`

  try {
    if (NODE_ENV === "development" || IS_LIVE_EXAMPLE) {
      return `https://api.faviconkit.com/${prefixLessUrl}/32`;
    } else {
      var http = new XMLHttpRequest();
      http.open('HEAD', chromeFavicon, false);
      http.send();
      return http.status !== 404 ? chromeFavicon : '';
    }
  } catch (err) {
    try {
      return `https://api.faviconkit.com/${prefixLessUrl}/32`;
    } catch (err) {
      return "";
    }
  }
};

