import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CsvUpload from './components/CsvUpload/CsvUpload'
import Footer from './components/Footer/Footer'

function App() {
    // The main App component simply composes all other components together
    // This makes the code modular and easy to understand
    return (
        <div className="app">
            <AnimatedBackground />
            <Navbar />
            <main className="app-content">
                <Hero />
                <CsvUpload />
            </main>
            <Footer />
        </div>
    )
}

export default App
