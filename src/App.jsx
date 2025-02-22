import './App.css';
import FooterSection from './components/FooterSection/FooterSection';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorks';
import OurMissionSection from './components/OurMissionSection/OurMissionSection';
import SimplifyLifeSection from './components/SimplifyLifeSection/SimplifyLifeSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';

function App() {
  return (
    <>
      <div className="relative h-screen w-full flex flex-col items-center ">
        <HeroSection />
        <TestimonialSection />
        <HowItWorksSection />
        <OurMissionSection />
        <SimplifyLifeSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
