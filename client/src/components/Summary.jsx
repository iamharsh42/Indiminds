import React, { useState, useEffect } from "react";

const Summary = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch("http://localhost:3000/summary");
        const result = await response.json();
        if (result.message) {
          setSummary(result.message);
        }
      } catch (error) {
        console.error("Error fetching summary data:", error);
      }
    };
    fetchSummary();
  }, []);

  const getTextColor = (value) => {
    return value > 0 ? "text-green-600" : value < 0 ? "text-red-600" : "text-blue-600";
  };

  return (
    <>
    <div className="bg-white p-4 rounded-xl shadow-lg margin-4 max-w-7xl mx-auto">
    <h2 className="text-2xl font-semibold text-center">Live Position Summary</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  max-w-7xl mx-auto">
      {summary.map((item, index) => (
        <div key={index} className="p-4 shadow-lg border rounded-xl bg-white">
          <h2 className="text-lg font-semibold">Dealer: {item.Dealer}</h2>
          <p className="text-gray-600">Exchange: {item.Exchange}</p>
          <p className="text-gray-600">Currency: {item.Currency}</p>
          <p className="text-gray-600">Gross P&L: <span className={getTextColor(item.GrossPL)}>{item.GrossPL}</span></p>
          <p className="text-gray-600">Exposure: <span className={getTextColor(item.Exposure)}>{item.Exposure}</span></p>
          <p className="text-gray-600">Exp. Margin: <span className={getTextColor(item.ExpMargin)}>{item.ExpMargin}</span></p>
          <p className="text-gray-600">Span Margin: <span className={getTextColor(item.SpanMargin)}>{item.SpanMargin}</span></p>
          <p className="text-gray-600">Total Margin: <span className={getTextColor(item.TotMargin)}>{item.TotMargin}</span></p>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Summary;
