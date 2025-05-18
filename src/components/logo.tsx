import Link from 'next/link';
import { Rocket } from 'lucide-react'; // Using Rocket as a playful icon related to "POWER"

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

export function Logo({ className, iconSize = 28, textSize = "text-3xl" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold text-primary ${className}`}>
      <Rocket size={iconSize} className="transform -rotate-45" />
      <span className={textSize}>POWER</span>
    </Link>
  );
}
