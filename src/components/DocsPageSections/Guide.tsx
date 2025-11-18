import Link from "next/link";
import Image from "next/image";

interface guideProps {
  guideName: string;
  link: string;
  image: string;
  description: string;
}

/**
 * A component to render a card that shows a guide. Clicking on the guide takes you to a Google Doc.
 * @param props Should follow the interface above, guideProps
 * @returns A Guide React component
 */
const Guide = (props: guideProps) => (
  <Link
    className="group relative mb-10 block transform-gpu text-gray-900 transition-transform duration-200 ease-in-out hover:translate-y-[-7px] focus:translate-y-[-7px]"
    href={props.link}
    target="_blank"
  >
    <div className="relative flex h-[270px] flex-col items-center rounded bg-[#f8f8f8] p-5 transition-shadow duration-200 ease-in-out group-hover:shadow-[0_0_45px_0_rgba(255,255,255,0.35)] group-focus-visible:shadow-[0_0_45px_0_rgba(255,255,255,0.35)] dark:bg-[rgb(36,37,37)]">
      <header className="py-2.5 text-xl text-white">{props.guideName}</header>
      <div className="flex h-[100px] w-[200px] items-center justify-center">
        <Image
          alt=""
          className="block h-[100px] w-[200px] rounded object-contain shadow-md"
          height={100}
          src={props.image}
          style={{ objectPosition: "center" }}
          width={200}
        />
      </div>
      <p className="my-4 w-[250px] text-sm text-docs-page-black opacity-100 dark:text-white">
        {props.description}
      </p>
    </div>
  </Link>
);

export default Guide;
