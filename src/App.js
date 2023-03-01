import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Dashboard from './components/page/Dashboard'
import Department from './components/page/Department'
import CreateEmployee from './components/page/Create_Employee'
import CreateDepartment from './components/page/Create'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/cr_employee" element={<CreateEmployee />} />
          <Route path="/create" element={<CreateDepartment />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
