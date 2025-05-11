
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Input from './components/Input'
import BtnContainer from './components/BtnContainer'

function App() {
  return (
    <div className="container ">
      <div id='calculator' className="calculator bg-light">
     <Input/>
     <BtnContainer/>
      </div>
    </div>
  )
}

export default App
