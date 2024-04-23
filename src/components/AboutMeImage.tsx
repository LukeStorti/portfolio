import Image from "next/image";
import React from "react";

const AboutMeImage = () => {
  return (
    <div>
      <Image src="/images/AboutMe.png" alt="about me " width={350} height={350} priority />
    </div>
  );
};

export default AboutMeImage;
