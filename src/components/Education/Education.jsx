import React, { useEffect, useRef, useState } from "react";

// --- INLINE SVG ICONS ---
const GraduationCap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const Calendar = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const Award = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const Percent = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const ChartBar = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

// --- MOCK DATA ---
const educationData = [
  {
    id: 1,
    school: "IIIT Bhagalpur",
    degree: "Btech in Computer Science Engineering",
    date: "Nov 2022 - May 2026",
    cgpa: "7.36/10",
    percentage: "73.6%",
    // Changed to a single string value for Current SGPA
    sgpa: "8.25/10", 
    desc: "Specialized in Computer Science Engineering with a focus on software development and modern web technologies, and served as the lead developer for the university innovation lab.",
    img: "https://www.iiitbh.ac.in/convocation/assets/clglogo-12luq4fJ.jpg", 
  },
  {
    id: 2,
    school: "R K RAHMANIA HIGH SCHOOL TARA",
    degree: "Intermediate(class-12) (JAC-Board)",
    date: "30 july 2021",
    cgpa: "N/A",
    percentage: "73%",
    desc: "Completed Intermediate education with PCM (Physics, Chemistry, Mathematics) under the Jharkhand Academic Council, gaining a strong foundation in analytical thinking and problem-solving.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    school: "R K RAHMANIA HIGH SCHOOL TARA",
    degree: "class-10th , Education(JAC-Board)",
    date: "16 May 2019",
    cgpa: "N/A",
    percentage: "91.8%",
    desc: "Completed Matriculation under the Jharkhand Academic Council with general subjects including Science, Mathematics, Social Science, English, and Hindi, building a solid academic foundation across core disciplines.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=200&auto=format&fit=crop",
  },
];

// --- SCROLL ANIMATION HOOK ---
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

const TimelineItem = ({ edu, index }) => {
  const [ref, isVisible] = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center md:justify-between mb-12 last:mb-0 w-full 
        transition-all duration-1000 ease-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        ${isEven ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      {/* Spacer for Desktop Alternating Layout */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Dot/Icon */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-[#662222] bg-[#662222] shadow-lg z-20 flex items-center justify-center transition-transform duration-500 hover:scale-125`}>
          <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </div>

      {/* Content Card */}
      <div className={`w-full pl-16 md:pl-0 md:w-5/12 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="group relative">
          
          {/* Card Body - Dark Red Theme #662222 */}
          <div className="relative p-6 md:p-8 rounded-2xl bg-[#662222] border border-white/10 shadow-xl shadow-red-900/20 hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-300">
            
            {/* Header: Image + Title */}
            <div className="flex flex-col sm:flex-row gap-5 mb-5 items-start sm:items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden shrink-0 border border-white/20 shadow-sm group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={edu.img} 
                  alt={edu.school} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-rose-200 transition-colors">
                  {edu.school}
                </h3>
                <p className="text-rose-200/90 font-semibold text-sm flex items-center gap-2 mt-1">
                  <Award className="w-4 h-4" />
                  {edu.degree}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-sm leading-relaxed mb-6 font-normal">
              {edu.desc}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3 mb-6">
               <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/20 border border-white/10 transition-colors">
                  <ChartBar className="w-4 h-4 text-rose-300" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">CGPA</span>
                    <span className="text-sm font-bold text-white">{edu.cgpa}</span>
                  </div>
               </div>
               <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/20 border border-white/10 transition-colors">
                  <Percent className="w-4 h-4 text-orange-300" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-300 uppercase font-bold tracking-wider">Percentage</span>
                    <span className="text-sm font-bold text-white">{edu.percentage}</span>
                  </div>
               </div>
            </div>

            {/* Current SGPA Section (Conditional Rendering) */}
            {edu.sgpa && (
              <div className="mb-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-900/20 border border-emerald-500/20 transition-all hover:bg-emerald-900/30">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Current SGPA</span>
                  </div>
                  <span className="text-lg font-mono font-bold text-white">{edu.sgpa}</span>
                </div>
              </div>
            )}

            {/* Footer Date */}
            <div className={`flex items-center gap-2 text-xs text-gray-300 font-medium font-mono ${!edu.sgpa ? 'pt-4 border-t border-white/10' : ''}`}>
              <Calendar className="w-3.5 h-3.5" />
              <span>{edu.date}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    // Background: Changed to #F7F4EA (Light Beige)
    <section id="education" className="relative min-h-screen w-full py-24 overflow-hidden bg-[#F7F4EA]">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Subtle White Mesh Grid for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      
      {/* Soft Ambient Light Blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/60 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/60 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-gray-900/5 bg-white/50 backdrop-blur-md">
            <span className="text-gray-800 font-bold tracking-widest uppercase text-xs">
              Academic Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Education Timeline
          </h2>
          <div className="w-24 h-1.5 bg-[#662222] mx-auto rounded-full opacity-80" />
          <p className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            The foundational years and institutions that shaped my technical expertise and professional growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pb-20">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#662222]/30 shadow-sm rounded-full"></div>

          {/* Timeline Items Wrapper */}
          <div className="relative">
            {educationData.map((edu, index) => (
              <TimelineItem key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;