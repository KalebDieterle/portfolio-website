interface ProjectPlaceholderProps {
  title?: string;
  description?: string;
  githubUrl?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const ProjectPlaceholder = ({
  title = "More Coming Soon",
  description = "I'm always working on new projects. Check back soon or visit my GitHub to see what I'm building!",
  githubUrl = "https://github.com/KalebDieterle",
  gradientFrom = "from-purple-500",
  gradientTo = "to-pink-600",
}: ProjectPlaceholderProps) => (
  <div className="group relative lg:col-start-1 lg:col-end-3">
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300`}
    ></div>
    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 h-full flex flex-col items-center justify-center p-12 text-center">
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientFrom}/20 ${gradientTo}/20 flex items-center justify-center mb-6 border border-purple-500/30`}
      >
        <svg
          className="w-8 h-8 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm max-w-xs">{description}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
      >
        View GitHub Profile →
      </a>
    </div>
  </div>
);

export default ProjectPlaceholder;
