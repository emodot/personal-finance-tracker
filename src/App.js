import React, { useState, useEffect } from "react";
import { saveTransactions, loadTransactions } from "./utils/store";

function App() {
  const [transactions, setTransactions] = useState(loadTransactions());

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center">
        David's Finance Tracker
      </h1>
    </div>
  );
}

export default App;
