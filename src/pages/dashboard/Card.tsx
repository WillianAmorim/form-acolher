
interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?:string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Card({ children, title, subtitle, width, height, className }: CardProps) {
  return (
    <div 
      className={`p-4 rounded-lg m-2 card ${className}`}
      style={{ width: width, height: height }}
    >
      <h3 className="text-zinc-800 font-[700] text-[20px] title">{title}</h3>
      <h4 className="text-sm text-zinc-400 flex items-center gap-1 mb-2 subtitle">{subtitle}</h4>
      { children }
    </div>
  )
}

