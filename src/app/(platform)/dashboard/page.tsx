import { Navbar } from "./_components/Navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiGoogleforms } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StickyNote } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { CreateFormButton } from "@/components/form/CreateFormButton";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <ScrollArea className="w-full flex-1 overflow-hidden p-5 pt-10">
          <div className="w-full flex-1 overflow-hidden p-5 pt-10">
            <div className="text-3xl font-semibold pb-5">
              Hi, Welcome back 👋
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-14">
              <Card className="bg-card border rounded-xl text-card-foreground shadow">
                <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="tracking-tighter text-sm font-medium">
                    Total Forms
                  </CardTitle>
                  <SiGoogleforms className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-2xl font-bold">+10000</div>
                  <p className="text-sm text-muted-foreground">
                    All of your forms
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border rounded-xl text-card-foreground shadow">
                <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="tracking-tighter text-sm font-medium">
                    Total Submissions
                  </CardTitle>
                  <FaWpforms className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-2xl font-bold">+10000</div>
                  <p className="text-sm text-muted-foreground">
                    All form submissions
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border rounded-xl text-card-foreground shadow">
                <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="tracking-tighter text-sm font-medium">
                    Submission Rate
                  </CardTitle>
                  <HiCursorClick className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-2xl font-bold">0%</div>
                  <p className="text-sm text-muted-foreground">
                    Submissions per visit
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border rounded-xl text-card-foreground shadow">
                <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="tracking-tighter text-sm font-medium">
                    Bounce Rate
                  </CardTitle>
                  <TbArrowBounce className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-2xl font-bold">0%</div>
                  <p className="text-sm text-muted-foreground">
                    Non Submissions per visit
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-2xl font-semibold pb-5 text-neutral-300">
              Recent Forms
            </div>
            <Separator orientation="horizontal" />
            <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <CreateFormButton />
              <Card className="bg-card border rounded-xl text-card-foreground  shadow ">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-2">
                    <div className="text-sm font-bold truncate">New Form</div>
                    <Badge variant={"destructive"}>Draft</Badge>
                  </CardTitle>
                  <p className="text-xs font-semibold text-muted-foreground">
                    about 1 Hour ago
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-sm h-[20px] truncate text-muted-foreground">
                    No Description
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-sm  ">Edit</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default DashboardPage;
