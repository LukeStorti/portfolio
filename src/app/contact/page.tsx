import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="my-12 px-4">
      <div className="container mx-auto">
        <h2 className="font-poppins text-4xl my-2">Questions?</h2>
        <p className="font-poppins">Lets connect</p>
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <Image src="/images/Contact.png" alt="contact image" width={300} height={300} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
