import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CsvUpload from './components/CsvUpload'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-content">
        <Hero />
        <CsvUpload />
      </main>
    </div>
  )
}

export default App
