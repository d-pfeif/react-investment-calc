import { useState } from "react"
import TableRow from "./TableRow";

function Table(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((x) => (
          <TableRow
            key={x.year}
            year={x.year}
            savingsEndOfYear={x.savingsEndOfYear}
            yearlyInterest={x.yearlyInterest}
            yearlyContribution={x.yearlyContribution}
            totalInterestGained={x.totalInterestGained}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table