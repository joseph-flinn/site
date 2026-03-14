export const buildTitle = (metadata) => {
  return metadata.series && metadata.series !== ''
    ? `[${metadata.series}] ${metadata.title}`
    : metadata.title;
};
