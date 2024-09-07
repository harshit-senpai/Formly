import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { SiGoogleforms } from "react-icons/si";
import { TbArrowBounce } from "react-icons/tb";

export const StatsCard = () => {
  return (
    <>
      <div className="text-3xl font-semibold pb-5">Hi, Welcome back 👋</div>
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
            <p className="text-sm text-muted-foreground">All of your forms</p>
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
    </>
  );
};
