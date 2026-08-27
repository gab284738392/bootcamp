export default function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-white border border-[#d6cfc6] text-[#2c2620] hover:bg-[#e8f0e5] hover:border-[#7a9470] transition-colors duration-200 cursor-default">
      {label}
    </span>
  );
}
