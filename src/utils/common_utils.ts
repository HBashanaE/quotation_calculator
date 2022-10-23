export const roundToNearest30Minutes = (minutes: number) => {
  const hours = minutes / 60;
  return (Math.round(hours * 2) / 2) * 60;
};
