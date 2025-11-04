import Section from "../ui/Section";
import CardFlip from "../ui/CardFlip";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      subtitle: "Full-stack shopping experience",
      description:
        "A modern e-commerce solution with payment integration and inventory management.",
      features: ["React", "Next.js", "Stripe", "PostgreSQL"],
    },
    {
      title: "AI Task Manager",
      subtitle: "Smart productivity tool",
      description:
        "AI-powered task management system with intelligent prioritization and scheduling.",
      features: ["TypeScript", "Python", "Firebase", "OpenAI"],
    },
    {
      title: "Mobile Fitness App",
      subtitle: "Health & wellness tracker",
      description:
        "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
      features: ["Flutter", "Supabase", "Android", "iOS"],
    },
    {
      title: "Design System",
      subtitle: "Component library",
      description:
        "Comprehensive UI component library with documentation and interactive examples.",
      features: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <div className="bg-gray-50">
      <Section id="projects" className="py-20">
        <div className="w-full">
          <h2 className="text-5xl font-bold mb-16 text-center">PROJECTS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <CardFlip
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                features={project.features}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
