import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@lottiefiles/lottie-player";
import "./App.css";



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div id="hero-particles"></div>
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
          src="assets\map.png"
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

              {/* Card 2 */}
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



    </>

  );
}



export default App;
