import { IconType } from "react-icons/lib";
import Card from "./Card";

interface CardNumberProps {
  title?: string;
  subtitle?: string;
  number?: number;
  Icon?: IconType;
  bgIcon?: string;
  iconColor?: string;
}

export default function CardNumber({
  title,
  number = 0,
  subtitle,
  Icon,
  bgIcon="rgb(212, 212, 216)",
  iconColor="inherit"
}: CardNumberProps) {
  return (
    <Card title={title} subtitle={subtitle}>
      <div className="flex items-center justify-between mt-4">
        {Icon && (
          <div className="bg-zinc-300 p-2 rounded-lg"
            style={{ background: bgIcon }}
          >
            <Icon size={24} color={iconColor} />
          </div>
        )}
        <span className="text-4xl my-2 font-bold">{number}</span>
      </div>
    </Card>
  );
}
