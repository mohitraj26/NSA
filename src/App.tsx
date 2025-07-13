import { Header } from './components/header'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer'
import HomePage from './pages/homepage'
import LoginPage from './pages/login'
import EventsPage from './pages/event'
import ContactPage from './pages/contact'
import AdmissionsPage from './pages/admission'
import AboutPage from './pages/about'
import GalleryPage from './pages/gallery'
import TeachersPage from './pages/teacher'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* Add more routes as needed */}
      </Routes>
    <Footer />

    </>
  )
}

export default App
