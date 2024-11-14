import React, { useState } from "react";

const AddTransaction = ({ isOpen, onClose, onAddTransaction }) => {
  const [formData, setFormData] = useState({
    type: "",
    amount: "",
    date: "",
    category: "",
    notes: "",
  });

  const addTransaction = (e) => {
    e.preventDefault();
    if (!formData.type || !formData.amount || !formData.date || !formData.category) return;
    const payload = { ...formData, amount: parseFloat(formData.amount) };
    onAddTransaction(payload);
    onClose();
    setFormData({
      date: "",
      category: "",
      type: "",
      amount: "",
      notes: "",
    });
  };

  const closeAddTransaction = () => {
    setFormData({
      date: "",
      category: "",
      type: "",
      amount: "",
      notes: "",
    });
    onClose()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg border border-gray-100 w-[30%] relative">
        <button
          onClick={() => {closeAddTransaction()}}
          className="text-gray-500 font-qanelas_b hover:text-error absolute top-4 right-4"
        >
          Close
        </button>
        <h2 className="text-[20px] font-qanelas_b text-center mb-4">
          Add Transaction
        </h2>
        <form
          onSubmit={addTransaction}
          className="p-4 bg-white rounded space-y-4"
        >
          <div>
            <label className="text-sm font-medium">Transaction Type</label>
            <select
              value={formData.type}
              name="type"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Amount</label>
            <input
              type="number"
              value={formData.amount}
              name="amount"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              value={formData.date}
              name="date"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Category</label>
            <input
              type="text"
              value={formData.category}
              name="category"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Notes (optional)</label>
            <textarea
              value={formData.notes}
              name="notes"
              onChange={handleChange}
              id="notes"
              rows={4}
              className="w-full p-2 border rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#E21C37] hover:bg-[#47141b] text-white py-2 px-4 rounded-md"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
