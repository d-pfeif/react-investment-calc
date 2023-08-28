import { useState } from "react"

function Form(props) {
  const [currentSavings, setCurrentSavings] = useState(0)
  const [yearlyContribution, setYearlyContribution] = useState(0)
  const [expectedReturn, setExpectedReturn] = useState(0)
  const [duration, setDuration] = useState(0)

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let savings = currentSavings; // feel free to change the shape of this input object!
    const returns = expectedReturn / 100;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * returns;
      savings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    props.storeYearlyData(yearlyData)
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!currentSavings || !yearlyContribution || !expectedReturn || !duration) {
      return
    }
    calculateHandler()
  };
  
  const formResetHandler = () => {
    setCurrentSavings(0)
    setYearlyContribution(0)
    setExpectedReturn(0)
    setDuration(0)
    props.storeYearlyData([])
  };

  return (
    <form className="form" onReset={formResetHandler} onSubmit={formSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={(event) => setCurrentSavings(event.target.value)} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={(event) => setYearlyContribution(event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={(event) => setExpectedReturn(event.target.value / 100)} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={(event) => setDuration(event.target.value)} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
