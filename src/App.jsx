import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Why from './components/Why'
import Deployment from './components/Deployment'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Why />
        <Deployment />
      </main>
      <Footer />
    </div>
  )
}

export default App
