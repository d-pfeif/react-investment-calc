import { useState } from "react"

function Form(props) {
  const [currentSavings, setCurrentSavings] = useState(0)
  const [yearlyContribution, setYearlyContribution] = useState(0)
  const [expectedReturn, setExpectedReturn] = useState(0)
  const [duration, setDuration] = useState(0)

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!currentSavings || !yearlyContribution || !expectedReturn || !duration) {
      return
    }
    props.onFormData({
      currentSavings: Number(currentSavings),
      yearlyContribution: Number(yearlyContribution),
      expectedReturn: Number(expectedReturn),
      duration: Number(duration)
    })
  };
  
  const formResetHandler = () => {
    setCurrentSavings(0)
    setYearlyContribution(0)
    setExpectedReturn(0)
    setDuration(0)
    props.onFormData({
      currentSavings: 0,
      yearlyContribution: 0,
      expectedReturn: 0,
      duration: 0
    })
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
