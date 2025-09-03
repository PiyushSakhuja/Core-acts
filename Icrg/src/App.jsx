
import AOS from "aos";
import "aos/dist/aos.css";
import "@lottiefiles/lottie-player";
import "./App.css";
import map from "./assets/map.png";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import React, { useEffect, useState } from "react";
import React from 'react';
import TimelineSection from './components/TimelineSection';




function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, 
  });
}, []);


  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setEngineReady(true));
  }, []);


  return (
    <>
      <section className="hero">
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        
      {/* Particles wrapper */}
      <div id="hero-particles">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: { value: "transparent" }, // ✅ No global background
            },
            fullScreen: {
              enable: false, // ✅ VERY IMPORTANT (Prevents covering entire page)
            },
            particles: {
              number: { value: 30 },
               color: { value: "#2563eb" },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              links: { enable: true, color: "#3498db" },
            },
          }}
        />
      </div>
        <div className="hero-circle left"></div>
        <div className="hero-circle right"></div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="start">
              <i className="fa-solid fa-globe"></i>
              <span>Global Research Initiative</span>
            </div>
            <h1>International Research &amp; Sponsored Projects</h1>
            <p>
              Fostering Global Innovation and Collaboration through groundbreaking
              research initiatives
            </p>
            <div>
              <a href="#" className="btn btn-primary">
                See Our Past Events{" "}
                <i className="fa-solid fa-arrow-right arrow-icon"></i>
              </a>
              <a href="#" className="btn btn-outline btn-join-us">
                Join Us
              </a>
            </div>
          </div>

          <div className="hero-animation">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json"
              background="transparent"
              speed="1"
              classname="hero-lottie"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>

        <div className="scroll-down">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </section>

      <section className="container container-padding-vertical">
        <div className="bubble">
          <span>A CCET Initiative</span>
        </div>

        <h2 className="section-title">
          Intelligent Computing and Research Group (ICRG)
        </h2>

        <div className="research-card">
          <div className="description">
            <h3 className="gradient-title">CCET ACM Student</h3>
            <p>
              There is a wide range of topics we investigate, including data mining,
              neural networks, fuzzy systems, evolutionary optimization, machine
              learning, pattern recognition, user-adaptive systems, computer graphics,
              computer vision, and bioinformatics, all under the common denominator of
              intelligent, nature-inspired methods and approaches to studying,
              modeling, and simulating complex systems that improve learnability,
              adaptability, and efficiency, these develop capabilities to study,
              model, and simulate complex systems that enhance their efficiency,
              adaptability, and learnability.
            </p>
          </div>

          <div className="objectives" data-aos="fade-up">
            <h3 className="gradient-title" data-aos="zoom-in">
              Objectives of Research
            </h3>

            <div className="objectives-list">
              <div className="objective-card" data-aos="fade-up" data-aos-delay="100">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="number">1</div>
                  <p>
                    Conducting research of global acclaim and world-class quality in
                    the analysis, design, and application of CI techniques.
                  </p>
                </div>
              </div>

              <div className="objective-card" data-aos="fade-up" data-aos-delay="200">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="number">2</div>
                  <p>To provide excellent instruction in CI disciplines.</p>
                </div>
              </div>

              <div className="objective-card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="number">3</div>
                  <p>
                    Bringing our knowledge and experience to the industry, and raising
                    funds through research initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container container-padding-vertical container-text-center">
        <h2 className="section-title" data-aos="zoom-in">
          Our Global Research Network
        </h2>

        <img
          src={map}
          data-aos="fade-up"
          data-aos-delay="100"
          className="map-image"
          alt="Global research network map"
        />
      </section>

      <section className="container container-padding-vertical container-text-center">
        <h2 className="section-title" data-aos="zoom-in">
          Our Faculty
        </h2>

        <section className="faculty-section">
          <div className="bg-effects">
            <div className="bg-circle top-circle"></div>
            <div className="bg-circle bottom-circle"></div>
          </div>

          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <div className="tag">Our Leadership</div>
              <h2>Faculty Mentor | Faculty Sponsor</h2>
              <div className="divider"></div>
            </div>

            <div className="faculty-grid">
              {/* Card 1 */}
              <div className="faculty-card" data-aos="fade-right" data-aos-delay="100">
                <div className="hover-bg"></div>
                <div className="card-content">
                  <div className="profile-img">
                    <div className="img-glow"></div>
                    <img
                      src="assets/mentor-2.png"
                      alt="Dr. Sunil K. Singh"
                    />
                  </div>
                  <div className="text-center">
                    <h3>Dr. Sunil K. Singh</h3>
                    <p className="role">Faculty Mentor</p>
                    <p className="position">Professor &amp; Head of Dept.</p>
                    <p className="institution">CCET, Chandigarh</p>
                    <p className="department">COMPUTER SCI. &amp; ENG. DEPT.</p>
                    <p className="orcid">ORCID ID: 0000-0003-4876-7190</p>
                    <div className="social-links">
                      <a href="#">
                        <img src="assets/mail.png" alt="Mail" />
                      </a>
                      <a href="https://www.linkedin.com/in/sudhakarkumar5/">
                        <img src="images/linkedin.png" alt="LinkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="faculty-card" data-aos="fade-right" data-aos-delay="100">
                <div className="hover-bg"></div>
                <div className="card-content">
                  <div className="profile-img">
                    <div className="img-glow"></div>
                    <img
                      src="assets/mentor3.png"
                      alt="Dr. Sudhakar Kumar"
                    />
                  </div>
                  <div className="text-center">
                    <h3>Dr. Sudhakar Kumar</h3>
                    <p className="role">Faculty Sponsor</p>
                    <p className="position">Assistant Professor</p>
                    <p className="institution">CCET, Chandigarh</p>
                    <p className="department">COMPUTER SCI. &amp; ENG. DEPT.</p>
                    <p className="orcid">ORCID ID: 0000-0001-7928-4234</p>
                    <div className="social-links">
                      <a href="#">
                        <img src="assets/mail.png" alt="Mail" />
                      </a>
                      <a href="https://www.linkedin.com/in/drsks/">
                        <img src="assets/linkedin.png" alt="LinkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

<TimelineSection />


      <section className="container-stat container container-padding-vertical">
        <div className="stats">
          <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
            <i className="fa-solid fa-bullseye"></i>
            <h3>100+</h3>
            <p>Active Projects</p>
          </div>

          <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
            <i className="fa-solid fa-globe"></i>
            <h3>10+</h3>
            <p>Partner Countries</p>
          </div>

          <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
            <i className="fa-solid fa-award"></i>
            <h3>$25M+</h3>
            <p>Research Funding</p>
          </div>
        </div>
      </section>


      <section className="publications-section">
        <div className="publications-container">

          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Research Publications</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Explore our latest research contributions and academic publications
            </p>
          </div>


          <div
            className="search-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <i
              data-feather="search"
              className="search-icon"
            ></i>
            <input
              id="searchInput"
              type="text"
              placeholder="Search publications..."
              className="search-input"
            />
          </div>


          <div
            className="tabs"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="tab tab-active" data-tab="journals">Journal Papers</button>
            <button className="tab tab-inactive" data-tab="books">Books/Book Chapters</button>
            <button className="tab tab-inactive" data-tab="conferences">Conference Papers</button>
          </div>


          <div
            className="table-wrapper"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="table-container">
              <table id="pubTable">
                <thead>
                  <tr>
                    <th className="sortable" data-key="year">
                      <div className="sort-header">
                        <span>Year</span>
                        <i data-feather="arrow-up-down"></i>
                      </div>
                    </th>
                    <th className="sortable" data-key="title">
                      <div className="sort-header">
                        <span>Title</span>
                        <i data-feather="arrow-up-down"></i>
                      </div>
                    </th>
                    <th className="sortable" data-key="authors">
                      <div className="sort-header">
                        <span>Authors</span>
                        <i data-feather="arrow-up-down"></i>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody id="pubBody"></tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      <section className="container-stat container container-padding-vertical">
        <h2 className="section-title" data-aos="zoom-in">
          Events Organized By The Team
        </h2>
        <div className="events">
          <div className="event-card" data-aos="fade-right" data-aos-delay="100">
            <img src="images/event1.jpg" alt="Blockchain Technology" />
            <h4>Blockchain Technology</h4>
            <p>
              CASC Under AICTE SPICES is glad to announce a session on
              blockchain, covering hashing, proof of work, and more.
            </p>
          </div>
          <div className="event-card" data-aos="fade-up" data-aos-delay="200">
            <img src="images/event2.jpg" alt="Computer Vision Syndrome" />
            <h4>Computer Vision Syndrome</h4>
            <p>
              Insights about caring for your eyes from computers and measures to
              improve health.
            </p>
          </div>
          <div className="event-card" data-aos="fade-left" data-aos-delay="300">
            <img
              src="images/event3.jpg"
              alt="Robotics and Embedded Systems"
            />
            <h4>Robotics and Embedded Systems</h4>
            <p>
              Workshop on Arduino and Embedded Systems with hands-on experience.
            </p>
          </div>
        </div>
      </section>


      <section className="container">
        <div className="cta" data-aos="fade-up">
          <h2 className="section-title" data-aos="zoom-in">
            Join Our Research Community
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Connect with researchers worldwide and contribute to groundbreaking
            innovations.
          </p>
          <a
            href="#"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Join Us <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
          </a>
        </div>
      </section>


    </>

  );
}



export default App;
