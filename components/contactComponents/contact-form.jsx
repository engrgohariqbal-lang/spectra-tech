"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(5, { message: "Phone/WhatsApp is required." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm({ defaultMessage = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: defaultMessage,
    },
  });

  useEffect(() => {
    if (defaultMessage) {
      form.setValue("message", defaultMessage);
    }
  }, [defaultMessage, form]);

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! We will get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Common input classes for a premium look
  const inputClassName =
    "bg-white border-slate-200 focus-visible:ring-primary focus-visible:border-primary shadow-sm h-12 rounded-xl text-slate-800 placeholder:text-slate-400 transition-all duration-300";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold ml-1">
                Name <span className="text-orange-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-1 text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold ml-1">
                Company Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Acme Corp"
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-1 text-red-500" />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold ml-1">
                  Email <span className="text-orange-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    className={inputClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1 text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold ml-1">
                  Tel/WhatsApp <span className="text-orange-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+92-323-XXXXXXX"
                    className={inputClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1 text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold ml-1">
                Message <span className="text-orange-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help you?"
                  className="bg-white border-slate-200 focus-visible:ring-primary focus-visible:border-primary shadow-sm min-h-[140px] rounded-2xl p-4 text-slate-800 placeholder:text-slate-400 transition-all duration-300 resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-1 text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full h-14 text-base font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-primary hover:bg-primary/90 text-white mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Send Request
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
