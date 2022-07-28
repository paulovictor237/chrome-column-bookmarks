import { IS_LIVE_EXAMPLE, NODE_ENV } from "./constants";

export const getFaviconUrl = (url: string) => {
  try {
    if (NODE_ENV === "development" || IS_LIVE_EXAMPLE) {
      const prefixLessUrl = new URL(url || "").hostname;
      return `https://api.faviconkit.com/${prefixLessUrl}/32`;
    } else {
      return `chrome://favicon/size/16@2x/${url}`;
    }
  } catch (err) {
    return "❌";
  }
};