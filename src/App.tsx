import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Jcinunibenverview from "./pages/About/Jcinunibenverview";
import Jcivision from "./pages/About/Jcivision";
import Administration from "./pages/Administration";
import Project from "./pages/Project";
import Media from "./pages/Media";

import Gallery from "./pages/Media/Gallery";
import Press from "./pages/Media/Press";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/about/Jcinunibenverview"
              element={<Jcinunibenverview />}
            />
            <Route path="/about/Jcivision" element={<Jcivision />} />
            <Route path="/Administration" element={<Administration />} />
            {/* <Route path="/administration/Currentexecutives" element={<Currentexecutives />} />
               <Route path="/administration/ Pastadmins" element={< Pastadmins />} />
                <Route path="/administration/ Majorachievements" element={< Majorachievements />} /> */}
            <Route path="/Project" element={<Project />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/Gallery" element={<Gallery />} />
            <Route path="/media/Press" element={<Press />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
                  <p className="text-xl text-slate-600 mb-8">Page not found</p>
                  <a 
                    href="/" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white font-semibold rounded-lg hover:from-jcin-light-blue hover:to-jcin-dark-blue transition-all duration-200"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
