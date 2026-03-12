import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import TerminalBlock from "@/components/TerminalBlock";
import ServicesSection from "@/components/ServicesSection";
import WriteupsSection from "@/components/WriteupsSection";
import CertsSection from "@/components/CertsSection";
import CoursesSection from "@/components/CoursesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center border-glow-red">
          <span className="text-primary font-bold text-xs font-mono">D</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">####### #######</span>
      </header>

      <main className="lg:ml-16 pt-16 lg:pt-0">
        <HeroSection />
        <TerminalBlock />
        <ServicesSection />
        <WriteupsSection />
        <CertsSection />
        <CoursesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
