
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, CreditCard, Shield } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const Subscription = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success notification
    toast({
      title: "Subscription Successful!",
      description: `Thank you for subscribing, ${values.name}! You'll receive premium content soon.`,
    });
    
    setIsSubscribing(false);
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Premium Subscription</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get exclusive access to in-depth articles, tutorials, and resources to enhance your web development skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weekly Newsletter</h3>
              <p className="text-gray-600">Curated articles and tutorials delivered directly to your inbox every week.</p>
            </div>
            
            <div className="border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Content</h3>
              <p className="text-gray-600">Access to member-only articles, code samples, and advanced tutorials.</p>
            </div>
            
            <div className="border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Creator</h3>
              <p className="text-gray-600">Your subscription helps support the creation of more high-quality content.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscription Plans</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Monthly</h3>
                    <span className="text-2xl font-bold">$5.99</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>All premium articles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Weekly newsletter</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                  <Button className="w-full">Subscribe Monthly</Button>
                </div>
                
                <div className="border rounded-lg p-6 bg-secondary/30 border-primary hover:bg-secondary/50 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Yearly</h3>
                      <span className="text-sm text-green-600">Save 17%</span>
                    </div>
                    <span className="text-2xl font-bold">$59.99</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>All premium articles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Weekly newsletter</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>Priority email support</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>2 months free</span>
                    </li>
                  </ul>
                  <Button className="w-full">Subscribe Yearly</Button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-8 bg-card">
              <h3 className="text-2xl font-bold mb-6">Free Newsletter</h3>
              <p className="mb-6 text-gray-600">
                Not ready to commit? Subscribe to our free newsletter and get occasional updates.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to receive emails and accept the terms of service
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubscribing}>
                    {isSubscribing ? "Subscribing..." : "Subscribe for Free"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscription;
