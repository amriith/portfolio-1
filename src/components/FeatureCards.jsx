import React, { useState, useEffect, useRef } from 'react';

const FeatureCards = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      id: 1,
      title: "And its own browser",
      description: "Devin can search the web for documentation, test web applications it builds, and access tools like Notion and Jira.",
      content: "Browser"
    },
    {
      id: 2,
      title: "Its own code editor",
      description: "Devin can independently explore new codebases and contribute code across multiple files.",
      content: "Editor"
    },
    // Add more features as needed
  ];
  
  const observerRef = useRef(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };
    
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-id'));
          setActiveFeature(id);
        }
      });
    };
    
    observerRef.current = new IntersectionObserver(callback, options);
    
    document.querySelectorAll('.feature-section').forEach(section => {
      observerRef.current.observe(section);
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return (
    <div className="relative bg-gray-900 text-white min-h-screen w-full">
      {/* Navigation bar */}
      <nav className="p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" fill="#3B82F6" />
            <circle cx="18" cy="12" r="3" fill="#10B981" />
            <circle cx="9" cy="18" r="3" fill="#8B5CF6" />
          </svg>
          
          <div className="ml-8 space-x-6 flex items-center">
            <a href="#" className="font-medium">• Home</a>
            <a href="#" className="font-medium">Enterprise</a>
            <a href="#" className="font-medium">Pricing</a>
            <a href="#" className="font-medium">Customers</a>
          </div>
        </div>
        
        <div className="space-x-6 flex items-center">
          <a href="#" className="font-medium">About us ↗</a>
          <a href="#" className="font-medium">Careers ↗</a>
          <a href="#" className="font-medium">Blog ↗</a>
          <a href="#" className="font-medium">Contact ↗</a>
          <a href="#" className="font-medium">Docs ↗</a>
          <a href="#" className="font-medium">Login ↗</a>
          <a href="#" className="bg-blue-100 text-gray-800 px-4 py-2 rounded-md font-medium">Get started</a>
        </div>
      </nav>
      
      {/* Feature sections */}
      <div className="container mx-auto">
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            data-id={index}
            className="feature-section h-screen flex items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-8">
              {/* Left side - Feature description */}
              <div className="flex flex-col justify-center">
                <div className="relative">
                  {/* Timeline indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700">
                    {features.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-3 h-3 rounded-full absolute -left-1 transform -translate-x-1/2 ${
                          i <= index ? 'bg-blue-400' : 'bg-gray-600'
                        }`}
                        style={{ top: `${i * 20}%` }}
                      />
                    ))}
                  </div>
                  
                  <div className="ml-8">
                    <h2 className="text-4xl mb-4">
                      <span className="text-gray-300">Its own</span> <span className="text-blue-400">{feature.content}</span>
                    </h2>
                    <p className="text-gray-300 max-w-md">{feature.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Demo cards */}
              <div className="relative h-96">
                {/* Card stack - overlap effect */}
                <div className="absolute right-0 w-full">
                  {/* Demo window */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-500">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-medium">Set up Next.js repo</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                            <span>You</span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">5:05 PM</div>
                            <p className="text-gray-300">Can you start by setting up the Next.js repo, building the project, and running an example?</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                            <span>D</span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">5:05 PM</div>
                            <p className="text-gray-300">Absolutely! I'll get started on that right away and keep you updated on my progress.</p>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center text-green-400">
                                <span className="mr-2">✓</span>
                                <span>Cloned repo from GitHub.</span>
                              </div>
                              <div className="flex items-center text-green-400">
                                <span className="mr-2">✓</span>
                                <span>Identified and read setup instructions for running example apps.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-900 flex items-center">
                      <input 
                        type="text" 
                        placeholder="Give Devin a task to work on..." 
                        className="bg-gray-800 text-gray-300 rounded px-4 py-2 w-full"
                      />
                      <button className="ml-2 text-gray-300">→</button>
                    </div>
                  </div>
                  
                  {/* Right side preview - based on active feature */}
                  <div className="absolute top-0 right-0 h-full w-1/2 transform translate-x-6">
                    <div className="bg-gray-800 rounded-lg h-full">
                      <div className="border-b border-gray-700 p-3">
                        <div className="flex space-x-4">
                          <button className="px-2 py-1">Shell</button>
                          <button className={`px-2 py-1 ${feature.content === "Browser" ? "text-green-400" : ""}`}>Browser</button>
                          <button className={`px-2 py-1 ${feature.content === "Editor" ? "text-green-400" : ""}`}>Editor</button>
                          <button className="px-2 py-1">Planner</button>
                        </div>
                      </div>
                      
                      <div className="p-4 h-full">
                        {feature.content === "Browser" && (
                          <div className="bg-white text-center p-8 rounded">
                            <h3 className="text-black">Hello World</h3>
                          </div>
                        )}
                        
                        {feature.content === "Editor" && (
                          <div className="bg-gray-900 text-gray-300 p-2 font-mono text-sm h-full">
                            <div className="text-gray-400">run-example-apps.md</div>
                            <pre className="mt-2">
                              # Running Example Apps
                              
                              Running examples can be done with:
                              
                              ```sh
                              pnpm next-with-deps ./examples/basic-css/
                              ```
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;