import dividerIMG from "../images/divider.svg";
import Image from "next/image";

function Divider() {
  return (
    <div className="w-full">
      <div>
        <Image
          alt="gradient divider"
          className="mx-auto mb-[10px] mt-[-10px] block w-[min(30%_250px)] min-w-[175px]"
          height={10}
          src={dividerIMG}
          width={250}
        />
      </div>
    </div>
  );
}

export default Divider;
