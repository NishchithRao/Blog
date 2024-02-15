export const getPostName = (url?: string) => {
  const idx = url?.lastIndexOf("/") || 0;
  return url?.slice(idx + 1, url.lastIndexOf("."));
};
