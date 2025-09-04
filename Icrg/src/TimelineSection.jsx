import React, { useEffect, useState, useRef } from 'react';
import './App.css'; // Move your styles here
import 'aos/dist/aos.css';
import AOS from 'aos';
// import particlesJS from 'particles.js';
// import Particles from "react-tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const TimelineSection = () => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [sortedData, setSortedData] = useState([]);
  const timelineRefs = useRef([]);

  const timelineData = [
    {
      year: '2024',
      amount: 15000,
      description:
        'Strategic investments fueling our AI innovation pipeline and community growth initiatives.',
      tags: ['AI Workshop Series', 'Annual Hackathon', 'Research Grants'],
      side: 'left',
      delay: '0.4s'
    },
    {
      year: '2023',
      amount: 12000,
      description:
        'Year of expansion with technical workshops and mentorship programs that shaped careers.',
      tags: ['Technical Workshops', 'Mentorship Program'],
      side: 'right',
      delay: '0.8s'
    },
    {
      year: '2022',
      amount: 8000,
      description:
        'Our foundation year that established the core programs and community engagement.',
      tags: ['Community Events', 'Learning Resources'],
      side: 'left',
      delay: '1.2s'
    }
  ];
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();

    // Initialize particles.js
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6366F1" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6366F1",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  },[]);

   // Handle sorting logic
  useEffect(() => {
    let sorted = [...timelineData];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
      }
    setSortedData(sorted);
  }, [sortConfig]);

  // Setup IntersectionObserver and mouse parallax
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.filter = 'blur(0)';
            const ratio = entry.boundingClientRect.top / window.innerHeight;
            const parallaxValue = ratio * 100;
            entry.target.style.transform = `translateY(${parallaxValue * 0.2}px)`;
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sortedData]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Mouse parallax effect
  const handleMouseMove = (e, index) => {
    const card = timelineRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = card.offsetWidth / 2;
    const centerY = card.offsetHeight / 2;
    const angleX = (y - centerY) / 15;
    const angleY = (centerX - x) / 15;

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = timelineRefs.current[index];
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };
    
  return (
    <section className="timeline-section">
      <h2 className="timeline-section-title">Timeline</h2>
      <div className="timeline-wrapper">
        <div className="bg-particle" id="particles-js"></div>

        <div className="timeline-content">
          <div className="timeline-header" data-aos="fade-up">
            <h1 className="timeline-title highlight-text" data-aos="zoom-in">
              Funding Evolution
            </h1>
            <p
              className="timeline-subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A visual journey through our growth milestones and financial
              achievements
            </p>
          </div>

             {/* Sorting Buttons */}
          <div className="sort-controls" data-aos="fade-up" data-aos-delay="300">
            <button className="sort-btn" onClick={() => handleSort('year')}>
              Sort by Year
            </button>
            <button className="sort-btn" onClick={() => handleSort('amount')}>
              Sort by Amount
            </button>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line">
              <div className="timeline-line-gradient"></div>
            </div>

            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-item slide-in-${item.side}`}
                style={{ animationDelay: item.delay, opacity: 0, filter: 'blur(5px)' }}
                ref={(el) => (timelineRefs.current[index] = el)}
              >
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>

                <div className={`timeline-item-content ${item.side}`}>
                  <div className="timeline-card neon-gradient-border"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    <div className="timeline-card-header">
                      <span className={`year-badge year-${item.year}`}>
                        {item.year}
                      </span>
                      <span className={`amount-badge amount-${item.year}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item.amount.toLocaleString()}
                      </span>
                    </div>

                    <p className="timeline-description">{item.description}</p>

                    <div className="tags">
                      {item.tags.map((tag, i) => (
                        <span className="tag" key={i}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
