import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <div>
      <SessionProvider session={session}>
        <Toaster />
        {children}
      </SessionProvider>
    </div>
  );
};

export default DashboardLayout;
