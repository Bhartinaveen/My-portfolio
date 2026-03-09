import React, { useRef, useState } from "react";
import ragIcon from "../../assets/rag_icon.png";
import dsaIcon from "../../assets/dsa_icon.png";
// Removed external dependencies (lucide-react) to fix build errors.
// Icons are now defined as inline components below.

// --- INLINE ICON COMPONENTS ---
const LayoutIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="8" x="2" y="2" rx="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

const DatabaseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const WrenchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// --- CUSTOM TILT COMPONENT ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (max 10 degrees)
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;

    // Reverse values for natural tilt feel
    const rotateY = xPct * 20;
    const rotateX = -yPct * 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
          : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
      }}
      className={className}
    >
      {children}
    </div>
  );
};

// --- MOCK DATA ---
const SkillsInfo = [
  {
    title: "Programming Languages",
    className: "lg:col-span-1",
    skills: [
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    icon: <CodeIcon className="w-6 h-6 text-yellow-500" />
  },
  {
    title: "Frontend",
    className: "lg:col-span-2",
    skills: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    icon: <LayoutIcon className="w-6 h-6 text-pink-500" />
  },
  {
    title: "Backend",
    className: "lg:col-span-1",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs", logo: "https://www.vectorlogo.zone/logos/json/json-icon.svg" },
      { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "WebSockets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    ],
    icon: <ServerIcon className="w-6 h-6 text-green-500" />
  },
  {
    title: "AI/Generative AI",
    className: "lg:col-span-1",
    skills: [
      { name: "OpenAI API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg" },
      { name: "LangChain", logo: "/langchain_logo.png" },
      { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "LLM Integration", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "RAG", logo: ragIcon }, // Custom DALL-E logo
    ],
    icon: <DatabaseIcon className="w-6 h-6 text-indigo-500" />
  },
  {
    title: "Databases",
    className: "lg:col-span-1",
    skills: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Vector Databases", logo: "https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg" },
    ],
    icon: <DatabaseIcon className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Data Engineering",
    className: "lg:col-span-2",
    skills: [
      { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
      { name: "Hadoop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
      { name: "MapReduce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
      { name: "Apache Airflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
      { name: "Apache Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Data Warehousing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    ],
    icon: <ServerIcon className="w-6 h-6 text-cyan-500" />
  },
  {
    title: "Cloud & DevOps",
    className: "lg:col-span-1",
    skills: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    ],
    icon: <WrenchIcon className="w-6 h-6 text-red-500" />
  },
  {
    title: "Tools",
    className: "lg:col-span-1",
    skills: [
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Puppeteer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
      { name: "Redux Toolkit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "JWT Authentication", logo: "https://www.vectorlogo.zone/logos/auth0/auth0-icon.svg" },
    ],
    icon: <WrenchIcon className="w-6 h-6 text-teal-500" />
  },
  {
    title: "Core Computer Science",
    className: "lg:col-span-2",
    skills: [
      { name: "Data Structures & Algorithms", logo: dsaIcon },
      { name: "Object-Oriented Programming (OOP)", logo: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg" },
      { name: "DBMS", logo: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
      { name: "Operating Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "Computer Networks", logo: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg" },
      { name: "Software Engineering", logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
    ],
    icon: <CodeIcon className="w-6 h-6 text-orange-500" />
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen py-24 overflow-hidden font-sans">

      {/* --- BACKGROUND DECORATION START --- */}

      {/* 1. Base light background */}
      <div className="absolute inset-0 bg-slate-50 z-0"></div>

      {/* 2. Four-Color Gradient Blobs (Blurred) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-20 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* 3. The Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* --- BACKGROUND DECORATION END --- */}


      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical expertise, crafted through years of dedicated learning and building complex applications.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SkillsInfo.map((category, index) => (
            <TiltCard
              key={category.title}
              className="h-full"
            >
              {/* Card Container - Premium Glassmorphism */}
              <div className="h-full flex flex-col bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/50 hover:border-white/80 transition-all duration-500 relative overflow-hidden group z-10">

                {/* Decorative background glow inside the card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700 z-0"></div>

                {/* Card Header */}
                <div className="flex items-center justify-center mb-6 gap-3 relative z-10 w-full">
                  {/* Optional Icon if available in data, else fallback */}
                  {category.icon && <div className="p-2 bg-white/80 rounded-xl shadow-sm">{category.icon}</div>}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 text-center">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid inside Card */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 flex-grow relative z-10">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex flex-col items-center justify-start gap-2 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-sm hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                      {/* Logo Container */}
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover/skill:scale-110 shrink-0">
                        {skill.logo ? (
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain drop-shadow-sm"
                            onError={(e) => {
                              e.target.onerror = null; // prevents looping
                              e.target.style.display = 'none';
                              if (e.target.nextElementSibling) {
                                e.target.nextElementSibling.style.display = 'flex';
                              }
                            }}
                          />
                        ) : null}
                        <div
                          className="text-[10px] sm:text-xs text-slate-500 font-bold items-center justify-center h-full w-full bg-slate-100 rounded-full border border-slate-200"
                          style={{ display: skill.logo ? 'none' : 'flex' }}
                        >
                          {skill.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>

                      {/* Skill Name */}
                      <span className="text-[11px] sm:text-xs font-semibold text-slate-700 text-center group-hover/skill:text-purple-700 transition-colors leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Skills;