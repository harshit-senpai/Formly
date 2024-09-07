"use client";

import { StickyNote } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateFormSchema } from "@/actions/createForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { createForm } from "@/actions/createForm";
import { useAction } from "@/hooks/useAction";
import { toast } from "sonner";
import { ImSpinner2 } from "react-icons/im";

export const CreateFormButton = () => {
  const form = useForm<z.infer<typeof CreateFormSchema>>({
    resolver: zodResolver(CreateFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { execute, isLoading } = useAction(createForm, {
    onSuccess: () => {
      toast.success("Form created successfully");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (values: z.infer<typeof CreateFormSchema>) => {
    execute(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-card border rounded-xl text-card-foreground  shadow flex flex-col items-center gap-4 justify-center border-dashed cursor-pointer">
          <CardContent className="p-6 flex flex-col items-center gap-4 justify-center">
            <StickyNote className="w-5 h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Create a new Form</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Form</DialogTitle>
          <DialogDescription>
            Create a new form and start collecting responses{" "}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Form Title"
                      type="title"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isLoading}
                      {...field}
                      placeholder="Form Description"
                      rows={5}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button onClick={form.handleSubmit(onSubmit)} className="w-full mt-4">
            {isLoading ? (
              <ImSpinner2 className="animate-spin w-4 h-4" />
            ) : (
              "Create"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
