import { Toaster } from "sonner";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full overflow-hidden flex items-center">
      <Toaster />
      <div className="z-10 absolute inset-0  h-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex items-center justify-center w-full ">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
