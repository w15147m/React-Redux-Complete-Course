
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Input from './components/Input'
import BtnContainer from './components/BtnContainer'
import { useState } from 'react'

function App() {
  let [calVal, setCalVal] = useState('');
  const btnEvent = (value) =>{
    if(value == 'C'){
      setCalVal('');
    }
    else if (value === '=') {
      try {
      setCalVal(eval(calVal));
      } catch (error) {
        console.log(error);
        
      setCalVal('Error');
      }
    } else {
      setCalVal(calVal + value);
    }}
  return (
    <div className="container ">
      <div id='calculator' className="calculator bg-light">
     <Input  displayVal={calVal}/>
     <BtnContainer onBtnClick ={(e)=> btnEvent(e.target.value)} />
      </div>
    </div>
  )
}

export default App
