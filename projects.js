// Project Data - Shashank Vaibhav's Real Projects
const projectsData = {
    1: {
        title: "Algorithmic Trading System",
        category: "Machine Learning",
        image: "https://via.placeholder.com/800x400/6a0dad/ffffff?text=Algorithmic+Trading",
        description: "Achieved 1st place among 40 participants in Seasons of Code by developing a sophisticated quantitative trading pipeline. The system leverages advanced optimization algorithms, comprehensive statistical arbitrage modeling, and rigorous Monte Carlo backtesting, generating $60,000 in backtested profit through systematic alpha generation.",
        technologies: ["Python", "Machine Learning", "Monte Carlo", "Statistical Analysis", "Reinforcement Learning"],
        features: [
            "Won 1st place among 40 participants in Web and Coding Club competition",
            "Implemented multi-armed bandit framework with modified Upper Confidence Bound (UCB) algorithms",
            "Enabled adaptive portfolio optimization and dynamic risk-adjusted allocation",
            "Engineered robust pairs trading strategies integrating Bollinger Bands and RSI momentum indicators",
            "Generated $60,000 in backtested profit through systematic alpha generation",
            "Built modular Python architecture showcasing proficiency in time-series analysis"
        ],
        challenges: "The main challenge was balancing exploration vs exploitation in the multi-armed bandit framework while maintaining risk-adjusted returns. Solved this by implementing modified UCB algorithms that dynamically adjusted portfolio allocation based on market conditions and historical performance.",
        github: "https://github.com/shashankbhogaraju/SoC-2k25-Algorthmic_Trading",
        demo: "#",
        date: "June - July 2025"
    },
    2: {
        title: "ML Feature Extraction and Neuromodulation",
        category: "Machine Learning",
        image: "https://via.placeholder.com/800x400/13ebfa/000000?text=Neuromodulation+Research",
        description: "Bachelor Thesis Project focused on seizure prediction using GRU neural networks on patient EEG traces. Designing online learning pipeline for autonomous on-chip retraining with hardware deployment on 65nm neuromodulation SoC.",
        technologies: ["Python", "GRU", "Deep Learning", "Hardware Design", "Real-time Systems"],
        features: [
            "Ran Python-based simulations on patient EEG traces to evaluate seizure prediction performance",
            "Extensive literature review on retraining methods under tight area, latency, and power budgets",
            "Designing memory-efficient backpropagation and partial weight update strategies for GRUs",
            "Transitioning from offline to fully autonomous on-chip retraining",
            "Planning hardware deployment on 65nm neuromodulation SoC",
            "Benchmarking throughput, specificity, and energy efficiency under real-time conditions"
        ],
        challenges: "Balancing model accuracy with hardware constraints (area, latency, power) for real-time seizure prediction. Developing efficient online learning strategies that can run directly on resource-constrained neuromodulation hardware.",
        
        demo: "#",
        date: "Ongoing (2024-2025)"
    },
    3: {
        title: "Out of Order Superscalar CPU",
        category: "Hardware",
        image: "https://via.placeholder.com/800x400/6a0dad/ffffff?text=Superscalar+CPU",
        description: "Achieved theoretical CPI of 0.5 by designing a dual-issue, 6-stage superscalar processor that exploits instruction-level parallelism. Implemented dynamic instruction scheduling and multiple execution units for enhanced performance.",
        technologies: ["Verilog", "Computer Architecture", "Pipeline Design", "FPGA"],
        features: [
            "Achieved theoretical CPI of 0.5 through dual-issue, 6-stage superscalar design",
            "Implemented dynamic instruction scheduling with multiple execution units",
            "Built reorder buffer for out-of-order execution",
            "Comprehensive hazard resolution mechanisms maintaining execution correctness",
            "Precise exception handling ensuring program semantics preservation",
            "Validated complete pipeline functionality under parallel workloads"
        ],
        challenges: "Maintaining execution correctness under out-of-order completion while handling complex instruction dependencies and resource conflicts. Implemented sophisticated hazard detection and resolution mechanisms with reorder buffer to ensure proper program semantics.",
        github: "https://github.com/shashankbhogaraju/Out-of-Order-SuperScalar",
        demo: "#",
        date: "April - May 2025"
    },
    4: {
        title: "Complete System on Chip CPU (RISC-V)",
        category: "Hardware",
        image: "https://via.placeholder.com/800x400/13ebfa/000000?text=RISC-V+SoC",
        description: "Delivered fully functional RISC-V I32 SoC in 2 months by leading complete RTL design, synthesis, and FPGA validation. Achieved 100% functional coverage across all pipeline stages through systematic testbench development.",
        technologies: ["Verilog", "RISC-V", "RTL Design", "FPGA", "Verification"],
        features: [
            "Complete RISC-V I32 SoC implementation in 2 months",
            "Full RTL design, synthesis, and FPGA validation flow",
            "100% functional coverage across all pipeline stages",
            "Comprehensive testbench development and verification",
            "Implemented CSR file handling for 3 control registers",
            "Robust exception and interrupt processing for system reliability"
        ],
        challenges: "Completing a full SoC design in just 2 months required efficient project management and systematic testing. Developed comprehensive testbenches to ensure 100% functional coverage while meeting aggressive timelines.",
        github: "https://github.com/shashankbhogaraju/SoC_RISC-IV-32",
        demo: "#",
        date: "March - May 2025"
    },
    5: {
        title: "Virtual Try-On Closet",
        category: "Machine Learning",
        image: "https://via.placeholder.com/800x400/6a0dad/ffffff?text=Virtual+Try-On",
        description: "Implemented VITON-HD deep learning model with OpenPose pose estimation, Human Instance Parsing, and Thin Plate Spline transformations for realistic virtual garment fitting. Built as part of Seasons of Code at IIT Bombay.",
        technologies: ["PyTorch", "Computer Vision", "OpenPose", "Deep Learning", "ResNet"],
        features: [
            "Implemented VITON-HD deep learning model for virtual garment fitting",
            "Integrated OpenPose for accurate pose estimation",
            "Human Instance Parsing for body segmentation",
            "Thin Plate Spline (TPS) transformations for realistic garment deformation",
            "ResNet-based feature extraction preprocessing pipeline",
            "DeepLab semantic segmentation for accurate human body parsing",
            "Alignment-aware normalization for precise garment alignment"
        ],
        challenges: "Achieving realistic garment fitting required sophisticated preprocessing and alignment techniques. Implemented TPS transformations with regression-based parameter prediction to handle various body poses and garment types naturally.",
        github: "https://github.com/shashankbhogaraju/Virtual-Try-On-Closet-using-GAN-SOC",
        demo: "#",
        date: "July 2024"
    },
    6: {
        title: "Instrument for RRAM Characterization",
        category: "Hardware",
        image: "https://via.placeholder.com/800x400/13ebfa/000000?text=RRAM+Testing",
        description: "Built precision measurement instrument achieving ±10% resistance accuracy for 10μs pulse widths. Custom PCB hardware with 5 selectable sense resistors, ±5V bipolar pulse generation, and 4×4 crossbar array support for comprehensive RRAM device characterization.",
        technologies: ["PCB Design", "Analog Circuit Design", "Signal Integrity", "Hardware Testing"],
        features: [
            "±10% resistance accuracy for 10μs pulse widths",
            "Custom PCB design with 5 selectable sense resistors",
            "±5V bipolar pulse generation capability",
            "4×4 crossbar array support for multiple RRAM devices",
            "Optimized signal integrity for sub-30μs pulse delivery",
            "Strategic PCB layout for high-speed switching performance"
        ],
        challenges: "Initial signal degradation issues caused by low-speed TL071 op-amps. Diagnosed bandwidth limitations and recommended AD744 high-speed op-amps upgrade, significantly improving measurement accuracy by eliminating bandwidth-limited distortion.",
        github: "https://github.com/edl-iitb/edl-25-project-submission-edl25_tue14",
        demo: "#",
        date: "January - April 2025"
    },
    7: {
        title: "Digital FIR Filter with Sequential MAC",
        category: "Hardware",
        image: "https://via.placeholder.com/800x400/6a0dad/ffffff?text=Digital+Filter",
        description: "Developed advanced digital FIR Low Pass Filter using Chebyshev approximation, implementing both sequential and parallel architectures. Executed complete RTL-to-GDSII design flow with synthesis optimization, floorplanning, and routing algorithms.",
        technologies: ["Verilog", "Python", "VLSI Design", "Digital Signal Processing", "Cadence"],
        features: [
            "Digital FIR Low Pass Filter with Chebyshev approximation",
            "Sequential and parallel architecture implementations",
            "Complete RTL-to-GDSII design flow execution",
            "Advanced synthesis optimization and floorplanning",
            "Optimal power-performance trade-offs analysis",
            "Comprehensive timing, area, and power validation",
            "Mathematical verification of filter response"
        ],
        challenges: "Balancing power consumption with performance requirements in DSP circuits. Achieved optimal trade-offs through systematic analysis and architectural choices, validating designs through comprehensive simulation and mathematical verification.",
        
        demo: "#",
        date: "November 2024"
    },
    8: {
        title: "Pipelined RISC Processor",
        category: "Hardware",
        image: "https://via.placeholder.com/800x400/13ebfa/000000?text=RISC+Processor",
        description: "Designed multi-cycle RISC processor with optimized FSM control implemented on XEN-10 FPGA Board. Developed 16-bit, 8-register processor with 6-stage pipeline architecture, enhancing cycles-per-instruction through systematic pipeline optimization.",
        technologies: ["Verilog", "FPGA", "Pipeline Design", "Digital Logic"],
        features: [
            "Multi-cycle RISC processor with optimized FSM control",
            "Implemented on XEN-10 FPGA Board",
            "16-bit, 8-register processor architecture",
            "6-stage pipeline for improved CPI",
            "Data forwarding for hazard mitigation",
            "Strategic NOP insertion for pipeline correctness",
            "Efficient state machine design and resource utilization"
        ],
        challenges: "Ensuring pipeline correctness while maintaining maximum throughput. Implemented comprehensive data forwarding and strategic NOP insertion to handle hazards without significantly impacting performance.",
        github: "https://github.com/shashankbhogaraju/Out-of-Order-SuperScalar",
        demo: "#",
        date: "June 2024"
    },
    9: {
        title: "SmartSupportAI Conversational Engine",
        category: "Machine Learning",
        image: "https://via.placeholder.com/800x400/6a0dad/ffffff?text=Conversational+AI",
        description: "Designed and implemented a Python-based conversational support engine with custom intent resolution, context tracking, and session memory to enable coherent, multi-turn user interactions without relying on external NLP frameworks.",
        technologies: ["Python", "NLP", "Intent Recognition", "State Management", "API Design"],
        features: [
            "Custom intent resolution without external NLP frameworks",
            "Context tracking for multi-turn conversations",
            "Lightweight persistent memory system across sessions",
            "Session state storage and retrieval for personalization",
            "Modular, extensible architecture with decoupled handlers",
            "Fallback mechanisms and intent routing",
            "Low-latency execution optimized design",
            "Ready for AI/ML pipeline or API integration"
        ],
        challenges: "Building effective intent resolution and context tracking without relying on heavy NLP frameworks. Designed a lightweight but powerful system that maintains conversation coherence while being easy to extend and integrate.",
        github: "https://github.com/shashankbhogaraju/SmartSupportAI-v0.1",
        demo: "#",
        date: "May - July 2025"
    },
    10: {
        title: "Credit Card Fraud Detection System",
        category: "Machine Learning",
        image: "https://via.placeholder.com/800x400/13ebfa/000000?text=Fraud+Detection",
        description: "Engineered production-ready ML-based fraud detection system using LightGBM and DistilBERT, achieving 87.7% fraud detection accuracy. Built complete end-to-end pipeline with real-time streaming, REST API, monitoring dashboard, and CI/CD automation.",
        technologies: ["LightGBM", "DistilBERT", "Kafka", "FastAPI", "Streamlit", "Prometheus", "Grafana", "Docker", "GitHub Actions"],
        features: [
            "87.7% fraud detection accuracy using LightGBM & DistilBERT ensemble",
            "Real-time Kafka streaming pipeline for transaction processing",
            "FastAPI REST API for model inference and data ingestion",
            "Interactive Streamlit dashboard for monitoring and visualization",
            "Prometheus & Grafana monitoring stack for system metrics",
            "Simulated streaming of 284k transactions with p95 latency tracking",
            "Fully Dockerized application for easy deployment",
            "CI/CD pipeline with GitHub Actions for automated testing and linting"
        ],
        challenges: "Handling class imbalance in fraud detection and maintaining low latency for real-time predictions. Implemented streaming architecture with Kafka and optimized model inference to track p95 latency while processing high-volume transaction data.",
        github: "https://github.com/shashankbhogaraju/ML-Fraud-Credit-Card-detection",
        demo: "#",
        date: "July - August 2025"
    },
    11: {
        title: "Applied Machine Learning",
        category: "Machine Learning",
        image: "https://via.placeholder.com/800x400/6a0dad/ffffff?text=Applied+ML",
        description: "Comprehensive course project exploring diverse ML techniques including hypothesis testing, supervised/unsupervised learning, and model comparison. Analyzed relationships in real-world datasets and built predictive models for banking campaigns.",
        technologies: ["Python", "SQL", "Random Forest", "SVM", "Neural Networks", "ResNet18", "DBSCAN", "PCA", "t-SNE"],
        features: [
            "Tested correlation between affordable housing and restaurant health scores in LA",
            "Used SQL for data cleaning and joining multi-source datasets",
            "Built supervised pipelines: linear/logistic regression models",
            "Implemented unsupervised analysis with DBSCAN, PCA, and t-SNE",
            "Feature engineering for bank marketing campaign success prediction",
            "GridSearchCV for hyperparameter cross-validation",
            "Compared Random Forests, SVM, single-layer NN, and ResNet18 performance",
            "Statistical hypothesis testing with proper validation"
        ],
        challenges: "Working with messy real-world data required extensive SQL-based cleaning and joining. Used rigorous hypothesis testing to verify assumptions and GridSearchCV to systematically compare multiple models for optimal performance.",
        demo: "#",
        date: "August - November 2023"
    },
    12: {
        title: "Multi-Tasking OS & Kernel Development",
        category: "SDE",
        image: "https://via.placeholder.com/800x400/13ebfa/000000?text=OS+Kernel",
        description: "Developed a fully functional 32-bit multitasking kernel from scratch with complete memory management, filesystem support, and process scheduling. Built comprehensive system including bootloader, VFS layer, and custom I/O drivers.",
        technologies: ["C", "Assembly (x86)", "GDB", "OS Development", "System Programming"],
        features: [
            "32-bit multitasking kernel with preemptive scheduling",
            "Interrupt handling and exception management",
            "Paging and virtual memory management",
            "FAT16 filesystem driver implementation",
            "Linux-inspired VFS (Virtual File System) layer",
            "ELF binary loader for executable support",
            "x86 privilege levels (ring 0/3) for security",
            "Custom heap allocator for dynamic memory",
            "x86 real-mode bootloader from scratch",
            "Hardware I/O drivers (keyboard, VGA, etc.)",
            "Shell environment with process control",
            "Memory protection between processes",
            "GDB debugging in emulator environment"
        ],
        challenges: "Building a kernel from scratch required deep understanding of hardware-software interaction. Implemented proper memory protection and privilege separation while debugging low-level issues using GDB in an emulator. Managing the complexity of interrupt handling, paging, and process scheduling simultaneously was particularly challenging.",
        github: "https://github.com/Shahank2810",
        demo: "#",
        date: "June - August 2025"
    }
};

// Get all project cards and modal elements
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

// Open project modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectsData[projectId];
        
        if (project) {
            displayProjectModal(project);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function displayProjectModal(project) {
    const technologiesHTML = project.technologies.map(tech => 
        `<span class="tag">${tech}</span>`
    ).join('');
    
    const featuresHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    const linksHTML = `
        ${project.github && project.github !== '#' ? `<a href="${project.github}" target="_blank" class="modal-link">
            <i class="fab fa-github"></i> View on GitHub
        </a>` : ''}
        ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="modal-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
        </a>` : ''}
    `;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <span class="blog-category">${project.category}</span>
                <span class="blog-date"><i class="far fa-calendar"></i> ${project.date}</span>
            </div>
            <div class="project-tags">
                ${technologiesHTML}
            </div>
        </div>
        
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        
        <div class="modal-section">
            <h3>Overview</h3>
            <p>${project.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Key Features</h3>
            <ul>
                ${featuresHTML}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Challenges & Solutions</h3>
            <p>${project.challenges}</p>
        </div>
        
        ${linksHTML ? `<div class="modal-links">${linksHTML}</div>` : ''}
    `;
}

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCardsArray = Array.from(projectCards);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter projects
        projectCardsArray.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Initialize - add transition styles
projectCardsArray.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});