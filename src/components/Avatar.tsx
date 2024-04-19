import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image
        src="/images/pp.jpg"
        alt="profile picture"
        width={250}
        height={250}
        className="rounded-full border-primary border-4"
      />
    </div>
  );
};

export default Avatar;
