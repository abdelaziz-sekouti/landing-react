import { BrowserRouter as Router } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <NavigationBar />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App