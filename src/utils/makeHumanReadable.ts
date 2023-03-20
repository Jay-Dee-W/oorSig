export const makeHumanReadable = (source: string) => {
    source = source.replace(/_/g, ' ').toLowerCase();
    return source[0]?.toUpperCase() + source.slice(1);
  };
  