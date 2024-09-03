"use client";

import { ChromeIcon, GithubIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const LoginForm = () => {
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
        <div className="w-full flex flex-col items-start space-y-2">
          <Label>Email</Label>
          <Input placeholder="youremail@example.com" type="email" />
        </div>
        <div className="w-full flex flex-col items-start space-y-2">
          <Label>Name</Label>
          <Input placeholder="your name" type="text" />
        </div>
        <div className="w-full flex flex-col items-start space-y-2">
          <Label>Password</Label>
          <Input placeholder="********" type="password" />
        </div>
        <Button className="w-full">Login</Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-4 text-muted-foreground">
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
            Don&apos;t have an account?
          </p>
          <Button variant="link">Register</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
