"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z
    .string()
    .min(2, { message: "Enter a valid email address" })
    .email({ message: "Enter a valid email address" }),
  message: z.string().max(200, { message: "Message must not be longer than 200 characters" }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Success!",
      description: <span className=" font-poppins">I'll get back to you as soon as possible!</span>,
    });
    form.reset();
  }

  return (
    <div className="w-full px-2 sm:px-20 rounded bg-secondary py-6 shadow-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          action="https://formsubmit.co/lukestorti@gmail.com"
          method="POST"
          target="_blank"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="font-poppins">
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
              <FormItem className="font-poppins">
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
              <FormItem className="font-poppins">
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
          <Button type="submit" className="w-full font-poppins">
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
