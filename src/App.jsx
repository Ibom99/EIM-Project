import { Routes, Route } from 'react-router-dom'
import Rudolf from './routes/Rudolf'
import Home from './routes/Home'
import About from './routes/About'
import MResidence from './routes/MResidence'
import ONAResidence from './routes/ONAResidence'
import Projectx from './routes/Projectx'
import Projectv from './routes/Projectv'

import './App.css'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Rudolf' element={<Rudolf />} />
        <Route path ='/MResidence' element={<MResidence />} />
        <Route path='/About' element ={<About />} />
        <Route path='/ONAResidence' element={<ONAResidence />} />
        <Route path='/Projectv'element={<Projectv />} />
        <Route path='/Projectx' element={<Projectx />} />
      </Routes>
    </div>
  )
}

export default App
