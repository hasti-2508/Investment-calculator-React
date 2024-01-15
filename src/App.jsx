import Header  from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react"


function App() {

const[userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 12,
    duration : 10
});

function handleChange(inputIdentifier, newValue)
{
setUserInput(preInput => {
    return {
        ...preInput,
        [inputIdentifier]: +newValue //this plus here will force the conversion of newValue from string to number.
    };
});
}

const isValid = userInput.duration >= 1;
 
  return (
    <>
    <Header />
    <UserInput  Input={userInput}  onChange={handleChange} />
    {!isValid && <p className="center">Please, Enter valid duration.</p>}
    {isValid && <Result Input={userInput} />} 
    </>
  )
}

export default App
