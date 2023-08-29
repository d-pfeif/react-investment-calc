import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";

import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (formData) => {
    const yearlyData = []; // per-year results

    let savings = formData.currentSavings; // feel free to change the shape of this input object!
    let totalInvestedCapitol = 0;
    let totalInterestGained = 0;
    const expectedReturns = formData.expectedReturn / 100;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < formData.duration; i++) {
      const yearlyInterest = savings * expectedReturns;
      savings += yearlyInterest + formData.yearlyContribution;
      totalInvestedCapitol += formData.yearlyContribution;
      totalInterestGained += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: Math.round(savings * 100) / 100,
        yearlyInterest: Math.round(yearlyInterest * 100) / 100,
        totalInterestGained: Math.round(totalInterestGained * 100) / 100,
        yearlyContribution: totalInvestedCapitol,
      });
    }
    console.log(yearlyData);
    setYearlyData(yearlyData);
  };

  const handleFormData = (data) => {
    calculateHandler(data);
  };

  const tableRender =
    yearlyData.length > 0 ? <Table yearlyData={yearlyData} /> : "";

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form onFormData={handleFormData} />
      {tableRender}
    </div>
  );
}

export default App;
