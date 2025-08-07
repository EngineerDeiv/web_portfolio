import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/pages/home'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Aquí puedes agregar más rutas más adelante */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/projects" element={<Projects />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    )
}