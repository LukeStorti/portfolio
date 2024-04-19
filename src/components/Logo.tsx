import { Code, Code2 } from "lucide-react";
import Link from "next/link";
const Logo = ({ title }: { title?: string }) => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Code />
      <h1 className="font-poppins text-lg font-medium">{title}</h1>
      <Code2 />
    </Link>
  );
};

export default Logo;
