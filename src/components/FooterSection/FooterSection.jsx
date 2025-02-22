import logo1 from "../../assets/FooterSectionImages/logo1.png"
import instagram from "../../assets/svgs/instagram.svg"
import linkedin from "../../assets/svgs/linkedin.svg"

const FooterSection = () => {
  return (
    <section className="bg-[#3A4E78] text-white py-16 w-full" >
      <div className="flex flex-col items-center justify-center" >
          <img src={logo1} alt="" className="w-30 mb-8" />

          <div className="flex gap-2 mb-2 pb-16">
            <img src={instagram} alt="" />
            <p className="text-white text-[16px] font-medium font-lato">Connect with us on Instagram ♡</p>
          </div>

          <p className="mb-2">Privacy policy</p>
          <p className="mb-2">Accessibility Statement</p>

          <div className="mb-5 mt-6">
            <img src={linkedin} alt="" />
          </div>

          <p className="text-white text-[16px] font-normal font-lato">© 2024 by JustLiv</p>
      </div>
    </section>
  )
}

export default FooterSection