import { Code, Code2 } from "lucide-react";
import Link from "next/link";
const Logo = ({
  title,
  titleStyles,
  iconSize,
}: {
  title?: string;
  titleStyles?: string;
  iconSize?: number;
}) => {
  return (
    <Link href="/" className="flex items-center space-x-2 px-2 w-auto ">
      <Code size={iconSize} />
      <h1 className={titleStyles}>{title}</h1>
      <Code2 size={iconSize} />
    </Link>
  );
};

export default Logo;
