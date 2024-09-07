"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const session = useSession();
  const user = session?.data?.user;
  return (
    <div className="flex h-14 items-center border-b bg-transparent border-neutral-800/90 px-3 py-4 md:px-10 z-10">
      <div className="flex items-center h-10 justify-between w-full">
        <Link href="/">
          <h2 className="text-xl text-white font-semibold">Formly.</h2>
        </Link>
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-9 h-9">
                <AvatarImage src={user?.image ?? ""} />
                <AvatarFallback />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem className="cursor-pointer hover:bg-neutral-500/20 transition-all duration-300">
                <Button
                  onClick={() => signOut()}
                  variant="ghost"
                  className="text-normal"
                >
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
