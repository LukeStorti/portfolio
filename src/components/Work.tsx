"use client";
import React from "react";
import { Dot } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { PROJECTDATA } from "@/constants";
import ProjectCard from "./ProjectCard";
import WorkImage from "./WorkImage";

const Work = () => {
  return (
    <section className="my-20">
      <div className="container flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Dot size={45} className="text-primary" />
          <h2 className=" text-3xl font-bold">Projects</h2>
          <Dot size={45} className="text-primary" />
        </div>
        <div className="my-12 px-4 flex flex-col-reverse sm:flex-row justify-center sm:justify-evenly items-center sm:items-start w-full gap-4 ">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 9000, stopOnInteraction: true })]}
            className="px-2 flex flex-col items-center justify-center "
          >
            <CarouselContent className="w-[358px]">
              {PROJECTDATA.map((item) => (
                <CarouselItem key={item.id}>
                  <ProjectCard title={item.title} image={item.image} subtitle={item.subtitle} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="hidden lg:flex" />
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselDots className="mt-2" />
          </Carousel>
          <div className="flex flex-col">
            <div className="w-[250px] h-[250px]">
              <WorkImage />
            </div>

            <Button asChild className="">
              <Link href="/projects">View More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
