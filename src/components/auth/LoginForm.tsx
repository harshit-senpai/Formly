"use client";

import { ChromeIcon, GithubIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LogInSchema } from "@/actions/loginUser/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "@/hooks/useAction";
import { toast } from "sonner";
import { loginUser } from "@/actions/loginUser";
import { Socials } from "./Socials";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LogInSchema>>({
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { execute, isLoading } = useAction(loginUser, {
    onSuccess: () => {
      toast.success("Logged in successfully");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (values: z.infer<typeof LogInSchema>) => {
    execute(values);
  };

  return (
    <Card className="w-[450px] z-10 mx-auto">
      <CardHeader>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold">Formly.</h1>
        </div>
        <div className="w-full flex flex-col items-start space-y-1">
          <h2 className="text-xl font-semibold">Login</h2>
          <p className="text-sm font-normal text-muted-foreground">
            Login in to your account
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
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
              Login
            </Button>
          </form>
        </Form>
        <Socials/>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <div className="flex items-center">
          <p className="text-muted-foreground text-sm -mr-2">
            Don&apos;t have an account?
          </p>
          <Button variant="link" asChild>
            <Link href="/auth/signup">Register</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
