
    document.querySelector('.scroll-down').addEventListener('click', () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    });

    const publicationsData = {
      journals: [
        {
          year: "2024",
          title: "Navigating the Landscape: Safeguarding Privacy and Security in the Era of Ambient Intelligence within Healthcare Settings",
          authors: "Tarun Vats, Sudhakar Kumar, Sunil K Singh, Uday Madan, Mehak Preet, Varsha Arya, Ritika Bansal & Ammar Almomani"
        },
        {
          year: "2024",
          title: "Sustainable and Intelligent Time-Series Models for Epidemic Disease Forecasting and Analysis",
          authors: "Anureet Chhabra, Dr. Sunil K. Singh, Akash Sharma, Sudhakar Kumar, Brij B. Gupta, Varsha Arya, Kwok Tai Chui"
        },
        {
          year: "2023",
          title: "A novel hybrid model integrating MFCC and acoustic parameters for voice disorder detection",
          authors: "Vyom Verma, Anish Benjwal, Amit Chhabra, Sunil K. Singh, Sudhakar Kumar, Brij B. Gupta, Varsha Arya & Kwok Tai Chui"
        },
        {
          year: "2023",
          title: "Explainable context-aware IoT framework using human digital twin for healthcare",
          authors: "Tarun Vats, Sunil K. Singh, Sudhakar Kumar, Brij B. Gupta, Shabeg Singh Gill, Varsha Arya & Wadee Alhalabi"
        },
        {
          year: "2023",
          title: "Evaluating the Sustainable COVID-19 Vaccination Framework of India Using Recurrent Neural Networks",
          authors: "Anshul Gupta, Sunil K. Singh, Brij B. Gupta, Muskaan Chopra & Shabeg Singh Gill"
        },
        {
          year: "2023",
          title: "Ultralightweight, Privacy preserved, and Secure RFID-based authentication protocol for VIoT Networks",
          authors: "Rakesh Kumar, Sunil K. Singh & D. K. Lobiyal"
        },
        {
          year: "2022",
          title: "Analysis & Prognosis of Sustainable Development Goals using Big Data-based Approach during COVID-19 Pandemic",
          authors: "Muskaan Chopra, Dr. Sunil K. Singh, Anshul Gupta, Kriti Aggarwal, Brij Gupta, Francesco Colace"
        },
        {
          year: "2022",
          title: "An efficient hardware supported and parallelization architecture for intelligent systems to overcome speculative overheads",
          authors: "Sudhakar Kumar, Dr. Sunil K. Singh, Naveen Aggarwal, Brij B Gupta, Wadee Alhalabi, Shahab S Band"
        },
        {
          year: "2022",
          title: "Secure Internet of Behavior (IOB): Challenges and Future Directions",
          authors: "SIDDHARTH SINGH Khati, Dr. Sunil K. Singh, AKASH Sharma"
        },
        {
          year: "2022",
          title: "A Comparative Study of Generative Adversarial Networks for Text-to-Image Synthesis",
          authors: "Muskaan Chopra, Dr. Sunil K. Singh, Akhil Sharma, Shabeg Singh Gill"
        }
      ],
      books: [
        {
          year: "2023",
          title: "Speculative Parallelism on Multicore Chip Architecture Strengthen Green Computing Concept",
          authors: "Sudhakar Kumar, Sunil Kr. Singh & Naveen Aggarwal"
        },
        {
          year: "2023",
          title: "A Novel Deep Federated Learning-Based Model to Enhance Privacy in Critical Infrastructure Systems",
          authors: "Akash Sharma, Sunil K. Singh, Anureet Chhabra, Sudhakar Kumar, Varsha Arya, Massoud Moslehpour"
        },
        {
          year: "2023",
          title: "Communication structure for Vehicular Internet of Things (VIoTs) and review for vehicular networks",
          authors: "Rakesh Kumar, Sunil K. Singh & D.K. Lobiyal"
        },
        {
          year: "2023",
          title: "Impact of Artificial Intelligence and the Internet of Things in Modern Times and Hereafter: An Investigative Analysis",
          authors: "Anshul Gupta, Sunil Kr Singh, Muskaan Chopra"
        },
        {
          year: "2023",
          title: "A Novel Transfer Learning-Based Model for Ultrasound Breast Cancer Image Classification",
          authors: "Saksham Gupta, Satvik Agrawal, Dr. Sunil K. Singh, Sudhakar Kumar"
        },
        {
          year: "2022",
          title: "SDN-Aided Edge Computing-Enabled AI for IoT and Smart Cities",
          authors: "Rashandeep Singh, Dr. Sunil K. Singh, Sudhakar Kumar, Shabeg Singh Gill"
        },
        {
          year: "2022",
          title: "An Inquisitive Prospect on the Shift Toward Online Media, Before, During, and After the COVID-19 Pandemic: A Technological Analysis",
          authors: "Anshul Gupta, Dr. Sunil K. Singh, Muskaan Chopra, Shabeg Singh Gill"
        },
        {
          year: "2022",
          title: "Role of Social Media in the COVID-19 Pandemic: A Literature Review",
          authors: "Kriti Aggarwal, Dr. Sunil K. Singh, Muskaan Chopra, Sudhakar Kumar"
        },
        {
          year: "2022",
          title: "Predicting Catastrophic Events Using Machine Learning Models for Natural Language Processing",
          authors: "Muskaan Chopra, Dr. Sunil K. Singh, Kriti Aggarwal, Anshul Gupta"
        }
      ],
      conferences: [
        {
          year: "2022",
          title: "Deep Learning in Robotics for Strengthening Industry 4.0.: Opportunities, Challenges and Future Directions",
          authors: "Kriti Aggarwal, Dr. Sunil K. Singh, Muskaan Chopra, Sudhakar Kumar, Francesco Colace"
        },
        {
          year: "2024",
          title: "Revolutionizing Healthcare Systems: Synergistic Multimodal Ensemble Learning & Knowledge Transfer for Lung Cancer Delineation & Taxonomy",
          authors: "Aishita Sharma, Dr. Sunil K Singh, Sudhakar Kumar, Mehak Preet, Brij B Gupta, Varsha Arya, Kwok Tai Chui"
        },
        {
          year: "2024",
          title: "Sustainable Data Dependency Resolution Architectural Framework to Achieve Energy Efficiency Using Speculative Parallelization",
          authors: "Sudhakar Kumar, Dr. Sunil K. Singh & Naveen Aggarwal"
        },
        {
          year: "2023",
          title: "Forecasting Air Pollution for Environment and Good Health Using Artificial Intelligence",
          authors: "Neelam Yadav, Sunil K Singh, Dinesh Sharma"
        },
        {
          year: "2023",
          title: "Routing of Vehicular IoT Networks based on various routing Metrics, Characteristics, and Properties",
          authors: "Rakesh Kumar, Sunil K. Singh & D.K. Lobiyal"
        },
        {
          year: "2023",
          title: "A Novel Transfer Learning-Based Model for Ultrasound Breast Cancer Image Classification",
          authors: "Saksham Gupta, Satvik Agrawal, Dr. Sunil K. Singh, Sudhakar Kumar"
        },
        {
          year: "2023",
          title: "Fuzzy Based Clustering of Consumers' Big Data in Industrial Applications",
          authors: "Akash Sharma, Dr. Sunil K. Singh, Eshita Badwal, Sudhakar Kumar, Brij B Gupta, Varsha Arya, Kwok Tai Chui, Domenico Santaniello"
        },
        {
          year: "2022",
          title: "Efficient Loop Unrolling Factor Prediction Algorithm using Machine Learning Models",
          authors: "Inderpreet Singh, Dr. Sunil K. Singh, Rashandeep Singh, Sudhakar Kumar"
        },
        {
          year: "2022",
          title: "Assess and Analysis Covid-19 Immunization Process: A Data Science Approach to make India self-reliant and safe",
          authors: "Muskaan Chopra, Dr. Sunil K. Singh, Gopal Mengi, Devashish Gupta"
        },
        {
          year: "2022",
          title: "Impact and Usability of Artificial Intelligence in Manufacturing Workflow to Empower Industry 4.0",
          authors: "Muskaan Chopra, Dr. Sunil K. Singh, Sidharth Sharma, Deepak Mahto"
        },
        {
          year: "2022",
          title: "Efficient speculative parallelization architecture for overcoming speculation overheads",
          authors: "Sudhakar Kumar, Dr. Sunil K. Singh, Naveen Aggarwal, Kriti Aggarwal"
        },
        {
          year: "2022",
          title: "Exploring Convolutional Neural Network in Computer Vision based Image Classification",
          authors: "Parnit Kaur, Dr. Sunil K. Singh, Inderpreet Singh, Sudhakar Kumar"
        },
        {
          year: "2022",
          title: "Security of Android Banking Mobile Apps: Challenges and Opportunities",
          authors: "Akash Sharma, Dr. Sunil K. Singh, Sudhakar Kumar, Anureet Chhabra, Saksham Gupta"
        },
        {
          year: "2022",
          title: "Sustainable Framework for Metaverse Security and Privacy: Opportunities and Challenges",
          authors: "Manraj Singh, Dr. Sunil K. Singh, Sudhakar Kumar, Uday Madan, Tamanna Maan"
        },
        {
          year: "2021",
          title: "Automated Machine Learning (AutoML): The Future of Computational Intelligence",
          authors: "Gopal Mengi, Dr. Sunil K. Singh, Sudhakar Kumar, Deepak Mahto, Anamika Sharma"
        },
        {
          year: "2021",
          title: "Dropout-VGG based Convolutional Neural Network for Traffic Sign Categorization",
          authors: "Inderpreet Singh, Dr. Sunil K. Singh, Sudhakar Kumar, Kriti Aggarwal"
        }
      ]
    };

    let activeTab = "journals";
    let searchTerm = "";
    let sortConfig = { key: "year", direction: "desc" };

    function renderTable() {
      const tableBody = document.getElementById("pubBody");
      tableBody.innerHTML = "";

      let filtered = publicationsData[activeTab].filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.authors.toLowerCase().includes(searchTerm) ||
        item.year.includes(searchTerm)
      );

      filtered.sort((a, b) => {
        if (sortConfig.key === "year") {
          return sortConfig.direction === "asc"
            ? a.year - b.year
            : b.year - a.year;
        } else {
          return sortConfig.direction === "asc"
            ? a[sortConfig.key].localeCompare(b[sortConfig.key])
            : b[sortConfig.key].localeCompare(a[sortConfig.key]);
        }
      });

      filtered.forEach(item => {
        tableBody.innerHTML += `
      <tr class="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200 group">
        <td class="p-4 text-blue-400 whitespace-nowrap">
          <div class="flex items-center space-x-2">
            <i data-feather="calendar" class="w-4 h-4"></i>
            <span>${item.year}</span>
          </div>
        </td>
        <td class="p-4">
          <div class="flex items-center justify-between group">
            <span class="text-black group-hover:text-blue-400 transition-colors duration-200">${item.title}</span>
            <i data-feather="external-link" class="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
          </div>
        </td>
        <td class="p-4 text-gray-400">
          <div class="flex items-center space-x-2">
            <i data-feather="user" class="w-4 h-4 flex-shrink-0"></i>
            <span>${item.authors}</span>
          </div>
        </td>
      </tr>
    `;
      });

      feather.replace();
    }

    
    document.querySelectorAll("[data-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        document.querySelectorAll("[data-tab]").forEach(b => {
          b.classList.remove("tab-active");
          b.classList.add("tab-inactive");
        });
        btn.classList.remove("tab-inactive");
        btn.classList.add("tab-active");
        renderTable();
      });
    });

  
    document.getElementById("searchInput").addEventListener("input", (e) => {
      searchTerm = e.target.value.toLowerCase();
      renderTable();
    });

   
    document.querySelectorAll(".sort-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-key");
        sortConfig.direction = (sortConfig.key === key && sortConfig.direction === "asc") ? "desc" : "asc";
        sortConfig.key = key;
        renderTable();
      });
    });

    renderTable();

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of card is in view
  );

  document.querySelectorAll(".timeline-item").forEach(item => {
    observer.observe(item);
  });
});


// Initialize particles.js for Hero
particlesJS('hero-particles', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#2563eb" }, // blue particles
    shape: { type: "circle" },
    opacity: { value: 0.8, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#3b82f6",
      opacity: 0.3,
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
