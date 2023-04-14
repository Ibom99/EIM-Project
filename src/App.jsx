import { Routes, Route } from 'react-router-dom'
import Rudolf from './routes/Rudolf'
import Home from './routes/Home'
import About from './routes/About'
import MResidence from './routes/MResidence'

import './App.css'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Rudolf' element={<Rudolf />} />
        <Route path ='/MResidence' element={<MResidence />} />
        <Route path='/About' element ={<About />} />
      </Routes>
    </div>
  )
}

export default App
