import Section from "../ui/Section";
import TechnologyStack from "../ui/TechnologyStack";
import Timeline from "../ui/Timeline";
import SkillCard from "../ui/SkillCard";

export default function About() {
  return (
    <div className="bg-[#cca300]">
      <Section id="about" className="py-20 bg-white rounded-t-[3rem]">
        <div className="w-full">
          {/* Section Title */}
          <h2 className="text-5xl font-bold mb-16 text-center">ABOUT</h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-12 lg:gap-y-12">
            {/* Introduction - Row 1, Column 1 */}
            <div className="lg:row-start-1">
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#cca300]">
                  INTRODUCTION
                </h3>
                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <span className="text-[#cca300] font-semibold">
                      🌱 Hi, I&apos;m{" "}
                    </span>
                    <span className="text-black font-bold">
                      Shean Hans Teoh
                    </span>
                  </p>

                  <p>
                    My name is Shean Hans. I&apos;m an{" "}
                    <strong className="text-[#cca300]">
                      aspiring software engineer
                    </strong>{" "}
                    specializing in AI and Cloud Computing. I like to build
                    things for the web and create innovative software solutions
                    that make a difference.
                  </p>

                  <p>
                    I bring a comprehensive skill set spanning full-stack
                    development with expertise in Python, Java, JavaScript, and
                    TypeScript. My frontend capabilities include building
                    responsive, user-centric applications with React, Next.js,
                    and Flutter, while my backend experience covers Supabase,
                    Firebase, Node.js, and MySQL. I&apos;ve optimized production
                    React code for high-traffic platforms, implemented cloud
                    monitoring with Datadog, and led a team in developing
                    full-stack solutions that combine web and mobile
                    technologies.
                  </p>

                  <p>
                    Beyond coding, I find balance through gardening and
                    calisthenics training—activities that reinforce the
                    patience, discipline, and focus . I&apos;m passionate about
                    exploring emerging technologies and continuously expanding
                    my expertise to create meaningful impact.
                  </p>

                  {/* Personal Motto */}
                  <div className="mt-8 relative py-4 px-6 border border-[#cca300]/40 shadow-md">
                    {/* Top-left corner */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-[#cca300]"></div>

                    <p className="text-lg italic text-black leading-relaxed font-medium">
                      Pray as though everything depended on God. Work as though
                      everything depended on you.
                    </p>

                    {/* Bottom-right corner */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-[#cca300]"></div>

                    <p className="text-sm text-gray-500 mt-2 text-right font-normal">
                      — Saint Augustine of Hippo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies - Row 1, Column 2 */}
            <div className="lg:row-start-1">
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#cca300]">
                  TECHNOLOGIES
                </h3>
                <TechnologyStack />
              </div>
            </div>

            {/* Main Skills - Row 2, Column 1 */}
            <div className="lg:row-start-2">
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#cca300]">
                  MAIN SKILLS
                </h3>
                <div className="space-y-4">
                  <SkillCard
                    image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    title="React Engineering"
                    description="Building scalable, maintainable web apps with modern frameworks like React and Next.js"
                    color="#00ff88"
                  />
                  <SkillCard
                    image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    title="Machine Learning & AI"
                    description="Applying data mining, ML algorithms, and advanced techniques to solve complex problems and build intelligent solutions"
                    color="#00d4ff"
                  />
                </div>
              </div>
            </div>

            {/* Education & Experience - Row 2, Column 2 */}
            <div className="lg:row-start-2">
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#cca300]">
                  EDUCATION & EXPERIENCE
                </h3>
                <div className="space-y-4">
                  <SkillCard
                    variant="education"
                    image="images/tus.ico"
                    title="BSc Software Design with AI for Cloud Computing"
                    subtitle="Technological University of the Shannon:  2022 ~ Present"
                    description="Currently pursuing degree with focus on modern software development, artificial intelligence, and cloud computing technologies."
                    color="#00ff88"
                  />
                  <SkillCard
                    variant="education"
                    image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Yahoo%21_%282019%29.svg"
                    title="News Engineering Internship"
                    subtitle="Yahoo! - Jan ~ Aug 2025"
                    description="Gained hands-on experience with React, Next.js, and modern web development practices. Worked on real-world projects and collaborated with development teams."
                    color="#00d4ff"
                  />
                </div>
              </div>
            </div>

            {/* Work Timeline - Row 3, Full Width */}
            <div className="lg:row-start-3 lg:col-span-2">
              <div className="bg-[#cca300] -mx-6 px-6 py-12 rounded-xl">
                <h3 className="text-xl font-bold mb-12 text-black text-center">
                  WORK TIMELINE
                </h3>
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
