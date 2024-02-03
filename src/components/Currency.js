import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div
      style={{
        padding: "17px",
        backgroundColor: "lightgreen",
        borderRadius: "5px",
        color: "white",
        fontWeight: "medium",
      }}
    >
      {" "}
      Currency{" "}
      {
        <select
          style={{
            backgroundColor: "lightgreen",
            border: "none",
            color: "white",
          }}
          name="Currency"
          id="Currency"
          onChange={handleCurrencyChange}
        >
          <option value="£">Uk(£)</option>
          <option value="₹">India(₹)</option>
          <option value="€">Europe(€)</option>
          <option value="CAD">Canada(CAD)</option>
        </select>
      }
    </div>
  );
};

export default Currency;
