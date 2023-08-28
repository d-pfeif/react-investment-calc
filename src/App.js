import { useState } from "react"
import logo from './assets/investment-calculator-logo.png';

import Form from "./components/Form"
import Table from "./components/Table"

function App() {
  const [yearlyData, setYearlyData] = useState()

  const handleStoreYearlyData = (data) => {
    setYearlyData(data)
    console.log(yearlyData);
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form storeYearlyData={handleStoreYearlyData} />
      
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {/* <Table /> */}
      
    </div>
  );
}

export default App;
