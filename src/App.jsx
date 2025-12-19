import React from 'react';
import Skills from './components/skills.jsx'; // <-- correct path to Skills.jsx
import Projects from "./components/projects.jsx";
import "@fontsource/inter";
import Contact from "./components/contact.jsx";




function App() {
    return (

        <div className="hero">
            <div style={{height: "200px"}}></div>

            <h1 className={"name"}>Qihao Lin</h1>
            <Skills/>
            <p>Software Engineer | Passionate about building web apps, AI, and technology
                solutions.</p>
            <div style={{height: "200px"}}></div>


            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
