import Section from "../ui/Section";

export default function Hero() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <Section
      id="hero"
      className="min-h-[90vh] flex items-center bg-[#cca300] pt-20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden hidden sm:block">
        <img
          src={`${basePath}/images/bg.png`}
          alt="Hero Background"
          className="w-full h-full object-cover object-center animate-fade-up"
        />
      </div>

      <div className="relative z-10 flex-1 max-w-5xl text-black px-4 sm:px-0">
        <p className="text-sm sm:text-base font-medium tracking-wide">
          Hi, my name is
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 mt-1">
          Shean Hans Teoh
        </h2>
        <p className="text-sm sm:text-base font-semibold">
          Aspiring Software Engineer
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-4">
          <a
            href="#contact"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black border-2 border-black text-white font-semibold rounded-xl hover:bg-[#ffeb3b] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,235,59,0.6)] text-center"
          >
            <span className="relative z-10">Get in Touch</span>
          </a>

          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-black font-semibold rounded-full hover:bg-[#f5f5f5] hover:text-black hover:border-[#333] transition-all duration-300 ease-in-out transform hover:scale-105 text-center"
          >
            View My Work
          </a>
        </div>
      </div>
    </Section>
  );
}
