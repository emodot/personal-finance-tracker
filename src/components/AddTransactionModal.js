import React from "react";
import AddTransaction from "./AddTransaction";

const AddTransactionModal = ({ isOpen, onClose, onAddTransaction }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-1/2">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
        <AddTransaction
          onAddTransaction={onAddTransaction}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default AddTransactionModal;
