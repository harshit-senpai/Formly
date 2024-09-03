"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChromeIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { useAction } from "@/hooks/useAction";
import { createUser } from "@/actions/createUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateUserSchema } from "@/actions/createUser/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { toast } from "sonner";

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof CreateUserSchema>>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const { execute, fieldErrors, isLoading } = useAction(createUser, {
    onSuccess: () => {
      toast.success("Registered successfully, continue to signIn");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (values: z.infer<typeof CreateUserSchema>) => {
    execute(values);
  };

  console.log(fieldErrors);

  return (
    <Card className="w-[450px] z-10 mx-auto">
      <CardHeader>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold">Formly.</h1>
        </div>
        <div className="w-full flex flex-col items-start space-y-1">
          <h2 className="text-xl font-semibold">Register</h2>
          <p className="text-sm font-normal text-muted-foreground">
            Create a account and start building
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your name"
                        type="name"
                        disabled={isLoading}
                      />
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
                      <Input
                        {...field}
                        placeholder="youremail@example.com"
                        type="email"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="******"
                        type="password"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <div className="flex items-center">
          <p className="text-muted-foreground text-sm -mr-2">
            Already have an account?
          </p>
          <Button variant="link" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
