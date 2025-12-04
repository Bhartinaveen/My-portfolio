import React from "react";

// --- Inline Icon Components ---

const Mail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Phone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// --- Main Component ---

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[60vh] w-full flex items-center justify-center py-24 px-4 sm:px-12 md:px-20 bg-[#FAF8F1] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col items-center text-center relative z-10 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Let's chat. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Tell me about your project.
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl pt-2">
            Let's create something together. I'm open for freelance projects, 
            full-time opportunities, or just a friendly hello.
          </p>
        </div>

        {/* Contact Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Email Card - UPDATED SECTION */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-3 bg-purple-50 rounded-xl shrink-0">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">Mail me at</p>
              
              {/* Updated: smaller font (text-sm) and forced no-wrap */}
              <a href="mailto:bhartinaveen943@gmail.com" className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors whitespace-nowrap">
               1. bhartinaveen943@gmail.com
              </a>
              
              {/* Updated: smaller font (text-sm) and forced no-wrap */}
              <a href="mailto:naveen.2201212cs@iiitbh.ac.in" className="text-sm font-semibold text-gray-900 hover:text-purple-600 transition-colors whitespace-nowrap">
               2. naveen.2201212cs@iiitbh.ac.in
              </a>
            </div>
          </div>

          {/* Phone Card - Updated font sizes for consistency */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-3 bg-emerald-50 rounded-xl shrink-0">
              <Phone className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">Call me at</p>
              <a href="tel:+919264247972" className="text-sm font-semibold text-gray-900 hover:text-emerald-600 transition-colors whitespace-nowrap">
                +91-9264247972
              </a>
            </div>
          </div>

          {/* Location Card - Updated font sizes for consistency */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-3 md:space-y-0 md:space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-3 bg-pink-50 rounded-xl shrink-0">
              <MapPin className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">Current Location</p>
              <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                Palamu , Jharkhand , India 
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-6 pt-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Follow me on social media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { 
                icon: Github, 
                href: "https://github.com/Bhartinaveen", 
                color: "text-gray-900", 
                hoverColor: "hover:border-gray-900", 
                label: "Github" 
              },
              { 
                icon: Linkedin, 
                href: "https://www.linkedin.com/in/naveen-bharti-b0bb84256", 
                color: "text-blue-600", 
                hoverColor: "hover:border-blue-600", 
                label: "LinkedIn" 
              },
              { 
                icon: Twitter, 
                href: "https://x.com/NaveenB79350171", 
                color: "text-sky-500", 
                hoverColor: "hover:border-sky-500", 
                label: "Twitter" 
              },
              { 
                icon: Instagram, 
                href: "https://www.instagram.com/bharti_nv/?hl=en", 
                color: "text-pink-600", 
                hoverColor: "hover:border-pink-600", 
                label: "Instagram" 
              },
              { 
                icon: Facebook, 
                href: "#", 
                color: "text-blue-700", 
                hoverColor: "hover:border-blue-700", 
                label: "Facebook" 
              },
            ].map((Social, index) => (
              <a
                key={index}
                href={Social.href}
                aria-label={Social.label}
                className={`p-4 bg-white border border-gray-200 shadow-sm rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md ${Social.color} ${Social.hoverColor}`}
              >
                <Social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;