import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import SinglePage from './components/pages/SinglePage'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='actors/:id' element={<SinglePage/>}></Route>
      </Routes>
  )
}

export default App
