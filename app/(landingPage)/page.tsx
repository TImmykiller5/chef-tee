import Footer from "@/components/footer";
import ContactUsSection from "./_sections/contactUsSection";
import SectionEight from "./_sections/sectionEight";
import SectionFive from "./_sections/sectionFive";
import SectionFour from "./_sections/sectionFour";
import SectionOne from "./_sections/sectionOne";
import SectionSeven from "./_sections/sectionSeven";
import SectionSix from "./_sections/sectionSix";
import SectionThree from "./_sections/sectionThree";
import SectionTwo from "./_sections/sectionTwo";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
