import React from 'react';
import './App.css';
import profileImage from './assets/profile.png';
import useIntersectionObserver from './useIntersectionObserver';
import ProjectCarousel from './assets/ProjectCarousel';

function App() {
  // Intersection Observer for Profile section
  const { ref: homeRef, isVisible: isHomeVisible } = useIntersectionObserver();
  // Intersection Observer for About section
  const { ref: aboutRef, isVisible: isAboutVisible } = useIntersectionObserver();

  // Intersection Observer for Experiences section
  const { ref: expRef, isVisible: isExpVisible } = useIntersectionObserver();

  return (
    <div className="App">
      {/* Navbar */}
      <nav id = "navbar" className="navbar">
        <div className="navbar-brand">DENZEL'S PORTFOLIO</div>
        <ul className="navbar-links">
          <li><a href="#home">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section with Image */}
      <header id="home" className="hero" ref={homeRef}>
        <h2 style={{ opacity: 0, fontSize: 19}}>WELCOME!</h2>
        <div className={`hero-content hero-flex ${isHomeVisible ? 'animate' : ''}`}>
          <div className="hero-text">
            <h1>Hello, I am <span className="highlight"><br />Denzel Donato!</span></h1>
            <p className="subtitle">Computer Engineer | Aspiring Software Engineer</p>
            <a className="btn" href="#contact">WANT TO HIRE ME?</a>
          </div>
            <div className="hero-image">
              <div className="profile-ring">
                <div className="rotating-border"></div>
                <img src={profileImage} alt="Denzel Donato" className="profile-image" />
              </div>
            </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section" ref={aboutRef}>
        <div>
          <h2 style={{ color: '#ffe100' }}>ABOUT ME</h2>
        </div>
        <p
          className={`profile-description ${isAboutVisible ? 'animate' : ''}`}
          style={{ marginLeft: '310px', marginRight: '310px', textAlign: 'justify' }}
        >
          I’m a Computer Engineering graduate with a passion for solving real-world problems through technology. With a solid foundation in both hardware and software, I’m eager to apply my skills to innovative projects that push my boundaries. I’m seeking opportunities to leverage my expertise in software engineering to create meaningful, impactful solutions.
        </p>
        <div className="skills-table">
          <div className="column">
            <h3>TECHNICAL SKILLS</h3>
            <ul>
              {[
                { src: './assets/Web Programming.png', alt: 'Web', text: 'Web Programming (HTML, CSS, JS, ReactJS)' },
                { src: './assets/Visual Studio.png', alt: 'VS', text: 'Mobile and Windows Forms Applications (Visual Studio)' },
                { src: './assets/High Level.png', alt: 'High', text: 'High Level Programming Languages (C++, Python, C#)' },
                { src: './assets/Database.png', alt: 'DB', text: 'Backend Development (SQL, Firebase, PHP)' },
                { src: './assets/Microcontrollers.png', alt: 'Mic', text: 'Microcontrollers (Arduino, ESP32, PIC18)' },
                { src: './assets/EngMath.png', alt: 'Eng', text: 'Engineering Mathematics' },
                { src: './assets/ML.png', alt: 'ML', text: 'AI (Machine Learning)' },
              ].map((skill, index) => (
                <li key={index} className={isAboutVisible ? 'animate' : ''}>
                  <img src={require(`${skill.src}`)} alt={skill.alt} className="skill-icon" />
                  {skill.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h3>SOFT SKILLS</h3>
            <ul>
              {[
                { src: './assets/prob.png', alt: 'Prob', text: 'Problem Solving' },
                { src: './assets/team.png', alt: 'Team', text: 'Team Collaboration' },
                { src: './assets/time.png', alt: 'Time', text: 'Time Management' },
                { src: './assets/adapt.png', alt: 'Adapt', text: 'Adaptability' },
                { src: './assets/create.png', alt: 'Create', text: 'Creativity' },
                { src: './assets/pos.png', alt: 'Pos', text: 'Positive Attitude' },
                { src: './assets/work.png', alt: 'Work', text: 'Work Ethic' },
              ].map((skill, index) => (
                <li key={index} style={{ '--delay': `${0.1 * (index + 1)}s` } as React.CSSProperties} className={isAboutVisible ? 'animate' : ''}>
                  <img src={require(`${skill.src}`)} alt={skill.alt} className="skill-icon" />
                  {skill.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id = "experiences" className="section" ref={expRef}>
          <div>
            <h2 style={{ color: '#ffe100' }}>EXPERIENCES</h2>
              <div className={`experience-card ${isExpVisible ? 'animate' : ''}`}>
                <img src={require('./assets/tp.png')} alt="Teleperformance Logo" className="experience-logo" />
                <div className="experience-details">
                  <h3>Intern Desktop Support</h3>
                  <h4>Teleperformance, Antipolo</h4>
                  <p className="experience-date">June 2024 – August 2024</p>
                  <p className="experience-description">
                    Supported and debugged technical issues of employees’ devices, specifically on computer hardware, software applications, network connectivity, and system management.
                  </p>
              </div>
          </div>
      </div>
      </section>
    
        
      {/* Projects Section */}
      <section id="projects" className="section">
        <div>
          <h2 style={{ color: '#ffe100' }}>PROJECTS</h2>
          <ProjectCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div>
          <h2 style={{ color: '#ffe100' }}>CONTACT</h2>
        </div>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          You can reach me at these social media platforms:
        </p>

        <div className="contact-card-container">
          <div className="contact-card">
            <img src={require('./assets/gmail.png')} alt="Gmail" className="contact-icon" />
            <a href="mailto:denzeldonato@gmail.com" className="contact-text">
              denzeldonato@gmail.com
            </a>
          </div>
          <div className="contact-card">
            <img src={require('./assets/facebook.png')} alt="Facebook" className="contact-icon" />
            <a
              href="https://web.facebook.com/donatodenzel/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-text"
            >
              Denzel Donato
            </a>
          </div>
          <div className="contact-card">
            <img src={require('./assets/linkedin.png')} alt="LinkedIn" className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/denzel-donato-47a590349/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-text"
            >
              linkedin.com/in/denzel-donato
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Denzel Donato. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;