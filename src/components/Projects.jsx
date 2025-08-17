import github from "../assets/github.svg"

export const Projects = () => {
  const projects = [
    {
      title: "MRIID E-commerce Platform",
      description: "A highly scalable, cloud-native e-commerce platform built with modern microservices architecture, featuring advanced infrastructure optimization, Kubernetes orchestration, and stateful application management. The platform implements modern design principles with a focus on performance, scalability, and infrastructure efficiency.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes",  "Nginx", "Prometheus", "Grafana", "Helm"],
      link: "https://mriid.com",
      github: "https://github.com/amriith/E-commerce",
      image: "/mriid.jpg",
      hiddenFeatures: [
        "Microservices architecture with API Gateway pattern",
        "Kubernetes-native deployment with Helm charts",
        "Stateful application management using StatefulSets",
        "Capability to scale the application horizontally and vertically",
        "Multi-cluster Kubernetes deployment across availability zones",
        "Infrastructure as Code using Terraform and CloudFormation",
        "Advanced monitoring with Prometheus, Grafana, and distributed tracing",
        "Container security scanning and vulnerability management",
        "Multi-region disaster recovery with active-active setup"
      ]
    },
    {
      title: "Server Performance Monitor",
      description: "A comprehensive server performance monitoring system currently under development with automated building scripts that initially clone the repository and run locally to view VM performance metrics, Docker image logs analysis, Kubernetes cluster statistics dashboard, and advanced SSH security prevention mechanisms to protect against unauthorized access attempts to your machine. The project is still in building phase and not yet fully completed.",
      technologies: ["Python", "Bash", "Docker", "Kubernetes", "Prometheus", "Grafana", "Node.js", "React", "MongoDB", "Redis", "SSH", "iptables", "fail2ban"],
      link: "https://github.com/amriith/server-performance-monitor",
      github: "https://github.com/amriith/server-performance-monitor",
      image: "/serverperformance.jpg",
      hiddenFeatures: [
        "Automated building scripts for initial repository cloning and local deployment setup",
        "Real-time VM performance monitoring with CPU, memory, disk usage, and network metrics",
        "Docker image logs analysis and container performance statistics tracking",
        "Kubernetes cluster statistics dashboard with pod resource utilization and scaling metrics",
        "Automated intrusion detection and prevention system (IDS/IPS) for SSH attacks",
        "Custom Grafana dashboards for comprehensive infrastructure monitoring",
        "Automated backup and recovery procedures for monitoring data",
        "Performance benchmarking and capacity planning tools",
        "Custom metrics collection and aggregation for specific use cases",
      ]
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Vite, featuring smooth animations and professional design. Hosted on AWS S3 with CloudFront CDN for global distribution and optimal performance.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "AWS S3", "CloudFront", "Route 53"],
      link: "https://amrith.mriid.com",
      github: "https://github.com/amriith",
      image: "/portfolio.jpg",
      hiddenFeatures: [
        "Dark/light theme toggle with smooth transitions",
        "Smooth parallax effects and interactive animations",
        "AWS S3 static website hosting with CloudFront CDN",
        "Custom domain configuration with Route 53 DNS management",
        "Responsive design optimized for all device sizes",
        "Modern CSS animations and micro-interactions"
      ]
    },
    {
      title: "Mindimate - Mathematical Animator",
      description: "A production-ready mathematical animation platform built with advanced security levels, automated CI/CD pipelines, and Infrastructure as Code (IaC) deployed on Google Cloud Platform. Features Celery workers for distributed task processing, Prometheus monitoring, and Python-based animation generation libraries.",
      technologies: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "GCP", "Terraform", "Docker", "Kubernetes", "Prometheus", "Grafana", "Jenkins", "Ansible"],
      link: "https://mindimate.com",
      github: "https://github.com/amriith",
      image: "/mindimate.jpg",
      hiddenFeatures: [
        "Production-grade security with OAuth 2.0, JWT tokens, and role-based access control",
        "Automated CI/CD pipeline with Jenkins, automated testing, and deployment",
        "Infrastructure as Code using Terraform for GCP resource management",
        "Distributed task processing with Celery workers and Redis message broker",
        "Advanced monitoring and alerting with Prometheus, Grafana, and custom dashboards",
        "Mathematical animation generation using Python libraries (Matplotlib, Plotly, Manim)",
        "Database optimization with read replicas and connection pooling",
        "API rate limiting and DDoS protection with Cloud Armor",
        "Automated backup and disaster recovery procedures",
        "Advanced mathematical expression parsing and rendering",
        "Comprehensive logging and distributed tracing implementation"
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container select-none mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl select-none md:text-4xl font-bold text-white">
            <span className="text-teal-400">Featured </span>  Projects
          </h2>
        </div>

        {/* Projects Display - Vertical stacking with horizontal image/description layout */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Project Row - Image and Description side by side */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                
                {/* Project Description Card - Left side */}
                <div className="flex-1 order-2 lg:order-1">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:p-8 overflow-hidden min-h-[320px]">
                    <div className="mb-4 group-hover:mb-6 transition-all duration-500">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 group-hover:text-2xl group-hover:mb-3 transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-base transition-all duration-500">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4 group-hover:mb-6 transition-all duration-500">
                      <div className="flex flex-wrap gap-2 group-hover:gap-3 transition-all duration-500">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-medium group-hover:px-4 group-hover:py-2 group-hover:bg-slate-800/50 group-hover:border-slate-600/50 group-hover:text-slate-200 group-hover:text-sm group-hover:rounded-lg transition-all duration-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hidden Features - Revealed on hover, showing all features */}
                    <div className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 group-hover:mb-6 max-h-0 group-hover:max-h-96 overflow-hidden">
                      <h4 className="text-sm font-semibold text-blue-300 mb-2 group-hover:text-lg group-hover:mb-3 transition-all duration-500">Key Features:</h4>
                      <ul className="space-y-1 group-hover:space-y-2 transition-all duration-500">
                        {project.hiddenFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-slate-300 flex items-center group-hover:text-sm group-hover:items-start transition-all duration-500">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:w-2 group-hover:h-2 group-hover:mr-3 group-hover:mt-2 flex-shrink-0 transition-all duration-500"></span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 group-hover:gap-4 transition-all duration-500">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600/20 border border-blue-500/40 rounded-lg text-blue-300 text-sm font-medium hover:bg-blue-600/30 hover:border-blue-500/60 group-hover:px-6 group-hover:py-3 transition-all duration-500"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-600/20 border border-slate-500/40 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-600/30 hover:border-slate-500/60 group-hover:px-6 group-hover:py-3 transition-all duration-500"
                      >
                        <img src={github} alt="GitHub" className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Image Box - Right side with enhanced hover */}
                <div className="flex-1 order-1 lg:order-2">
                  <div className="group/image relative">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden">
                      <div className="relative overflow-hidden rounded-xl cursor-pointer w-full h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125"
                        />
                        {/* Enhanced overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-xl"></div>
                        
                        {/* Hover overlay with zoom indicator */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <div className="text-2xl mb-2">🔍</div>
                            <p className="text-sm font-medium">Hover to view larger</p>
                            <p className="text-xs text-gray-300 mt-1">Move cursor away to close</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Large Image Display - Appears on image hover, showing just the image */}
                    <div className="absolute -inset-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl opacity-0 pointer-events-none group-hover/image:opacity-100 group-hover/image:pointer-events-auto transition-all duration-300 z-50 flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full p-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};