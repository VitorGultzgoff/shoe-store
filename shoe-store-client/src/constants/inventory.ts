export const INVENTORY_LEVELS_CONFIGURATION = {
  LOW: 30,
  MEDIUM: 70,
  HIGH: 100,
};

const isLowInventory = (amount) => {
  if (!amount || !parseInt(amount)) return false;
  return amount >= 0 && amount <= INVENTORY_LEVELS_CONFIGURATION.LOW;
};

const isMediumInventory = (amount) => {
  if (!amount || !parseInt(amount)) return false;
  return (
    amount > INVENTORY_LEVELS_CONFIGURATION.LOW &&
    amount <= INVENTORY_LEVELS_CONFIGURATION.MEDIUM
  );
};

const isHighInventory = (amount) => {
  if (!amount || !parseInt(amount)) return false;
  return (
    amount > INVENTORY_LEVELS_CONFIGURATION.MEDIUM &&
    amount <= INVENTORY_LEVELS_CONFIGURATION.HIGH
  );
};

export const INVENTORY_LEVELS = {
  getStylesByInventoryAmount: (amount, theme) => {
    if (!amount || !parseInt(amount)) return { color: "#fff", bgColor: "#000" };
    if (isLowInventory(amount))
      return { color: "#fff", bgColor: theme.palette.error.main };
    if (isMediumInventory(amount)) return { bgColor: theme.palette.grey.A400 };
    if (isHighInventory(amount))
      return { bgColor: theme.palette.success.light };
    return { color: "#fff", bgColor: "#000" };
  },
};
