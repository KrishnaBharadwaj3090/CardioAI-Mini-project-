import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import About from './pages/About'
import Analytics from './pages/Analytics'
import Chatbot from './pages/Chatbot'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import Prediction from './pages/Prediction'
import Reports from './pages/Reports'
import Results from './pages/Results'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="prediction" element={<Prediction />} />
        <Route path="results" element={<Results />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="reports" element={<Reports />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
