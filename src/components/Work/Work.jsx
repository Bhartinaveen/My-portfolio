import React, { useState } from "react";

// --- DUMMY DATA ---
const projects = [
  {
    id: 1,
    title: "College Operations Hub ",
    category: "(SaaS)",
    description: "Developed a platform to manage college events, student registrations, and activity tracking with real-time updates and clean, customizable dashboards. Enhanced search and filtering for quick access to events and schedules.",
    // IMPORTANT: Replace with actual image
    image: "./src/assets/work_logo/college.png",
    role: "Full Stack Website",
    scope: "React.js, JavaScript, MongoDB,NodeJs, Tailwind CSS",
    dotColor: "bg-red-500", 
    mockupType: "laptop",
    githubUrl: "https://github.com/Bhartinaveen/collage-mng-",
    liveUrl: "https://vercel.com"
  },
  {
    id: 2,
    title: "Online-Code-Editor",
    category: "(SaaS)",
    description: "Built a collaborative code editor with real-time syncing using Socket.IO, and designed a scalable Node.js backend to handle multiple users smoothly.",
    image: "./src/assets/work_logo/code.png",
    role: "Frontend Website",
    scope: "Next.js, JavaScript, Socket.Io, Tailwind CSS",
    dotColor: "bg-blue-500", 
    mockupType: "laptop",
    githubUrl: "https://github.com/Bhartinaveen/codedt",
    liveUrl: "https://vercel.com"
  },
  // {
  //   id: 3,
  //   title: "FinTrack - Financial Analytics",
  //   category: "(Web App)",
  //   description: "A comprehensive financial dashboard designed for small businesses to track expenses, generate invoices, and visualize cash flow in real-time. Features include interactive data visualization charts, automated report generation, and multi-user role management.",
  //   image: "https://placehold.co/800x500/f3f4f6/a3a3a3?text=Financial+Dashboard",
  //   role: "Frontend Lead",
  //   scope: "React, Redux Toolkit, Node.js, Chart.js, MongoDB",
  //   dotColor: "bg-orange-500", 
  //   mockupType: "laptop",
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://vercel.com"
  // },
];

// --- ICONS ---
const Icons = {
  ArrowDown: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
  ),
  Github: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  ExternalLink: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
  )
};

// --- BACKGROUND COMPONENT (Red, Blue, Orange, Yellow) ---
const BackgroundMesh = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
    {/* CSS for the floating animation */}
    <style>{`
      @keyframes float {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-float {
        animation: float 10s infinite ease-in-out;
      }
      .delay-2000 { animation-delay: 2s; }
      .delay-4000 { animation-delay: 4s; }
    `}</style>

    {/* Blob 1: Red (Top Left) */}
    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
    
    {/* Blob 2: Blue (Top Right) */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-2000"></div>
    
    {/* Blob 3: Orange (Bottom Left) */}
    <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-4000"></div>
    
    {/* Blob 4: Yellow (Bottom Right) */}
    <div className="absolute bottom-0 right-20 w-[500px] h-[500px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float delay-2000"></div>

    {/* Blob 5: Center Mix (Soft Orange/Red) */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
  </div>
);

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({ project }) => {
  const techStack = project.scope.split(', ');

  return (
    <div className="font-sans mb-12 last:mb-0">
      {/* GLASSMORPHISM: 
        bg-white/50 ensures the text is readable while showing the red/blue/orange colors behind 
      */}
      <div className="group relative bg-white/50 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-6 md:p-10 transition-all duration-500 hover:shadow-2xl hover:bg-white/70 hover:-translate-y-1">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1 text-left w-full">
            <div className="flex items-center gap-3 mb-6">
              <span className={`w-3 h-3 rounded-full ${project.dotColor} ring-4 ring-opacity-20 ${project.dotColor.replace('bg-', 'ring-')}`}></span>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                {project.title}
              </h3>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Role</h4>
                <span className="inline-block bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  {project.role}
                </span>
              </div>
              
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/60 border border-white/50 text-gray-800 text-sm font-medium rounded-lg shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS (GitHub & Deployment) */}
              <div className="pt-6 mt-2 border-t border-gray-200/50 flex flex-wrap gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Icons.Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 font-medium shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Icons.ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>

            </div>
          </div>

          {/* Image Mockup */}
          <div className="flex-1 relative w-full order-1 lg:order-2">
            {project.mockupType === 'laptop' && (
              <div className="relative mx-auto transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                <div className="bg-gray-900 rounded-[1rem] p-1.5 shadow-2xl shadow-gray-500/40">
                  <div className="relative overflow-hidden rounded-[0.6rem]">
                      <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto bg-white border border-gray-800"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  </div>
                </div>
                <div className="bg-gray-800 h-4 w-full rounded-b-xl mt-0.5 mx-auto max-w-[95%] shadow-lg"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const initiallyVisibleCount = 1;
  const visibleProjects = showAll ? projects : projects.slice(0, initiallyVisibleCount);
  const hasMoreProjects = projects.length > initiallyVisibleCount;

  return (
    <section className="relative py-24 min-h-screen overflow-hidden">
      {/* 1. The Colorful Background */}
      <BackgroundMesh />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-6 tracking-tighter drop-shadow-sm">
            SELECTED WORK
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl leading-relaxed">
                A showcase of my recent full-stack projects, focusing on SaaS architectures and intuitive user experiences.
            </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-8">
          {visibleProjects.map((project, index) => {
             const isNewItem = showAll && index >= initiallyVisibleCount;
             return (
              <div 
                key={project.id}
                className={`transition-all duration-700 ease-out ${isNewItem ? 'animate-in fade-in slide-in-from-bottom-12' : ''}`}
              >
                <ProjectCard project={project} />
              </div>
             );
          })}
        </div>

        {/* Button */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-20">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative bg-gray-900 text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 active:scale-95"
            >
              <span className="relative z-10">{showAll ? "Show Less" : "View All Projects"}</span>
              <Icons.ArrowDown className={`relative z-10 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              {/* Button gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;