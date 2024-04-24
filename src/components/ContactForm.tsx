"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z
    .string()
    .min(2, { message: "Enter a valid email address" })
    .email({ message: "Enter a valid email address" }),
  message: z
    .string()
    .min(1, { message: "Message must not be empty" })
    .max(200, { message: "Message must not be longer than 200 characters" }),
});

export function ContactForm() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Luke",
      message: values.message,
    };

    emailjs
      .send(SERVICE_ID!, TEMPLATE_ID!, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log(response);
        toast({
          title: "Success!",
          description: <span>I&apos;ll get back to you as soon as possible!</span>,
        });
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Oops!",
          description: <span>Something went wrong, please try again later.</span>,
        });
      });

    form.reset();
  }

  return (
    <div className="w-full px-2 sm:px-20 rounded py-6 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I'd love to hear from you!"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full ">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
