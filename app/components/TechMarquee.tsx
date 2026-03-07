const marqueeItems = [
  { text: "Next.js", dot: "bg-gray-400" },
  { text: "TypeScript", dot: "bg-blue-400" },
  { text: "Python", dot: "bg-yellow-400" },
  { text: "React", dot: "bg-cyan-400" },
  { text: "PostgreSQL", dot: "bg-sky-400" },
  { text: "FastAPI", dot: "bg-green-400" },
  { text: "Tailwind CSS", dot: "bg-teal-400" },
  { text: "Drizzle ORM", dot: "bg-emerald-400" },
  { text: "Selenium", dot: "bg-lime-400" },
  { text: "REST APIs", dot: "bg-indigo-400" },
  { text: "LightGBM", dot: "bg-pink-400" },
  { text: "Git", dot: "bg-orange-400" },
  { text: "Node.js", dot: "bg-green-500" },
  { text: "SQL", dot: "bg-blue-300" },
];

// Duplicate for seamless loop
const items = [...marqueeItems, ...marqueeItems];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-5 border-y border-slate-700/30 bg-slate-900/40 backdrop-blur-sm">
      {/* Fade masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm font-medium text-gray-400 shrink-0 hover:text-gray-200 transition-colors">
            <span className={`w-1.5 h-1.5 rounded-full ${item.dot} opacity-70`} />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
