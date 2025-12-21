import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {
  SiLinkedin,
  SiGithub,
  SiLeetcode,
  SiCodechef,
  SiCodeforces
} from 'react-icons/si';

import profileImage from '../../assets/myimg.png';

const About = () => {
  // Configuration for your social links
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <SiLinkedin />,
      url: 'https:www.linkedin.com/in/naveen-bharti-b0bb84256',
      hoverColor: 'hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white',
    },
    {
      name: 'GitHub',
      icon: <SiGithub />,
      url: 'https://github.com/Bhartinaveen',
      hoverColor: 'hover:bg-[#333] hover:border-[#333] hover:text-white',
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode />,
      url: 'https://leetcode.com/u/Naveenbharti/',
      hoverColor: 'hover:bg-[#ffa116] hover:border-[#ffa116] hover:text-white',
    },
    {
      name: 'CodeChef',
      icon: <SiCodechef />,
      url: 'https://www.codechef.com/users/yoke_weasel_09',
      hoverColor: 'hover:bg-[#5B4638] hover:border-[#5B4638] hover:text-white',
    },
    {
      name: 'CodeForces',
      icon: <SiCodeforces />,
      url: 'https://codeforces.com/profile/Bhartinaveen',
      hoverColor: 'hover:bg-[#1f8dd6] hover:border-[#1f8dd6] hover:text-white',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-50 text-slate-800 dark:text-slate-800 px-6 md:px-12 lg:px-24 pt-15 pb-25 md:pt-3 md:pb-24 font-sans selection:bg-fuchsia-200 selection:text-fuchsia-900"
    >
      {/* ================= BACKGROUND ELEMENTS ================= */}

      {/* 1. THE BOX GRID PATTERN */}
      <div className="absolute inset-0 z-0 h-full w-full bg-white dark:bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      </div>

      {/* 2. Ambient Light Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right - Purple */}
        <div className="absolute top-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-purple-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
        {/* Bottom Left - Cyan */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '6s' }} />
        {/* Center Highlight */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-white/50 dark:bg-white/50 rounded-full blur-[120px]" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* --- LEFT SIDE: Text & CTA --- */}
        {/* UPDATED: Changed 'space-y-8' to 'space-y-6' to tighten vertical spacing */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/80 backdrop-blur-md border border-slate-200 dark:border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold text-slate-600 dark:text-slate-600 tracking-wide uppercase">
              Available & Ready to Code
            </span>
          </div>

          {/* Name Section */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-500 dark:text-slate-500">
              Hello, I'm
            </h1>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 bg-clip-text text-transparent">
                Naveen
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                Bharti
              </span>
            </h2>
          </div>

          {/* Typing Effect */}
          <div className="text-2xl sm:text-3xl font-bold flex flex-col sm:flex-row gap-2 justify-center lg:justify-start items-center">
            <span className="text-slate-400 dark:text-slate-400 font-medium">Building</span>
            <ReactTypingEffect
              text={[
                'Robust MERN Stacks.',
                'Interactive UI/UX.',
                'Scalable Backends.',
                'Data Structures.'
              ]}
              speed={50}
              eraseSpeed={30}
              typingDelay={500}
              eraseDelay={2500}
              cursorRenderer={(cursor) => (
                <span className="text-fuchsia-500">{cursor}</span>
              )}
              className="text-slate-700 dark:text-slate-700 decoration-fuchsia-500 underline decoration-4 underline-offset-4"
            />
          </div>

          {/* Bio Description */}
          <p className="text-slate-600 dark:text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I'm <strong>Naveen Bharti</strong>, a final-year <strong>CSE</strong> student at
            <span className="text-slate-900 dark:text-slate-900 font-semibold"> IIIT Bhagalpur</span> and
            <strong> full-stack developer</strong> skilled in building scalable apps with Next.js, Node.js, Express.js,
            and MongoDB, with a growing passion for <strong>AI/ML</strong>.
          </p>



          {/* Achievements Highlight */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-violet-100 dark:bg-violet-100 text-violet-700 dark:text-violet-700 rounded-md text-sm font-semibold border border-violet-200 dark:border-violet-200">
              🏆 SIH Winner in College (Rank 5)
            </span>
            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-100 text-amber-700 dark:text-amber-700 rounded-md text-sm font-semibold border border-amber-200 dark:border-amber-200">
              ⚡ Flipkart GRiD 6.0  Semifinalist AIR-19
            </span>
            {/* New CodeVita Section Added Here */}
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-100 text-emerald-700 dark:text-emerald-700 rounded-md text-sm font-semibold border border-emerald-200 dark:border-emerald-200">
              💻 CodeVita-13 Round 1 Qualified
            </span>
          </div>

          {/* Buttons Area: Resume */}
          {/* UPDATED: Removed 'pt-2' to move button higher */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1nQW59dNgXFr_e7OBkYtHdDCFmutQXafp/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-slate-900 dark:bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              Download Resume
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </div>

          {/* === SOCIAL LINKS SECTION === */}
          <div className="pt-4">
            <p className="text-sm font-semibold text-slate-500 mb-3 text-center lg:text-left uppercase tracking-wider">Connect with me</p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 border border-slate-200 text-slate-600 font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${link.hoverColor}`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* --- RIGHT SIDE: Visuals --- */}
        {/* UPDATED: Changed 'lg:-mt-16' to 'lg:-mt-24' to shift image significantly higher */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:-mt-24">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            className="relative z-20"
          >
            {/* Glass Card Container */}
            <div className="relative group">
              {/* Animated Border Gradient Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              {/* Main White Card - Forced White */}
              <div className="relative p-3 sm:p-5 bg-white/30 dark:bg-white/30 backdrop-blur-2xl border border-white/60 dark:border-white/60 rounded-[2rem] shadow-2xl">

                {/* Image Wrapper */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-[1.8rem] overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Naveen Bharti"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Badge (Bottom Left) - Forced White */}
                <div className="absolute -bottom-6 -left-4 bg-white/95 dark:bg-white/95 backdrop-blur px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white dark:border-white">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider">Experience</span>
                    <span className="font-bold text-slate-800 dark:text-slate-800 text-lg">Full Stack</span>
                  </div>
                </div>

              </div>

              {/* Decorative background shapes */}
              <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-orange-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-indigo-300 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;