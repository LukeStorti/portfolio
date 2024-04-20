import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-full border-primary border-4">
      <Image
        src="/images/pp.jpg"
        width={200}
        height={200}
        alt="profile picture"
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
