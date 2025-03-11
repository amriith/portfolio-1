import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const WorkExperienceCard = ({ companyName, year, description, techStack, link, index, id  }) => {
  const cardRef = useRef(null);
  
  return (
    <div 
      ref={cardRef}
      id={id}
      className="work-experience-card w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-xl shadow-md border border-gray-800 mb-32 opacity-0"
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
  
  useEffect(() => {
    // Get the scrollable container (or fallback to window)
    const scrollContainer = document.getElementById('scrollable-content') || window;
    const cards = document.querySelectorAll('.work-experience-card');
    
    // Set initial state for all cards
    gsap.set(cards, { y: 100, opacity: 0 });
    
    // Create ScrollTriggers for each card
    cards.forEach((card, index) => {
      // Create a much longer scroll distance for each card
      // This will make each card visible for longer while scrolling
      const cardTrigger = {
        trigger: card,
        scroller: scrollContainer,
        start: "top 80%", // Start animation when card top reaches 80% from top of viewport
        end: "bottom 20%", // End animation when card bottom reaches 20% from top of viewport
        scrub: 0.5, // Smooth scrubbing effect
        toggleActions: "play none none reverse",
        // markers: true, // Enable markers for debugging if needed
      };
      
      // Animate current card to be visible
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          ...cardTrigger,
          // Keep card visible for longer by extending the end position
          end: `bottom-=${window.innerHeight * 0.5}px top`,
        }
      });
      
      // Create a separate trigger for when to hide the card
      // This will happen much later in the scroll, giving more time to view the card
      if (index < cards.length - 1) { // Don't create for the last card
        ScrollTrigger.create({
          trigger: cards[index + 1],
          scroller: scrollContainer,
          start: "top 60%", // Start hiding previous card when next card reaches 60% from top
          end: "top 40%", // Complete hiding by 40%
          scrub: 0.5,
          onEnter: () => {
            // Animate the previous card out when the next card comes into view
            gsap.to(card, {
              y: -50,
              opacity: 0,
              scale: 0.95,
              duration: 0.5,
              ease: "power2.out"
            });
          },
          onLeaveBack: () => {
            // Bring the card back when scrolling back up
            gsap.to(card, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out"
            });
          },
     
        });
      }
    });
    
    return () => {
      // Clean up all ScrollTriggers when the component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative ">
      {/* Section title */}
      <div className=" top-0 pt-16 pb-8 px-6 z-10 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-teal-400">Work</span> Experience
          </h2>
          <p className="mt-2 text-gray-400 max-w-2xl">
            Scroll to explore my professional journey
          </p>
        </div>
      </div>
      
  
      <div ref={containerRef} className="work-experience-container relative py-15 px-4">
        {experiences.map((exp, index) => (
          <WorkExperienceCard
            key={index}
            companyName={exp.companyName}
            year={exp.year}
            link={exp.link}
            description={exp.description}
            techStack={exp.techStack}
            index={index}
            id={index === 0 ? "first-experience" : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export const WorkExperienceSection = () => {
  const experienceData = [
    {
      companyName: "OneAdvanced  ↗",
      year: "Jan 2022- August 2023",
      link: "https://www.oneadvanced.com/",
      description: <>Developed Adastra, a .NET/C# app for NHS UK, improving patient management. Built & maintained doctor appointment APIs, streamlining scheduling & availability. Contributed to the BaRS API Gateway, enabling emergency referral services. 
       Enhanced API performance & debugging using Postman & REST API best practices. Implemented key features: ambulance dispatch, appointment booking, referral cancellations. Collaborated with product managers & engineers, ensuring compliance & efficiency.</>,
      techStack: ["C#",".NET MVC",".NET CORE ", "HTML & CSS", ".NET", "Postman", "Angular", "Reddis", "Microsoft SQL"]
    },
    {
      companyName: "Thoth Tech  ↗",
      year: "Aug 2024 - Feb 2025",
      link: "https://internal-systems.vercel.app/",
      description: <>Contributed to the development of OnTrack, an educational platform used by major Australian universities, enhancing the student learning experience through backend and frontend improvements. Led the migration of legacy code from CoffeeScript to TypeScript, modernizing the platform for better performance and maintainability. 
      Designed user-centric interfaces, improving student engagement and user journeys. Developed a customizable email notification system based on user research to optimize interactions. Implemented Docker containers, streamlining development and deployment processes. </>,
      techStack: ["TypeScript", "Ruby on Rails", "HTML & CSS", "Docker", "Postgre SQL", "JavaScript", "Tailwind CSS"]
    },
    {
      companyName: "Freelance Software Developer",
      year: "2022 – Present",
      link: "#",
      description: <> Designed and implemented cloud-based solutions for healthcare providers and small businesses, optimizing performance and scalability. Built microservices-based applications using React and Node.js. 
      Deployed applications using Docker and cloud services like AWS & Azure, enabling efficient hosting and scaling. Integrated secure payment gateways with Stripe.</>,
      techStack: ["React", "Node.js","Next.js", "Docker", "AWS", "Azure", "JavaScript", "TypeScript","Stripe", "Postgre SQL", "MongoDB", "Golang", "Prisma"]
    }
  ];

  return <AnimatedWorkExperience experiences={experienceData} />;
};