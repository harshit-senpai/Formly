import { Banner } from "./_components/Home/Banner";
import { Navbar } from "./_components/Home/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[80vh]">
      <Banner />
      <Navbar />
      {children}
    </div>
  );
};

export default LandingLayout;
