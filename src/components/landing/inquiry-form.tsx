"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Form validation schema
const formSchema = z.object({
  parentName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  mobileNumber: z.string().min(10, { message: "Please enter a valid 10-digit mobile number." }).max(15),
  childName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  gradeApplyingFor: z.string({ required_error: "Please select a grade." }),
});

type FormValues = z.infer<typeof formSchema>;
const step1Fields: (keyof FormValues)[] = ["parentName", "email", "mobileNumber"];

export function InquiryForm() { // renamed from InquiryFormUI for consistency
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      email: "",
      mobileNumber: "",
      childName: "",
      gradeApplyingFor: "",
    },
  });

  const handleNext = async () => {
    const isValid = await form.trigger(step1Fields);
    if (isValid) setStep(2);
  };

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      console.log("Form submitted:", values);
      toast({
        title: "Form submitted",
        description: "Thank you! Our admissions team will contact you shortly.",
      });
      setStep(1);
      form.reset();
    } catch (e) {
      console.error(e);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-background/80 backdrop-blur-sm border-gray-400 text-foreground shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Enquire Now</CardTitle>
        <CardDescription className="text-center text-foreground/80">
          Share your details below, and our admissions counselor will connect with you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Step 1 */}
            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Your Name" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="e.g. username@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g. 9876543210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Child's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Child Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gradeApplyingFor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade Applying For</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {["Nursery", "LKG", "UKG", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)].map(
                            (grade) => (
                              <SelectItem key={grade} value={grade}>
                                {grade}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <div className="flex gap-4 pt-4">
              {step === 2 && (
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-full" disabled={loading}>
                  Previous
                </Button>
              )}
              <Button
                type={step === 2 ? "submit" : "button"}
                onClick={step === 1 ? handleNext : undefined}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                disabled={loading}
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : step === 1 ? "Next" : "Request a Callback"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
