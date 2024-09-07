import { Navbar } from "./_components/Navbar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateFormButton } from "@/components/form/CreateFormButton";
import { FormList } from "./_components/FormList";
import { StatsCard } from "./_components/StatsCard";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <ScrollArea className="w-full flex-1 overflow-hidden p-5 pt-10">
          <div className="w-full flex-1 overflow-hidden p-5 pt-10">
            <StatsCard />
            <div className="text-2xl font-semibold pb-5 text-neutral-300">
              Recent Forms
            </div>
            <Separator orientation="horizontal" />
            <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <CreateFormButton />
              <FormList />
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default DashboardPage;
