import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import AddStudent from './pages/AddStudent';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import StudentDetails from './pages/StudentDetails';
import Students from './pages/Students';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <main className="container py-4 px-3 px-md-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
