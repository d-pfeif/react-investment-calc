function TableRow(props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.savingsEndOfYear}</td>
      <td>{props.yearlyInterest}</td>
      <td>{props.totalInterestGained}</td>
      <td>{props.yearlyContribution}</td>
      
      {/* <td>YEAR NUMBER</td>
      <td>TOTAL SAVINGS END OF YEAR</td>
      <td>INTEREST GAINED IN YEAR</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td> */}
    </tr>
  );
}

export default TableRow