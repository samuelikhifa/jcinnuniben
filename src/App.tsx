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
            <Route path="/administration" element={<Administration />} />
            {/* <Route path="/administration/Currentexecutives" element={<Currentexecutives />} />
               <Route path="/administration/ Pastadmins" element={< Pastadmins />} />
                <Route path="/administration/ Majorachievements" element={< Majorachievements />} /> */}
            <Route path="/Project" element={<Project />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/Gallery" element={<Gallery />} />
            <Route path="/media/Press" element={<Press />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
