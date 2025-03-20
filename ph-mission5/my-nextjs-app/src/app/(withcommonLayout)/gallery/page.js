import Image from "next/image";
import Avater from "../../../assets/avater.png";

const GalleryPage = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          Regular Image Tag (external link)
        </h1>
        <img
          className="mx-auto w-72"
          src="https://i.ibb.co.com/Jn1jJHN/avater.png"
          alt="Avater Logo"
        />
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          Next Image Tag (external link)
        </h1>
        <Image
          className="mx-auto"
          src="https://i.ibb.co.com/Jn1jJHN/avater.png"
          alt="Avater Logo"
          width={288}
          height={288}
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          Next Image Tag (internal)
        </h1>
        <Image
          className="mx-auto"
          src={Avater}
          alt="Avater Logo"
          width={288}
          height={288}
        />
      </div>
    </div>
  );
};

export default GalleryPage;
