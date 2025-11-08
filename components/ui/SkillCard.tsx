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
}: SkillCardProps) {
  return (
    <div className="group relative p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="flex items-start gap-5 relative z-10">
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 bg-gray-50 rounded-xl p-3 group-hover:bg-[#cca300]/10 transition-colors">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-2 text-black group-hover:text-[#cca300] transition-colors">
            {title}
          </h4>
          {subtitle && (
            <p className="text-sm font-medium text-gray-600 mb-2">{subtitle}</p>
          )}
          {description && (
            <p className="text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
