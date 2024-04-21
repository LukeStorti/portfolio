"use client";
import React from "react";
import { Dot } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";

const Work = () => {
  return (
    <section className="my-20">
      <div className="container flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Dot size={45} className="text-primary" />
          <h2 className="font-poppins text-3xl font-bold">Projects</h2>
          <Dot size={45} className="text-primary" />
        </div>
        <div className="my-12 px-4 flex flex-col-reverse sm:flex-row justify-center sm:justify-evenly items-center sm:items-start w-full gap-4">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 9000, stopOnInteraction: true })]}
            className="px-2 flex items-center justify-center"
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="w-[340px]">
                  <CardContent>
                    <Image src="/images/blob.svg" alt="placeholder" width={250} height={300} />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="w-[340px]">
                  <CardContent>
                    <Image src="/images/blob2.svg" alt="placeholder" width={250} height={300} />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="flex flex-col">
            <Image src="/images/Coding.png" alt="hands coding" width={250} height={350} />
            <Button asChild className="font-poppins">
              <Link href="/projects">View More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
