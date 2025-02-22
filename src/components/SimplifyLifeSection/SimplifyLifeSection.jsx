import { useState } from "react";
import girls from "../../assets/SimplifyLifeSectionImages/girls.png"
import Button from "../../utils/Button";
import Modal from "../Modal/Modal";

const SimplifyLifeSection = () => {

  const [isModalOpen,setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="simplifySection"
      style={{
        backgroundImage: `url(${girls})`,
      }}
      className={`${isModalOpen ? "bg-gray-200 opacity-50" : ""}relative py-16  bg-cover bg-center min-h-[433px] w-full flex justify-center items-center `}
    >

      <div className="mx-auto md:w-[460px] w-[360px] md:px-0 px-6 text-center relative" >
        <h3 className="text-2xl font-normal text-white mb-2 font-tagline">Ready to Simplify Your Life?</h3>
        <p className="text-[16px] text-white font-lato">Be the first to know when we launch! Join our waiting list and <br />get exclusive updates and  early access to our journey.</p>

        <Button btnStyle={"inline-flex w-full py-2 items-center justify-center gap-3 mt-7 "} onClick={handleButtonClick}/>
      </div>

      {isModalOpen && <Modal onClose={closeModal}/>}
    </section>
  );
};

export default SimplifyLifeSection;
