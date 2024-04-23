import { ContactForm } from "@/components/ContactForm";
const Contact = () => {
  return (
    <section className="my-12 px-4">
      <div className="container mx-auto h-[80vh]">
        <h2 className=" text-4xl my-2">Questions?</h2>
        <p className="">Lets connect</p>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center my-8 ">
          <img
            src="/images/Contact.png"
            alt="contact image"
            width={350}
            height={300}
            className="hidden lg:block"
          />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
