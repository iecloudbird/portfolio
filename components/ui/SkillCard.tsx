interface SkillCardProps {
  image: string;
  title: string;
  description?: string;
  subtitle?: string;
  color: string;
  variant?: "skill" | "education";
}

export default function SkillCard({
  image,
  title,
  description,
  subtitle,
  color,
  variant = "skill",
}: SkillCardProps) {
  return (
    <div
      className="p-6 border-l-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      style={{ borderLeftColor: color }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2" style={{ color }}>
            {title}
          </h4>
          {subtitle && (
            <p
              className={`text-sm mb-1 ${
                variant === "education" ? "text-gray-700" : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              className={`text-${
                variant === "education" ? "xs" : "sm"
              } text-gray-${
                variant === "education" ? "500" : "600"
              } leading-relaxed`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
