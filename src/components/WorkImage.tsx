import Image from "next/image";
import React from "react";

const WorkImage = () => {
  return (
    <div>
      <Image src="/images/Coding.png" alt="about me " width={350} height={350} priority />
    </div>
  );
};

export default WorkImage;
