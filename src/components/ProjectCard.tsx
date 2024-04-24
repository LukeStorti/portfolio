import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Github, LinkIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const ProjectCard = ({
  key,
  image,
  title,
  subtitle,
  link,
  github,
}: {
  key?: number;
  image: string;
  title: string;
  subtitle: string;
  link?: string;
  github?: string;
}) => {
  return (
    <Card>
      <CardContent className="flex flex-col justify-between items-center w-full h-full md:w-[340px] md:h-[420px]">
        <div className="w-full h-[200px] md:h-[300px]">
          <Image
            src={image}
            alt={`${title} thumbnail`}
            width={200}
            height={300}
            className="object-contain rounded-md w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center mt-2 md:mt-0 space-y-4">
          <h4 className="text-xl text-center overflow-hidden">{title}</h4>
          <p className="text-center text-sm overflow-hidden">{subtitle}</p>
        </div>
        {link && github && (
          <div className="flex justify-between w-full mt-4">
            <Link href={link} target="_blank" className={buttonVariants({ variant: "outline" })}>
              <LinkIcon />
            </Link>

            <Link href={github} target="_blank" className={buttonVariants({ variant: "outline" })}>
              <Github />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
