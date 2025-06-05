import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="min-h-screen flex flex-col font-inter antialiased">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={
                  <ProtectedRoute>
                    <Layout>
                      <Home />
                    </Layout>
                  </ProtectedRoute>
                } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Layout>
                      <Profile />
                    </Layout>
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
          </div>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App;