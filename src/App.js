import React, { useState, useEffect } from "react";
import { saveTransactions, loadTransactions } from "./utils/store";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import MetricsChart from "./components/MetricsChart";


function App() {
  const [transactions, setTransactions] = useState(loadTransactions());
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const addTransaction = (transaction) => {
    console.log(transaction);
    
    setTransactions([transaction, ...transactions]);
  };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


  return (
    <div className="pt-[3rem] max-w-[1350px] m-auto min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-qanelas_b text-center">
          David's Finance Tracker
        </h1>
        <button
          onClick={openModal}
          className="bg-[#E21C37] text-white font-qanelas_m px-4 py-2 rounded hover:bg-[#47141b]"
        >
          Add Transaction
        </button>
      </div>
      <div>
        <div className="w-[70%] my-[3rem]">
          <MetricsChart transactions={transactions} />
        </div>
        <TransactionList transactions={transactions} />
      </div>
      <AddTransaction
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddTransaction={addTransaction}
      />
    </div>
  );
}

export default App;
