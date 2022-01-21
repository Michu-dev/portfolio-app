import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';



const App = () => {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;