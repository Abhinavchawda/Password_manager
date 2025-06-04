import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col font-inter antialiased">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;