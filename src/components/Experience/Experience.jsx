import React from "react";

// --- Icons ---

const CalendarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const CertificateIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// --- Background: Dark Burgundy Structural Grid ---
const StructuralGridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#5A0E24]">
    {/* 1. Gradient Overlay for Depth (Lighter top, Darker bottom) */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#5A0E24] via-[#400818] to-[#20030a]"></div>

    {/* 2. Base Dot Matrix Grid (White with low opacity) */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px'
      }}
    ></div>

    {/* 3. Large Architectural Shapes (SVG - Light Strokes) */}
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      {/* Curved Data Path */}
      <path d="M0 100 Q 300 100 500 400 T 1200 800" fill="none" stroke="#fb7185" strokeWidth="2" strokeDasharray="8 8" />

      {/* Geometric Accents */}
      <circle cx="85%" cy="15%" r="150" stroke="#ffffff" strokeWidth="40" fill="none" opacity="0.1" />
      <circle cx="85%" cy="15%" r="80" stroke="#fda4af" strokeWidth="2" fill="none" strokeDasharray="20 10" />

      {/* Square Frame Element */}
      <rect x="-50" y="60%" width="300" height="300" stroke="#ffffff" strokeWidth="20" fill="none" transform="rotate(-15)" opacity="0.05" />

      {/* Crosshairs */}
      <g stroke="#fda4af" strokeWidth="1" opacity="0.5">
        <path d="M100 50 L100 70 M90 60 L110 60" />
        <path d="M90% 80% L90% calc(80% + 20px) Mcalc(90% - 10px) calc(80% + 10px) Lcalc(90% + 10px) calc(80% + 10px)" />
      </g>
    </svg>

    {/* 4. Soft Color Zones (Glows) */}
    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
  </div>
);

// Mock Data
const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "First Track Solution Technologies Private Limited",
    date: "Feb 2025 – Present",
    desc: "At First Track Solution Technologies, I worked on building a user-friendly web application that improved efficiency and was used by over 1,500 users. I helped the team work better with the MERN stack, made deployments faster, and reduced issues. I also solved 60+ technical problems and improved overall system performance, which increased user satisfaction.",
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "SQL"],
    img: "https://firsttracksolutiontechnologies.com/images/logomain2.JPG",
    certificate: "https://drive.google.com/file/d/1J44_XCar7GopSmb8l5J5QsXHxaTD_p-D/view?usp=drivesdk", // Add your real certificate link here
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "IIIT Bhagalpur",
    date: "May 2025 – Aug 2025",
    desc: "During my Web Developer Internship at IIIT Bhagalpur, I worked on creating the college’s main website using Next.js and Tailwind CSS. I designed clean and responsive pages, improved overall usability, and added essential features to make the website easier for students and faculty to use. I also helped fix issues and ensured the site ran smoothly.",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XAQ2xo8rkv0_149yeB32blGy-nY0qsAUWQ&s",
    certificate: "https://drive.google.com/file/d/1SKYig9-9pVKbkxDKmPRDxlVrWZz_2iDd/view?usp=drivesdk", // Add your real certificate link here
  },
  {
    id: 3,
    role: "Community Manager",
    company: "IIIT Bhagalpur",
    date: "Jun 2023 - May 2024",
    desc: "As a Community Manager at IIIT Bhagalpur, I managed college events, tech activities, and the annual fest while coordinating with students. I encouraged participation in hackathons, handled communication, and helped maintain an active and engaging campus community.",
    skills: ["communication", "Leadership", "teamwork skills", "management Skills"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XAQ2xo8rkv0_149yeB32blGy-nY0qsAUWQ&s",
    certificate: "#", // Add your real certificate link here
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 md:px-8 lg:px-12 font-sans overflow-hidden bg-[#20030a]"
    >
      {/* --- Background Component --- */}
      <StructuralGridBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-rose-300 text-xs font-bold tracking-[0.2em] mb-4 border border-white/20 uppercase font-mono shadow-sm backdrop-blur-sm">
            // System_Log
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
            Experience<span className="text-rose-500">.struct</span>
          </h2>
          <p className="text-rose-100/80 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Architecting solutions and engineering success.
            A structured view of my professional timeline.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Data Bus (Center Line) */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full">
            {/* Double line effect for 'bus' look */}
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500 via-fuchsia-500 to-transparent opacity-80"></div>
          </div>

          {/* Experience Entries */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row items-center mb-20 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
            >
              {/* 1. Node (Center) */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-[#2a0510] border border-rose-500/30 rounded-xl shadow-[0_0_15px_rgba(225,29,72,0.3)] flex items-center justify-center p-1 relative rotate-45 sm:rotate-0 transition-transform duration-500 hover:rotate-45 hover:shadow-[0_0_25px_rgba(225,29,72,0.6)]">
                  {/* Inner Square */}
                  <div className="w-full h-full bg-[#5A0E24] rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  {/* Tiny connector pins decoration */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-rose-500/50"></div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-rose-500/50"></div>
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-8 w-0.5 bg-rose-500/50"></div>
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-8 w-0.5 bg-rose-500/50"></div>
                </div>
              </div>

              {/* 2. Spacer */}
              <div className="hidden sm:block w-1/2" />

              {/* 3. Tech Card */}
              <div className="w-full sm:w-1/2 pl-20 sm:pl-0 sm:px-12">
                <div
                  className={`relative bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-rose-500/30 transition-all duration-300 group`}
                >
                  {/* Digital Corner Markers */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-rose-500/50"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-rose-500/50"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-rose-500/50"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-rose-500/50"></div>

                  {/* Header */}
                  <div className="flex flex-col mb-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-rose-400 transition-colors">
                        {experience.role}
                      </h3>
                      {/* Terminal-style Date */}
                      <span className="font-mono text-xs font-bold text-rose-200 bg-white/5 px-2 py-1 rounded border border-white/10">
                        {`[${experience.date}]`}
                      </span>
                    </div>

                    <div className="flex items-center text-rose-300 font-semibold mt-1 text-sm uppercase tracking-wide">
                      <BriefcaseIcon className="w-4 h-4 mr-2" />
                      <span>{experience.company}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 font-light">
                    {experience.desc}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="border-t border-white/10 pt-4 mb-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] sm:text-xs font-medium text-rose-100 bg-white/5 border border-white/10 px-3 py-1 rounded shadow-sm flex items-center gap-1 hover:bg-rose-500/20 hover:border-rose-500/50 transition-colors cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* --- NEW CERTIFICATE SECTION --- */}
                  <div className="border-t border-white/10 pt-4 flex justify-end">
                    <a
                      href={experience.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-4 py-2 rounded bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all duration-300"
                    >
                      <CertificateIcon className="w-4 h-4 text-rose-400 group-hover/btn:text-white transition-colors" />
                      <span className="text-sm font-semibold text-rose-300 group-hover/btn:text-white transition-colors">
                        View Certificate
                      </span>
                      <ExternalLinkIcon className="w-3 h-3 text-rose-500/50 group-hover/btn:text-rose-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    </a>
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

export default Experience;