import React, { useState } from 'react';
import './ProjectCarousel.css';

type Project = {
  title: string;
  description: string;
  languages: string[];
  role: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'ACOES Attendance Registration',
    description:
      'An attendance registration website with admin monitoring system for ACOES events academic year 2023-2024 in Adamson University.',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    role: 'Main Programmer (Both Front-end and Back-end Development)',
    image: require('../assets/acoes.png'),
  },
  {
    title: 'BigBrew Zobel Branch POS System',
    description:
      'A POS System website for sales tracking of BigBrew Zobel Branch. It was designed and developed also for better customer service.',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    role: 'Main Programmer (Both Front-end and Back-end Development)',
    image: require('../assets/bigbrew.png'),
  },
  {
    title: 'RFID System',
    description:
      'A RFID system designed for Adamson CPE students. Built in Visual Studio Windows Forms and Arduino for RFID Module implementation.',
    languages: ['C++', 'C#'],
    role: 'Main Programmer (Both Front-end and Back-end Development)',
    image: require('../assets/rfid.png'),
  },
  {
    title: 'WakeSense: Smart Bed Alarm System',
    description:
      'An IoT alarm system with vibration, sound, and light features to mitigate sleep inertia. Comes with mobile app and sleep analytics.',
    languages: ['C++', 'C#'],
    role: 'Main Programmer (Both Front-end and Back-end Development)',
    image: require('../assets/wakesense.jpg'),
  },
];

const ProjectCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animateKey, setAnimateKey] = useState(0); // force re-animation

  const handlePrev = () => {
    setDirection('left');
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAnimateKey((prev) => prev + 1); // trigger re-render
  };

  const handleNext = () => {
    setDirection('right');
    setIndex((prev) => (prev + 1) % projects.length);
    setAnimateKey((prev) => prev + 1); // trigger re-render
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn left" onClick={handlePrev}>‹</button>
      <div key={animateKey} className={`carousel-slide animate-${direction}`}>
        <img src={projects[index].image} alt={projects[index].title} className="project-img" />
        <div className="project-info">
          <h3>{projects[index].title}</h3>
          <p>{projects[index].description}</p>
          <p><strong>Languages Used:</strong> {projects[index].languages.join(', ')}</p>
          <p><strong>Role:</strong> {projects[index].role}</p>
        </div>
      </div>
      <button className="nav-btn right" onClick={handleNext}>›</button>
    </div>
  );
};

export default ProjectCarousel;
