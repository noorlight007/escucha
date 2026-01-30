import natureBackgroundDesktop from "@/assets/nature-background.png";
import natureBackgroundMobile from "@/assets/1_pic.png";

const NatureSection = () => {
  return (
    <section className="relative w-full h-[100svh] md:h-screen overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${natureBackgroundMobile})` }}
      />

      {/* Desktop/Tablet background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${natureBackgroundDesktop})` }}
      />

      {/* Optional overlay (keep if you plan to add tint/gradient later) */}
      <div className="absolute inset-0" />

      {/* Content goes here if needed */}
      {/* <div className="relative z-10">...</div> */}
    </section>
  );
};

export default NatureSection;
