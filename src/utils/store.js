export const saveTransactions = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

export const loadTransactions = () => {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
};
