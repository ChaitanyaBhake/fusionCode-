import stars from '../assets/svgs/stars.svg';

const Button = ({ btnStyle, onClick }) => {
  return (
    <button
      className={`bg-[#FF97A8] rounded-full px-8  text-white font-semibold text-lg cursor-pointer ${btnStyle}`}
      onClick={onClick}
    >
      <span>
        <img src={stars} alt="" className='star-rotate ' />
        
      </span>
      <p className="ml-1 font-normal text-black">Join the waiting list</p>
    </button>
  );
};

export default Button;
