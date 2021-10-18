import Image from "next/image";
import Zenitsu from "../../public/Zenitsu.jpg";
const CommentProfilePic = ({ src }) => {
  return (
    <figure className="min-w-[2rem] h-8 md:h-10 md:min-w-[2.5rem] relative overflow-hidden rounded-full">
      <Image src={src ? src : Zenitsu} layout="fill" objectFit="cover" />
    </figure>
  );
};

export default CommentProfilePic;
