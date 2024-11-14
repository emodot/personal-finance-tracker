import React, { useState, useEffect } from "react";
import Filter from "./Filter";

const TransactionList = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  const handleFilterChange = (filterCriteria) => {
    const { type, category, minAmount, maxAmount, startDate, endDate } =
      filterCriteria;
    setFilteredTransactions(
      transactions.filter(
        (t) =>
          (!type || t.type === type) &&
          (!category || t.category.includes(category)) &&
          (!minAmount || t.amount >= minAmount) &&
          (!maxAmount || t.amount <= maxAmount) &&
          (!startDate || new Date(t.date) >= new Date(startDate)) &&
          (!endDate || new Date(t.date) <= new Date(endDate))
      )
    );
  };


  const clearFilter = (empty) => {
    const { type, category, minAmount, maxAmount, startDate, endDate } = empty;
    setFilteredTransactions(
      transactions.filter(
        (t) =>
          (!type || t.type === type) &&
          (!category || t.category.includes(category)) &&
          (!minAmount || t.amount >= minAmount) &&
          (!maxAmount || t.amount <= maxAmount) &&
          (!startDate || new Date(t.date) >= new Date(startDate)) &&
          (!endDate || new Date(t.date) <= new Date(endDate))
      )
    );
  };
    const openFilterModal = () => setIsFilterOpen(true);
    const closeFilterModal = () => setIsFilterOpen(false);

  return (
    <div className="mt-4">
      <Filter
        isOpen={isFilterOpen}
        onClose={closeFilterModal}
        onFilterChange={handleFilterChange}
      />

      <div className="flex space-x-2">
        <button
          onClick={openFilterModal}
          className="bg-[#E21C37] text-white font-qanelas_m px-4 py-2 rounded hover:bg-[#47141b]"
        >
          Filter
        </button>
        <button
          onClick={() =>
            clearFilter({
              type: "",
              category: "",
              minAmount: "",
              maxAmount: "",
              startDate: "",
              endDate: "",
            })
          }
          className="text-gray-500 font-qanelas_b hover:text-error"
        >
          Clear
        </button>
      </div>
      <div className="overflow-auto rounded-lg shadow-md mt-4">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Category
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Type
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Amount
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredTransactions.map((transaction, index) => (
              <tr key={index} className="bg-white">
                <td className="p-3 text-sm text-gray-700">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {transaction.category}
                </td>
                <td className="p-3 text-sm text-gray-700 capitalize">
                  {transaction.type}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {transaction.type === "income" ? "+" : "-"}$
                  {transaction.amount.toFixed(2)}
                </td>
                <td className="p-3 text-sm text-gray-500">
                  {transaction.notes || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
