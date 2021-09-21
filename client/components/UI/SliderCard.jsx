import Image from "next/image";
import Kimi from "../../public/Kimi.jpg";
const SliderCard = () => {
  return (
    <div className="w-28  mr-2 last:mr-0 flex flex-col items-center">
      <figure className="w-full h-40 rounded-lg overflow-hidden relative">
        <Image src={Kimi} layout="fill" objectFit="cover" />
      </figure>
      <h6 className="font-poppins text-[0.6rem] text-gray mt-1 line-clamp-2 ">
        Kimetsu No Yaiba : Mugen Train
      </h6>
    </div>
  );
};

export default SliderCard;
