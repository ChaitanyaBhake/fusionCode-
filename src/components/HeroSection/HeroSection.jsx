import hero from '../../assets/HeroSectionImages/hero.png';
import heroMobile from '../../assets/HeroSectionImages/heroMobile.png';
import Button from '../../utils/Button';

const HeroSection = () => {
  const scrollToSimplifyLife = () => {
    const section = document.getElementById('simplifySection');

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="">
      {/* Hero Image*/}
      <div className="absolute inset-0">
        {}
        <img src={hero} alt="heroImg" className="h-full w-full hidden md:block lg:block" />
        <img src={heroMobile} alt="heroImg" className="h-full w-full md:hidden lg:hidden" />
      </div>

      {/* Hero Tagline */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-start md:text-center mx-auto ">
          <h2 className="text-white text-[27px] md:text-[38px] font-normal mb-4 leading-tight font-tagline">
            Your Child&apos;s Perfect Schedule <br className="hidden sm:block"></br> in Just a Few
            Clicks
          </h2>
          <p className="text-white text-[18px] sm:text-xl mb-8 font-light ">
            Less Planning, More Living.
          </p>

          <Button
            btnStyle={'inline-flex items-center justify-center py-4'}
            onClick={scrollToSimplifyLife}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
