import React from 'react';

const CurrencyDropdown = ({ currencies, selectedCurrency, handleChangeCurrency }) => {
  return (
    <select value={selectedCurrency} onChange={(e) => handleChangeCurrency(e.target.value)}>
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
