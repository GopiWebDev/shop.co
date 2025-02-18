import Image from "next/image";
import DesktopStats from "@/components/layout/Home/DesktopStats";
import MobileStats from "@/components/layout/Home/MobileStats";
import PrimaryInfo from "@/components/layout/Home/PrimaryInfo";

const HomePage = () => {
  return (
    <section className="w-full bg-offWhite">
      <div className="container lg:bg-hero lg:bg-cover lg:bg-no-repeat lg:bg-right lg:h-[663px]">
        <div className="px-4 md:px-10 lg:px-16 flex flex-col justify-center lg:items-start md:items-center">
          <PrimaryInfo />
          <MobileStats />
          <DesktopStats />
        </div>
      </div>
      {/* Hero Image for mobile */}
      <Image
        className="md:hidden block mx-auto h-auto w-full"
        src="/images/hero-mobile.webp"
        width={390}
        height={448}
        alt="hero image mobile"
      />
    </section>
  );
};

export default HomePage;
