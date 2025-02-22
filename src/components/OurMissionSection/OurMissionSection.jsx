import kidsPlaying from '../../assets/OurMissonSectionImages/kidsPlaying.png';
import redHeart from '../../assets/svgs/redheart.svg';

const OurMissionSection = () => {
  return (
    <section className="bg-gray-50 py-20 w-full ">
      <div className="mx-auto  md:w-[550px] w-[360px] md:px-0 px-6 text-center relative">
        {/* Heading and Hearts SVG */}
        <div className="font-semibold mb-4 flex md:justify-center md:items-center justify-start  items-start  relative">
          <h2 className="text-center md:text-center text-2xl font-normal font-tagline">Our Mission</h2>

          <img src={redHeart} alt="" className="absolute md:right-15 right-1 -top-3 animate-pulse" />
        </div>

        {/* Mission Description */}
        <p className=" font-lato text-[16px] text-[#384252] px-0 md:px-4 mb-6 md:text-center text-start">
          Parents need a simple way to find, book, and track their kids activities. Businesses need
          a better way to be found and to keep families coming back.
        </p>

        {/* Our Purpose */}
        <p className="text-[16px] font-normal font-lato mb-6 text-left md:text-center lg:text-center">
          Our purpose is to <br />
          <span className="font-bold font-lato text-[22px]">
            make parents lives
            <span className="text-[#FF8095] text-[22px] font-bold font-lato"> easier</span>,{' '}
            <span className="text-[#FF8095] text-[22px] font-bold font-lato"> happier</span>,{' '}
            <span className="text-black font-lato">and</span>
            <span className="text-[#FF8095] text-[22px] font-bold font-lato"> less stressful</span>.
          </span>
        </p>

        <p className="text-[16px] font-lato text-[#384252] mb-6 md:text-center text-start">
          As parents and business owners, we get it.
        </p>

        <div>
          <img src={kidsPlaying} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
