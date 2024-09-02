import { Banner } from "./_components/Home/Banner";
import { Navbar } from "./_components/Home/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Banner />
      <Navbar />
      {children}
    </div>
  );
};

export default LandingLayout;
