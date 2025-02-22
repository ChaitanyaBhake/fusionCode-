import stars from '../../assets/svgs/stars.svg';
import { testimonials } from '../../constants/data';

const TestimonialSection = () => {
  return (
    <section id="testimonialSection" className="lg:max-w-[90rem] md:max-w-[64rem] mx-auto px-5 py-20 md:px-20">
      <h2 className="font-tagline md:text-center text-start text-2xl mb-8 font-normal ">Why JustLiv?</h2>

      {/* Testimonial Cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((card, index) => (
          <div key={index} className="rounded-[20px] shadow-[0_0_16px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col bg-white ">
            <img src={stars} alt="" width={24} height={24} className="mb-3" />

            <h3 className="text-[21px] text-[#384252] font-normal mb-2 font-tagline">{card.title}</h3>

            <p className="text-[16px] font-lato font-normal text-[#959AA2] mb-4 flex-1">{card.description}</p>

            <img src={card.imageLink} alt="" className="pt-3 w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
