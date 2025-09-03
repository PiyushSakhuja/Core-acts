import React, { useEffect } from 'react';
import './TimelineSection.css'; // Move your styles here
import 'aos/dist/aos.css';
import AOS from 'aos';
import particlesJS from 'particles.js';

const TimelineSection = () => {
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

    // Scroll animation effects with parallax
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.filter = 'blur(0)';
          const ratio = entry.boundingClientRect.top / window.innerHeight;
          const parallaxValue = ratio * 100;
          entry.target.style.transform = `translateY(${parallaxValue * 0.2}px)`;
        }
      });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => observer.observe(item));

    // Mouse parallax effect on cards
    const cards = document.querySelectorAll('.timeline-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const x = e.clientX - card.getBoundingClientRect().left;
        const y = e.clientY - card.getBoundingClientRect().top;
        const centerX = card.offsetWidth / 2;
        const centerY = card.offsetHeight / 2;
        const angleX = (y - centerY) / 15;
        const angleY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });

    return () => observer.disconnect(); // Cleanup
  }, []);

  const timelineData = [
    {
      year: '2024',
      amount: '$15,000',
      description:
        'Strategic investments fueling our AI innovation pipeline and community growth initiatives.',
      tags: ['AI Workshop Series', 'Annual Hackathon', 'Research Grants'],
      side: 'left',
      delay: '0.4s'
    },
    {
      year: '2023',
      amount: '$12,000',
      description:
        'Year of expansion with technical workshops and mentorship programs that shaped careers.',
      tags: ['Technical Workshops', 'Mentorship Program'],
      side: 'right',
      delay: '0.8s'
    },
    {
      year: '2022',
      amount: '$8,000',
      description:
        'Our foundation year that established the core programs and community engagement.',
      tags: ['Community Events', 'Learning Resources'],
      side: 'left',
      delay: '1.2s'
    }
  ];

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

          <div className="timeline-container">
            <div className="timeline-line">
              <div className="timeline-line-gradient"></div>
            </div>

            {timelineData.map((item) => (
              <div
                key={item.year}
                className={`timeline-item slide-in-${item.side}`}
                style={{ animationDelay: item.delay }}
              >
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>

                <div className={`timeline-item-content ${item.side}`}>
                  <div className="timeline-card neon-gradient-border">
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
                        {item.amount}
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
