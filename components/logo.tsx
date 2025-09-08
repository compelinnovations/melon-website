import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = (params: {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src={params.src || "/images/logo.png"}
      width={params.width || 1920}
      height={params.height || 1080}
      alt="Melon logo"
      className={cn(`w-full h-auto  object-contain`, params.className)}
      priority
    />
  );
};

export default Logo;
