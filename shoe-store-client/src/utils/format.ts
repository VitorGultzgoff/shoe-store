export const formatDecimal = (value: number) => {
  if (!value || typeof value !== "number") return value;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
  });
  return formatter.format(value);
};

export const formatPercentage = (value: number) => {
  if (!value || typeof value !== "number") return value;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  });
  return formatter.format(value / 100);
};
