const roundToNearest30Minutes = (minutes) => {
  const hours = minutes / 60;
  return (Math.round(hours * 2) / 2) * 60;
};

module.exports = { roundToNearest30Minutes };
