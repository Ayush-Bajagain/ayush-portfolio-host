import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600">Ayush Bajagain</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Developer | Tech Enthusiast
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I'm passionate about creating beautiful, functional, and user-friendly web applications.
              With expertise in modern web technologies, I turn ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-full flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <img
              src="../../ayush.jpg"
              alt="Ayush Bajagain"
              className="rounded-full w-full shadow-2xl ring-4 ring-blue-600/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}