import downArrow from '../../assets/HowItWorksSectionImages/downArrow.png';
import sky from '../../assets/HowItWorksSectionImages/sky.png';
import twistedArrow from '../../assets/HowItWorksSectionImages/twistedArrow.png';
import { howItWorks } from '../../constants/data';

const HowItWorks = () => {
  return (
    <section
      className="relative py-16  bg-cover bg-center lg:min-h-[725px] md:min-h-[590px] w-full text-white"
      style={{
        backgroundImage: `url(${sky})`,
      }}
    >
      {/* Content Section */}
      <div className="relative">
        <h2 className="text-start md:text-center text-2xl font-normal mb-8 font-tagline pl-5 md:p-0 lg:p-0">
          How it works
        </h2>

        <div className="flex flex-col  gap-12 items-start mx-auto max-w-xl p-5 md:p-0 lg:p-0 relative">
          {howItWorks.map((item, i) => (
            <div key={i} className="flex items-start space-x-6 relative ">
              {/* Image Div */}
              <div className=" flex-shrink-0 p-4 w-15 h-15 bg-[#51658E] bg-opacity-10 rounded-lg">
                <img src={item.imageLink} alt="" className="" />
              </div>

              {/* Title and Desc  */}
              <div className="">
                <h3 className="text-[18px] font-lato font-semibold mb-1">{item.title}</h3>
                <p className="text-[#CCCFD6] font-lato font-normal text-[16px]">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Down and Curved Arrow */}
          <img
            src={downArrow}
            alt=""
            className="absolute w-[40px] h-[40px] md:w-[44px] md:h-[44px] md:left-[14%] md:top-[22%] max-[767px]: left-[18%] max-[767px]: top-[24%] 
            max-[767px]:left-[18%] max-[767px]:top-[25%] 
            max-[558px]:left-[18%] max-[558px]:top-[24%] 
            max-[553px]:left-[18%] max-[553px]:top-[23%] 
            max-[517px]:left-[22%] max-[517px]:top-[25%] 
            max-[514px]:left-[20%] max-[514px]:top-[22%] 
            max-[506px]:left-[20%] max-[506px]:top-[27%] 
            max-[524px]:left-[20%] max-[524px]:top-[23%] 
            max-[478px]:left-[21%] max-[478px]:top-[26%] 
            max-[472px]:left-[21%] max-[472px]:top-[27%] 
            max-[474px]:left-[22%] max-[474px]:top-[27%] 
            max-[455px]:left-[23%] max-[455px]:top-[27%] 
            max-[424px]:left-[24%] max-[424px]:top-[26%] 
            max-[462px]:left-[22%] max-[462px]:top-[27%] 
            max-[468px]:left-[22%] max-[468px]:top-[27%] 
            max-[386px]:left-[26%] max-[386px]:top-[26%] 
            max-[376px]:left-[27%] max-[376px]:top-[25%]" 
          />

          <img
            src={twistedArrow}
            alt=""
            className="absolute w-[45px] h-[55px] 
            md:w-[50px] md:h-[60px] md:left-[23%] md:top-[67%] 
            max-[767px]:left-[27%] max-[767px]:top-[65%] 
            max-[558px]:left-[28%] max-[558px]:top-[62%] 
            max-[553px]:left-[28%] max-[553px]:top-[64%] 
            max-[524px]:left-[29%] max-[524px]:top-[64%] 
            max-[517px]:left-[30%] max-[517px]:top-[64%] 
            max-[514px]:left-[30%] max-[514px]:top-[62%] 
            max-[506px]:left-[30%] max-[506px]:top-[66%] 
            max-[478px]:left-[32%] max-[478px]:top-[65%] 
            max-[472px]:left-[32%] max-[472px]:top-[65%] 
            max-[474px]:left-[32%] max-[474px]:top-[66%] 
            max-[455px]:left-[35%] max-[455px]:top-[66%] 
            max-[424px]:left-[37%] max-[424px]:top-[66%] 
            max-[462px]:left-[33%] max-[462px]:top-[65%] 
            max-[468px]:left-[33%] max-[468px]:top-[66%] 
            max-[386px]:left-[40%] max-[386px]:top-[68%] 
            max-[376px]:left-[41%] max-[376px]:top-[68%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
