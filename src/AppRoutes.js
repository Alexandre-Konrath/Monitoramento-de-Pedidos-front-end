import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/' element={<LoginPage />}/>
    </Routes>
  )
}
