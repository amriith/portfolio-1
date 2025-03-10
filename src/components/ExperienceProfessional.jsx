import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const WorkExperienceCard = ({ companyName, year, description, techStack, link, index, isActive, animationProgress, activeCard }) => {
  const cardRef = useRef(null);
  
  // Calculate transforms based on animation progress and card index
  const getCardStyle = () => {
    if (isActive) {
      // Current active card moves up and fades out as progress increases
      return {
        transform: `translateY(${-100 * animationProgress}%) scale(${1 - 0.2 * animationProgress})`,
        opacity: 1 - animationProgress
      };
    } else if (index === activeCard + 1) {
      // Next card becomes visible as current fades out
      return {
        transform: `translateY(0) scale(1)`,
        opacity: animationProgress
      };
    } else {
      // Other cards stay hidden
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 0
      };
    }
  };
  
  return (
    <div 
      ref={cardRef}
      className={`work-experience-card w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-xl shadow-md border border-gray-800 transition-all duration-300 absolute left-0 right-0`}
      data-index={index}
      style={{
        ...getCardStyle(),
        zIndex: 10 - index, // Ensure stacking order
      }}
    >
      {/* Year */}
      <div className="text-xs flex justify-between uppercase font-semibold tracking-wide text-slate-500">
        {year}
      </div>
  
      {/* Job Title & Company */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold text-teal-400 hover:underline flex items-center gap-2"
      >
        {companyName}
      </a>
  
      {/* Description */}
      <p className="mt-2 text-sm text-gray-400">{description}</p>
  
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {techStack?.map((tech, idx) => (
          <span key={idx} className="px-2 py-1 text-sm bg-gray-800 text-white rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export const AnimatedWorkExperience = ({ experiences }) => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  
  useEffect(() => {
    // Create sections for each experience
    const sections = [];
    const sectionHeight = window.innerHeight * 0.8; // 80% of viewport height
    
    // Create scroll trigger for each section
    experiences.forEach((_, index) => {
      if (index < experiences.length - 1) { // Skip last experience for animation trigger
        const section = {
          start: index * sectionHeight,
          end: (index + 1) * sectionHeight
        };
        sections.push(section);
        
        // Create scroll trigger for transition between cards
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `top+=${section.start}px top`,
          end: `top+=${section.end}px top`,
          onEnter: () => setActiveCard(index),
          onEnterBack: () => setActiveCard(index),
          onUpdate: (self) => {
            // Update animation progress based on scroll position
            setAnimationProgress(self.progress);
          },
          // markers: true, // Enable for debugging
        });
      }
    });
    
    // Set container height based on sections
    gsap.set(containerRef.current, {
      height: sections.length * sectionHeight + window.innerHeight // Add extra space at the end
    });
    
    return () => {
      // Clean up all ScrollTriggers when the component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [experiences.length]);

  return (
    <div className="relative bg-[#0f172a]">
      {/* Section title */}
      <div className="sticky top-0 pt-16 pb-8 px-6 z-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-teal-400">Work</span> Experience
          </h2>
          <p className="mt-2 text-gray-400 max-w-2xl">
            Scroll to explore my professional journey
          </p>
        </div>
      </div>
      
      {/* Cards container */}
      <div 
        ref={containerRef} 
        className="work-experience-container relative"
      >
        {/* Fixed position container for cards */}
        <div className="sticky top-[30vh] h-[40vh] flex items-center justify-center px-4">
          {experiences.map((exp, index) => (
            <WorkExperienceCard
              key={index}
              companyName={exp.companyName}
              year={exp.year}
              link={exp.link}
              description={exp.description}
              techStack={exp.techStack}
              index={index}
              isActive={activeCard === index}
              animationProgress={animationProgress}
              activeCard={activeCard}
            />
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col items-center space-y-3">
            {experiences.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCard === index ? 'bg-teal-400 scale-150' : 'bg-gray-600 scale-100'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceProfessional = () => {
  const experienceData = [
    {
      companyName: "OneAdvanced  ↗",
      year: "Jan 2022- August 2023",
      link: "https://www.oneadvanced.com/",
      description: "Developed Adastra, a .NET/C# app for NHS UK, improving patient management. Built & maintained doctor appointment APIs, streamlining scheduling & availability. Contributed to the BaRS API Gateway, enabling emergency referral services.",
      techStack: ["C#", "HTML & CSS", ".NET", "Postman", "Angular", "Reddis", "Microsoft SQL"]
    },
    {
      companyName: "Thoth Tech  ↗",
      year: "Aug 2024 - Feb 2025",
      link: "https://internal-systems.vercel.app/",
      description: "Contributed to OnTrack, an educational platform used by major Australian universities, enhancing the student learning experience through backend and frontend improvements. Led the migration of legacy code from CoffeeScript to TypeScript.",
      techStack: ["TypeScript", "Ruby on Rails", "HTML & CSS", "Docker", "Postgre SQL"]
    },
    {
      companyName: "Freelance Software Developer",
      year: "2022 – Present",
      link: "#",
      description: "Designed and implemented cloud-based solutions for healthcare providers and small businesses, optimizing performance and scalability. Built microservices-based applications using React and Node.js.",
      techStack: ["React", "Node.js", "Next.js", "Docker", "AWS", "Azure"]
    }
  ];

  return <AnimatedWorkExperience experiences={experienceData} />;
};