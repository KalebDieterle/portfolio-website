interface StatCardProps {
  value: string;
  label: string;
  gradient: string;
}

const StatCard = ({ value, label, gradient }: StatCardProps) => (
  <div className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/30">
    <div
      className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
    >
      {value}
    </div>
    <p className="text-gray-400 text-sm mt-1">{label}</p>
  </div>
);

export default StatCard;
