import { motion } from "motion/react";
import { 
  Brain, 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Search, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal,
  Activity,
  Layers,
  ChevronRight,
  Monitor
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Neural Vision API",
    description: "High-performance computer vision API built with PyTorch and FastAPI, capable of real-time object detection and segmentation.",
    tech: ["PyTorch", "FastAPI", "Docker", "Redis"],
    link: "#",
    type: "AI/ML"
  },
  {
    title: "EcoDash: Green Analytics",
    description: "Full-stack dashboard for monitoring environmental data points with real-time ML forecasting for energy consumption.",
    tech: ["Django", "React", "PostgreSQL", "Scikit-Learn"],
    link: "#",
    type: "Website"
  },
  {
    title: "RL Traffic Optimizer",
    description: "Research project implementing Reinforcement Learning to optimize urban traffic signal timings in simulated environments.",
    tech: ["Python", "TensorFlow", "SUMO", "NumPy"],
    link: "#",
    type: "Research"
  }
];

const EXPERIENCE = [
  {
    company: "Research Institute of AI",
    role: "ML Researcher",
    period: "2023 - Present",
    desc: "Leading research on lightweight transformer architectures for edge devices. Published 2 conference papers."
  },
  {
    company: "DataStream Systems",
    role: "Python & Django Developer",
    period: "2021 - 2023",
    desc: "Architected scalable backend services for data-intensive applications. Improved API response time by 40%."
  },
  {
    company: "Creative Web Innovations",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    desc: "Built responsive web applications focusing on clean UI and seamless user experience."
  }
];

const SKILLS = [
  { name: "AI Developer", icon: <Brain className="w-5 h-5" />, color: "text-blue-500" },
  { name: "ML Engineer", icon: <Cpu className="w-5 h-5" />, color: "text-purple-500" },
  { name: "Python & Django", icon: <Terminal className="w-5 h-5" />, color: "text-green-600" },
  { name: "Website Developer", icon: <Monitor className="w-5 h-5" />, color: "text-amber-500" },
  { name: "Research", icon: <Search className="w-5 h-5" />, color: "text-rose-500" }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans selection:bg-brand-gold/30">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-medium text-lg tracking-widest text-white uppercase"
          >
            Portfolio <span className="text-zinc-600">—</span> 2026
          </motion.div>
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-500">
            {["About", "Skills", "Experience", "Work"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().slice(0, 3)}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] uppercase tracking-widest font-semibold border-b border-brand-gold pb-1 hover:text-white transition-all text-zinc-300 px-1"
          >
            Get in touch
          </motion.a>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Layout Container for Sidebar/Main Content Feel */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen border-x border-zinc-900">
          
          {/* Sidebar Area (Intro) */}
          <aside className="lg:col-span-5 border-r border-zinc-900 p-8 lg:p-20 flex flex-col justify-between bg-zinc-950">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-24 lg:pt-32"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-12">System Architect</span>
              <h1 className="text-7xl lg:text-8xl font-display font-light leading-[0.85] mb-12 tracking-tighter text-white">
                Tech<br />
                <span className="text-zinc-700">Scholar.</span>
              </h1>
              
              <div className="role-list space-y-2 mb-16">
                <div className="text-xs tracking-wider text-zinc-500 uppercase h-6 border-l border-zinc-800 pl-4 flex items-center">AI Developer</div>
                <div className="text-xs tracking-wider text-zinc-500 uppercase h-6 border-l border-zinc-800 pl-4 flex items-center">ML Engineer</div>
                <div className="text-xs tracking-wider text-zinc-500 uppercase h-6 border-l border-zinc-800 pl-4 flex items-center">Python & Django</div>
                <div className="text-xs tracking-wider text-zinc-500 uppercase h-6 border-l border-zinc-800 pl-4 flex items-center">Researcher</div>
              </div>

              <div className="flex gap-6 items-center">
                <Github className="w-4 h-4 text-zinc-700 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-4 h-4 text-zinc-700 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-4 h-4 text-zinc-700 hover:text-white cursor-pointer transition-colors" />
                <div className="h-[1px] w-12 bg-zinc-900"></div>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600">Connect Globally</span>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center gap-4 py-8">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="font-serif italic text-brand-gold text-sm">Synthesizing human intelligence with machine precision.</span>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="lg:col-span-7 bg-zinc-950 p-8 lg:p-20 space-y-32">
            
            {/* Mission Statement */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-6">Mission</span>
              <p className="text-xl lg:text-2xl text-zinc-400 font-light leading-snug">
                Building <span className="text-white">autonomous ecosystems</span> and high-performance neural architectures designed for scalability and efficiency.
              </p>
            </motion.div>

            {/* Skills Pills */}
            <div id="ski">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-10">Technical Arsenal</span>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                  <span key={skill.name} className="px-6 py-2 border border-zinc-800 rounded-full text-[10px] uppercase tracking-widest text-zinc-400 hover:border-brand-gold hover:text-white transition-all cursor-default">
                    {skill.name}
                  </span>
                ))}
                <span className="px-6 py-2 border border-zinc-800 rounded-full text-[10px] uppercase tracking-widest text-zinc-400">PyTorch</span>
                <span className="px-6 py-2 border border-zinc-800 rounded-full text-[10px] uppercase tracking-widest text-zinc-400">Django</span>
                <span className="px-6 py-2 border border-zinc-800 rounded-full text-[10px] uppercase tracking-widest text-zinc-400">FastAPI</span>
              </div>
            </div>

            {/* Work Grid */}
            <div id="wor">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-12">Selected Projects</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {PROJECTS.map((project) => (
                  <div key={project.title} className="group border-b border-zinc-900 pb-10">
                    <div className="text-[9px] uppercase tracking-widest text-brand-gold mb-3 opacity-60">{project.type}</div>
                    <h3 className="text-lg font-display font-medium text-white mb-3 group-hover:text-brand-gold transition-colors flex items-center justify-between">
                      {project.title} <ExternalLink className="w-3 h-3 text-zinc-700" />
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Journey */}
            <div id="exp">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-12">Professional Journey</span>
              <div className="space-y-16">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.company} className="relative">
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-medium">{exp.company}</span>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <h4 className="text-base font-display font-normal text-zinc-200 mb-4">{exp.role}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed italic border-l border-zinc-900 pl-6">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer/Contact */}
            <div id="con" className="pt-20 border-t border-zinc-900">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 block mb-8">Interaction</span>
              <h2 className="text-4xl lg:text-5xl font-display font-light text-white mb-10 tracking-tighter">
                Transforming complex <br />
                data into <span className="text-brand-gold italic font-serif">elegant solutions.</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-500">
                <a href="mailto:mlresearcher23@gmail.com" className="text-white border-b border-brand-gold pb-1 w-fit">mlresearcher23@gmail.com</a>
                <span className="cursor-pointer hover:text-white transition-colors">GitHub Archive</span>
                <span className="cursor-pointer hover:text-white transition-colors">LinkedIn Profile</span>
              </div>
              
              <div className="pt-32 flex justify-between items-center text-[9px] text-zinc-700 uppercase tracking-[0.4em]">
                <span>&copy; 2026 TS.</span>
                <span>All Rights Reserved</span>
              </div>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}
