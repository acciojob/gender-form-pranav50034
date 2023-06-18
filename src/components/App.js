
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [male, setMale] = useState("")
  let [female, setFemale] = useState("")
  return (
     <div>
        {/* Do not remove the main div */}
        <h2> Select your Gender</h2>
        <form>
           <input name="input" onChange={() => {setMale("male")
          setFemale("")}} type="radio" id="male" />
           <label htmlFor="male">Male</label>
           <input name="input"
              onChange={() => {
                setFemale("female")
                setMale("")
              }
              }
              type="radio"
              id="female"
           />
           <label htmlFor="female">Female</label>
        </form>

        {male && (
           <div>
              <h2>Select your shirt size:</h2>
              <select id="shirt" name="shirtSize">
                 <option value="volvo">Select size</option>
                 <option value="small">Small</option>
                 <option value="medium">Medium</option>
                 <option value="large">Large</option>
              </select>
           </div>
        )}

        {female && (
              <div>
                 <h2>Select your dress size:</h2>
                 <select id="dress" name="dressSize">
                    <option value="volvo">Select size</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                 </select>
              </div>)}
      </div>
  );
}

export default App
