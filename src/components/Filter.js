import React, { useState } from "react";

const Filter = ({ isOpen, onClose, onFilterChange }) => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApplyFilter = () => {
    onFilterChange({
      type,
      category,
      minAmount,
      maxAmount,
      startDate,
      endDate,
    });
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg border border-gray-100 w-[30%] relative">
        <button
          onClick={onClose}
          className="text-gray-500 font-qanelas_b hover:text-error absolute top-4 right-4"
        >
          Close
        </button>
        <h2 className="text-[20px] font-qanelas_b text-center mb-4">
          Filter Transaction
        </h2>
        <div className="p-4 bg-white shadow-md rounded-md space-y-2">
          <div>
            <label>Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="block w-full p-2 border rounded-md"
            >
              <option value="">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Min Amount</label>
            <input
              type="number"
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Max Amount</label>
            <input
              type="number"
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="block w-full p-2 border rounded-md"
            />
          </div>
          <button
            onClick={handleApplyFilter}
            className="w-full bg-[#E21C37] hover:bg-[#47141b] text-white p-2 rounded-md"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
