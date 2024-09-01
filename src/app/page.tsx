import HomeSection from "@/app/Home/page";
import ContentSection from "@/app/ContentSection/page";
import Experience from "@/app/Experience/page";
import Projects from "@/app/Pojects/page";
import Services from "@/app/Services/page";
import Contact from "@/app/Contact/page";
export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <HomeSection />
      </div>
      <div>
        <ContentSection />
      </div>
      <div className="flex items-center justify-center">
        <Experience />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Projects />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Services />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
