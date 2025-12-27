import { BrowserRouter as Router } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import WhatsAppChatbot from './components/WhatsAppChatbot'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavigationBar />
        <main className="grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppChatbot />
      </div>
    </Router>
  )
}

export default App