"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  CssIcon,
  DeviconTypescript,
  HtmlIcon,
  LogosJavascript,
  SimpleIconsShadcnui,
  VscodeIconsFileTypeTailwind,
} from "./Skills";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "./ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const AboutMeTabs = () => {
  return (
    <Tabs className=" mt-14 w-[300px] sm:w-[400px]" defaultValue="personal">
      <TabsList className="w-[300px] sm:w-[400px] space-x-4">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="personal">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 9000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            <CarouselItem>
              <Card className=" h-[225px] flex items-center cursor-grab">
                <CardContent>
                  <div className="flex flex-col px-2 items-start space-y-2">
                    <p className="text-sm">
                      Before learning Web Development I was a music producer. I worked with artists
                      from all over the world and produced over 100 tracks, with over 300k+ streams.{" "}
                      <a
                        href="https://open.spotify.com/playlist/2bkgE3Z3X7wviHLapAIOo3?si=ca6bb176c2414b21"
                        className="text-primary hover:underline"
                      >
                        Click here to listen to some of the tracks
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="h-[225px] flex items-center cursor-grab">
                <CardContent>
                  <div className="flex flex-col px-2 items-start space-y-2">
                    <p className="text-sm">
                      Besides Web Development & Music, I love animals and nature. If I won the
                      lottery I would adopt 100 dogs. Maybe some cats too, but definitely 100 dogs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="h-[225px] flex items-center cursor-grab">
                <CardContent>
                  <div className="flex flex-col px-2 items-start space-y-2">
                    <p className="text-sm">
                      I consider myself a creative person, I have a passion for trying new things.
                      Thats why I gravitated towards Web Development, because we get to create
                      things out of nothing, and at the end of the day there is a visible reward for
                      our efforts. This scratches an itch in my brain.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots className="mt-2" />
        </Carousel>
      </TabsContent>
      <TabsContent value="education">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 9000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col items-center cursor-grab">
                <CardHeader>
                  <CardTitle>JavaScript</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col px-2 my-2">
                    <ul className="text-sm list-disc space-y-2">
                      <li>JavaScript Algorithms & Data Structures Certification - freeCodeCamp</li>
                      <li>Learn JavaScript Course - Codecademy</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col items-center cursor-grab">
                <CardHeader>
                  <CardTitle>Python</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col px-2 my-2">
                    <ul className="text-sm list-disc space-y-2">
                      <li>Python 3 Certificate - Code Academy</li>
                      <li>Analyze Data with Python - Codecademy</li>
                      <li>Visualize Data with Python Skill Path - Codecademy</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col items-center cursor-grab">
                <CardHeader>
                  <CardTitle>React</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col px-2 my-2">
                    <ul className="text-sm list-disc space-y-2">
                      <li>React - The Complete Guide - Udemy</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots className="mt-2" />
        </Carousel>
      </TabsContent>
      <TabsContent value="skills">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 9000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col justify-center items-center cursor-grab">
                <CardContent>
                  <HtmlIcon />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col justify-center items-center cursor-grab">
                <CardContent>
                  <CssIcon />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col justify-center items-center cursor-grab">
                <CardContent>
                  <LogosJavascript />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col justify-center items-center cursor-grab">
                <CardContent>
                  <DeviconTypescript />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col justify-center items-center cursor-grab">
                <CardContent>
                  <VscodeIconsFileTypeTailwind />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className=" h-[225px] flex flex-col justify-center items-center cursor-grab">
                <CardContent>
                  <SimpleIconsShadcnui />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots className="mt-2" />
        </Carousel>
      </TabsContent>
    </Tabs>
  );
};

export default AboutMeTabs;
