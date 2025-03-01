import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const WorkExperienceCard = ({ companyName, year, description, techStack, link, index }) => {
  const cardRef = useRef(null);
  
  return (
    <div 
      ref={cardRef}
      className="work-experience-card w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-xl shadow-md border border-gray-800 mb-8 opacity-0"
      data-index={index}
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
        {techStack?.map((tech, index) => (
          <span key={index} className="px-2 py-1 text-sm bg-gray-800 text-white rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export const AnimatedWorkExperience = ({ experiences }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Get the scrollable container
    const scrollContainer = document.getElementById('scrollable-content');
    if (!scrollContainer) return;
    
    const cards = document.querySelectorAll('.work-experience-card');
    
    // Set initial state for all cards
    gsap.set(cards, { y: 100, opacity: 0 });
    
    // Create ScrollTriggers for each card
    cards.forEach((card, index) => {
      // Create a unique animation for each card
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          scroller: scrollContainer, // This is the key change
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          toggleActions: "play none none reverse",
          // markers: true, // Set to true for debugging
        }
      });
      
      // Create animations for previous cards when current card comes into view
      if (index > 0) {
        const previousCards = Array.from(cards).slice(0, index);
        previousCards.forEach((prevCard, prevIndex) => {
          const yOffset = -100 * (index - prevIndex);
          
          gsap.to(prevCard, {
            y: yOffset,
            opacity: 0.3,
            scale: 0.95,
            scrollTrigger: {
              trigger: card,
              scroller: scrollContainer, // This is the key change
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
              toggleActions: "play none none reverse",
              // markers: true, // Set to true for debugging
            }
          });
        });
      }
    });
    
    return () => {
      // Clean up all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="work-experience-container relative">
      {experiences.map((exp, index) => (
        <WorkExperienceCard
          key={index}
          companyName={exp.companyName}
          year={exp.year}
          link={exp.link}
          description={exp.description}
          techStack={exp.techStack}
          index={index}
        />
      ))}
    </div>
  );
};

// Keep the data and export as before
export const WorkExperienceSection = () => {
  const experienceData = [
    {
      companyName: "OneAdvanced  ↗",
      year: "Jan 2022- August 2023",
      link: "https://www.oneadvanced.com/",
      description: "Developed Adastra, a .NET/C# app for NHS UK, improving patient management. Built & maintained doctor appointment APIs, streamlining scheduling & availability. Contributed to the BaRS API Gateway, enabling emergency referral services. Enhanced API performance & debugging using Postman & REST API best practices. Implemented key features: ambulance dispatch, appointment booking, referral cancellations. Collaborated with product managers & engineers, ensuring compliance & efficiency.",
      techStack: ["C#", "HTML & CSS", ".NET", "Postman", "Angular", "Reddis", "Microsoft SQL"]
    },
    {
      companyName: "Thoth Tech  ↗",
      year: "Aug 2024 - Feb 2025",
      link: "https://internal-systems.vercel.app/",
      description: "Contributed to OnTrack, an educational platform used by major Australian universities, enhancing the student learning experience through backend and frontend improvements. Led the migration of legacy code from CoffeeScript to TypeScript, modernizing the platform for better performance and maintainability. Designed user-centric interfaces, improving student engagement and user journeys. Developed a customizable email notification system based on user research to optimize interactions. Implemented Docker containers, streamlining development and deployment processes.",
      techStack: ["TypeScript", "Ruby on Rails", "HTML & CSS", "Docker", "Postgre SQL"]
    },
    {
      companyName: "Freelance Software Developer",
      year: "2022 – Present",
      link: "",
      description: "Designed and implemented cloud-based solutions for healthcare providers and small businesses, optimizing performance and scalability. Built microservices-based applications using React and Node.js. Deployed applications using Docker and cloud services like AWS & Azure, enabling efficient hosting and scaling. Integrated secure payment gateways with Stripe.",
      techStack: ["React", "Node.js", "Docker", "AWS", "Azure", "Stripe", "JavaScript", "TypeScript", "Postgre SQL", "Mongo DB", "Prisma ORM"]
    }
  ];

  return <AnimatedWorkExperience experiences={experienceData} />;
};