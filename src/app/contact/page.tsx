import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="my-12 px-4">
      <div className="container mx-auto h-[80vh]">
        <h2 className=" text-4xl my-2">Questions?</h2>
        <p className="">Lets connect</p>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center my-8 ">
          <div className="relative w-[450px] h-[450px] items-center hidden lg:flex">
            <Image
              src="/images/Contact.png"
              alt="contact image"
              width={450}
              height={450}
              className="hidden lg:block w-full h-auto"
              priority
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
