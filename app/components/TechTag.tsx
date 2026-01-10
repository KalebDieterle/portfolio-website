interface TechTagProps {
  name: string;
  color: string;
}

const TechTag = ({ name, color }: TechTagProps) => (
  <span
    className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform cursor-default`}
  >
    {name}
  </span>
);

export default TechTag;
