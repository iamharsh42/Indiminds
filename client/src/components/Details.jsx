import React, { useState, useEffect } from "react";

const Details = () => {
  const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/details");
        const result = await response.json();
        if (result.message) {
          setData(result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getTextColor = (value) => {
    return value > 0 ? "text-green-600" : value < 0 ? "text-red-600" : "text-blue-600";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <div key={index} className="p-4 shadow-lg border rounded-xl bg-white">
          <h2 className="text-lg font-semibold">{item.Symbol} - {item.OptionType}</h2>
          <p className="text-gray-600">Exchange: {item.Exchange}</p>
          <p className="text-gray-600">Strike: {item.Strike}</p>
          <p className="text-gray-600">Expiry: {item.Expiry}</p>
          <p className="text-gray-600">LTP: <span className={getTextColor(item.LTP)}>{item.LTP}</span></p>
          <p className="text-gray-600">MtM: <span className={getTextColor(item.MtM)}>{item.MtM}</span></p>
          <p className="text-gray-600">MtM INR: <span className={getTextColor(item.MtM_INR)}>{item.MtM_INR}</span></p>
          <p className="text-gray-600">Exp: <span className={getTextColor(item.Exp)}>{item.Exp}</span></p>
          <p className="text-gray-600">Exp INR: <span className={getTextColor(item.Exp_INR)}>{item.Exp_INR}</span></p>
        </div>
      ))}
    </div>
  );
};

export default Details;
