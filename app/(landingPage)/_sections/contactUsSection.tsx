"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUsSection = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: FormValues) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <section className="my-40 py-20 px-20">
      <div className="flex ">
        <div
          style={{ boxShadow: "0px 3px 23px 2px rgba(51, 51, 51, 0.1)" }}
          className="flex-1 bg-white rounded-xl p-10"
        >
          <h3 className="font-meshed-display mb-6 font-bold text-5xl text-black mb-">
            Talk To us
          </h3>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1 text-[#040404]">
                        <FormLabel className="font-medium">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="border-[#C4C4C4] border py-3 h-fit !mt-1"
                            placeholder="John"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1 text-[#040404]">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-[#C4C4C4] border py-3 h-fit !mt-1"
                            placeholder="Doe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1 text-[#040404]">
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          className="border-[#C4C4C4] border py-3 h-fit !mt-1"
                          placeholder="qoE7o@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex-1 text-[#040404]">
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          className="border-[#C4C4C4] border py-3 h-fit !mt-1"
                          placeholder="+1 234 567 890"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-1 text-[#040404]">
                      <FormLabel>Enter your message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="border-[#C4C4C4] border py-3 h-fit !mt-1"
                          placeholder="Enter your message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant={"chef-tee-2"}
                  className="h-fit w-full bg-transparent !mt-10"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="flex-1 relative overflow-visible z-20">
          <Image
            width={733}
            height={523}
            objectFit="cover"
            className="w-[733px] h-[523px] object-cover absolute top-1/2 left-1/2 translate-x-[-55%] overflow-visible -translate-y-1/2 rounded-3xl "
            src="/contactUsSection/image1.jpg"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
