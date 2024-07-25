// Returns true is current year is equal to selected year
export const isCurrentYear = (year) => {
  const currentYear = new Date().getFullYear();
  return year === currentYear;
};
