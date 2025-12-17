"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Moon, Sun } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "certificates", "hackathons", "contacts"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
   {
      title: "West Select",
      description:
        "A centralized e-commerce app for students in the university.",
      tech: ["Dart", "Flutter", "Firebase", "Cloudinary"],
      link: "https://github.com/jayyy404/west_select",
    },
    {
      title: "Object Detection System",
      description:
        "Basic AI-powered object detection model using Python and OpenCV.",
      tech: ["Python", "OpenCV"],
      link: "https://github.com/jayyy404/Object-Detection",
    },
    {
      title: "Personalized Health Coach",
      description:
        " A web-based health assistant app designed to provide personalized fitness and wellness recommendations. ",
      tech: ["Python", "Flask", "HTML", "CSS", "Gemini API"],
      link: "https://github.com/jayyy404/Personalized-Health-Coach",
    },
    {
      title: "Portfolio Website",
      description:
        "A minimalistic portfolio website showcasing projects and achievements with smooth animations.",
      tech: ["Tyescript", "Tailwind CSS", "Vercel"],
      link: "https://sapasapportfolio.vercel.app/",
    },
    {
      title: "Corner Detection System",
      description:
        " An image processing project that detects and highlights corner points in images.",
      tech: ["Python", "OpenCV"],
      link: "https://github.com/jayyy404/Corner-Detection",
    },
    {
      title: "Sigequest",
      description:
        "A job listing and recruitment mobile app focused on small-scale and part time gigs.",
      tech: ["Flutter", "Dart", "Firebase"],
      link: "https://github.com/jayyy404/Job-Search-App",
    },
    {
      title: "WVSU Coop Website",
      description:
        "A modern redesign of the WVSU Cooperative website for improved accessibility and layout.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      link: "https://github.com/jayyy404/WVSU_Coop",
    },
    {
      title: "Parking Occupancy Detection System",
      description:
        "A computer vision-based system that automatically detects and monitors parking space occupancy in real-time using video feeds. ",
      tech: ["Python", "OpenCV"],
      link: "https://github.com/jayyy404/Parking-Occupancy-Detection-",
    },
    {
      title: "Newton-Raphson Method Visualizer",
      description:
        "An interactive application that implements the Newton's method for optimization. ",
      tech: ["Python", "Streamlit"],
      link: "https://newton-raphson-optimization.streamlit.app/",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none z-50 p-2 md:p-6 w-full max-w-sm md:max-w-none md:w-auto">
  <div className="responsive-nav flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-2 sm:px-3 md:px-6 py-1.5 md:py-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50 mx-2 md:mx-0">
          {[
            { id: "skills", label: "Skills" },
            { id: "certificates", label: "Certificates" },
            { id: "hackathons", label: "Hackathons" },
            { id: "contacts", label: "Contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-[120px] sm:text-xs md:text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 px-0.5 sm:px-1 md:px-2 whitespace-nowrap ${
                activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden text-[9px]">
                {item.id === "skills" ? "Skills" : 
                 item.id === "certificates" ? "Certs" : 
                 item.id === "hackathons" ? "Hack" : "Contact"}
              </span>
              {activeSection === item.id && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full" />
              )}
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-1 md:p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group flex-shrink-0"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Moon className="w-3 h-3 md:w-4 md:h-4 text-gray-600 group-hover:rotate-12 transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>


<section
  id="home"
  className="min-h-[60vh] sm:min-h-[85vh] flex flex-col items-center justify-center relative py-16 px-4 overflow-hidden pt-24 md:pt-16"
>
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-albaster to-gray-100
                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

  {/* Image container - Circular */}
  <div
    className="image-container z-10
      bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm p-2 rounded-full shadow-2xl dark:shadow-gray-900/60
      w-72 h-72 md:w-96 md:h-96 mb-8 md:mb-12"
    style={{
      position: "static",
      transform: "none",
    }}
  >
    <img
      src="/image.jpg"
      alt="John Paul Sapasap"
      className="w-full h-full rounded-full object-cover"
    />
  </div>

  {/* Text container */}
  <div className="relative z-10 max-w-2xl text-center px-4 sm:px-0">
    {/* Eyebrow text */}
    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-light tracking-widest uppercase mb-4 md:mb-6">
      Welcome to my portfolio
    </p>

    {/* Main heading - Hero name */}
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text
                   bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900
                   dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 mb-6 md:mb-8 tracking-tight leading-tight">
      John Paul Sapasap
    </h1>

    {/* Brief description */}
    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
      Dedicated and enthusiastic Computer Science student majoring in Artificial Intelligence at West Visayas State University.
      Passionate about developing innovative mobile and web applications, with a growing focus on AI-driven systems.
    </p>
    

    <div className="mt-8 md:mt-10 w-16 h-0.5 mx-auto
                    bg-gradient-to-r from-transparent via-blue-500 dark:via-blue-400 to-transparent" />
  </div>

  {/* Bounce arrow */}
  <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 mt-8 md:mt-0">
    <div className="w-6 h-6 border-2 border-gray-400 dark:border-gray-500 rounded-full
                    flex items-center justify-center">
      <ChevronDown className="w-3 h-3 text-gray-400 dark:text-gray-500" />
    </div>
  </div>
</section>




      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200/50 dark:hover:border-blue-400/50 relative overflow-hidden cursor-pointer"
              >
                {/* Subtle hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 dark:from-blue-900/0 dark:to-purple-900/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-500 rounded-xl" />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-200 dark:hover:border-blue-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6 bg-albaster dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-200/50 dark:hover:border-blue-400/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[ "Python", "Java", "C++", "Dart"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200/50 dark:border-blue-400/30 hover:border-blue-300 dark:hover:border-blue-400 transition-colors duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-green-200/50 dark:hover:border-green-400/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Vue.js",  "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 text-sm rounded-full border border-green-200/50 dark:border-green-400/30 hover:border-green-300 dark:hover:border-green-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-orange-200/50 dark:hover:border-orange-400/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Dart", "FastAPI" ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full border border-orange-200/50 dark:border-orange-400/30 hover:border-orange-300 dark:hover:border-orange-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-purple-200/50 dark:hover:border-purple-400/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full border border-purple-200/50 dark:border-purple-400/30 hover:border-purple-300 dark:hover:border-purple-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-cyan-200/50 dark:hover:border-cyan-400/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Vercel", "Docker", "Render", "GitHub Actions" ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 text-sm rounded-full border border-cyan-200/50 dark:border-cyan-400/30 hover:border-cyan-300 dark:hover:border-cyan-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:border-yellow-200/50 dark:hover:border-yellow-400/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "VS Code", "Figma", ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full border border-yellow-200/50 dark:border-yellow-400/30 hover:border-yellow-300 dark:hover:border-yellow-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
            Certificates
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Introduction to Data Science",
                issuer:  "Cisco Networking Academy",
                date: "2025",
              },
              {
                title: "C++ Essentials 1",
                issuer: "Cisco Networking Academy",
                date: "2025",
              },
            
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-200/50 dark:hover:border-purple-400/50 relative overflow-hidden group"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
    
       <section id="hackathons" className="py-20 px-6 bg-albaster dark:bg-gray-800">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
      Hackathons
    </h2>

    <div className="space-y-6">
      {[
        {
          title: "Kaugmaon Hackathon, WVSU|CICT",
          achievement: "2nd Place Winner",
          project: "ExpenseEase - A personal finance management app",
          date: "2022",
        },
        {
          title: "Hacktheon Sejong International University Student Cybersecurity Competition",
          achievement: "Participant",
          date: "2024",
        },
         {
          title: "Westnovation Hackathon, WVSU|CICT",
          achievement: "Finalist",
          project: "Cervis - a mobile based app for pap smear analysis using hybrid deep learning model",
          date: "2025",
        },
      ].map((hackathon, index) => (
        <div
          key={index}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-200/50 dark:hover:border-purple-400/50 relative overflow-hidden group"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{hackathon.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{hackathon.date}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{hackathon.achievement}</p>
          {hackathon.project && (
            <p className="text-gray-600 dark:text-gray-400">Project: {hackathon.project}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contacts Section */}
      <section
        id="contacts"
        className="py-10 px-6 "
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
            Contacts
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md dark:shadow-gray-900/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Get In Touch</h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:johnpaulsapasap27@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors duration-300"
                  >
                    johnpaulsapasap27@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/john-paul-sapasap-1a21542b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors duration-300"
                  >
                    john-paul-sapasap-1a21542b3
                  </a>
                </p>
                <p>
                  <span className="font-medium">GitHub:</span>{" "}
                  <a
                    href="https://github.com/jayyy404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors duration-300"
                  >
                    jayyy404
                  </a>
                </p>
                <p>
                  <span className="font-medium">Location:</span> Iloilo City, Philippines
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              discuss a project or just say hello!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
