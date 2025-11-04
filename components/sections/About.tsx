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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN */}
            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#cca300]">
                  INTRODUCTION
                </h3>
                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <span className="text-[#cca300] font-semibold">
                      👋 Hi, I&apos;m{" "}
                    </span>
                    <span className="text-[#00ff88] font-bold">
                      Shean Hans Teoh
                    </span>
                  </p>

                  <p>
                    My name is Shean Hans. I&apos;m an aspiring software
                    engineer specializing in AI and Cloud Computing. I like to
                    build things for the web and create innovative software
                    solutions that make a difference.
                  </p>
                  <p>
                    I&apos;m passionate about exploring new technologies and
                    continuously honing my skills to fulfill my goal of becoming
                    a proficient software developer.
                  </p>

                  {/* Personal Motto */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-lg italic text-gray-700 leading-relaxed">
                      &ldquo;Pray as though everything depended on God. Work as
                      though everything depended on you.&rdquo;
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      — Saint Augustine of Hippo
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Skills */}
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
                    image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    title="UI/UX & Design Systems"
                    description="Crafting intuitive, visually polished interfaces with a strong focus on UX"
                    color="#00d4ff"
                  />
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#cca300]">
                  EDUCATION & EXPERIENCE
                </h3>
                <div className="space-y-4">
                  <SkillCard
                    variant="education"
                    image="images/tus.ico"
                    title="BSc Software Design with AI for Cloud Computing"
                    subtitle="Technological University of the Shannon - 2023 - Present"
                    description="Currently pursuing degree with focus on modern software development, artificial intelligence, and cloud computing technologies."
                    color="#00ff88"
                  />
                  <SkillCard
                    variant="education"
                    image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Yahoo%21_%282019%29.svg"
                    title="News Engineering Internship"
                    subtitle="Yahoo! - 2023"
                    description="Gained hands-on experience with React, Next.js, and modern web development practices. Worked on real-world projects and collaborated with development teams."
                    color="#00d4ff"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-12">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#cca300]">
                  TECHNOLOGIES
                </h3>
                <TechnologyStack />
              </div>

              {/* Work Timeline */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#cca300]">
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
