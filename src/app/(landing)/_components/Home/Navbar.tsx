import { Button } from "@/components/ui/button";
import Link from "next/link";

type LinkType = [
  string,
  string,
  "link" | "default" | "destructive" | "outline" | "secondary" | "ghost"
];

const Links: LinkType[] = [
  ["/create-form", "Create Form", "outline"],
  ["/dashboard", "Dashboard", "default"],
];

export const Navbar = () => {
  return (
    <div className="flex h-14 items-center border-b bg-transparent border-white/20 px-3 md:px-12 z-10">
      <div className="flex items-center h-10 justify-between w-full">
        <Link href="/">
          <h2 className="text-primary text-lg font-semibold">Formly.</h2>
        </Link>
        <nav className="flex items-center gap-4">
          {Links.map(([href, label, variant]) => (
            <Link key={href} href={href}>
              <Button variant={variant} className="font-semibold">
                {label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
