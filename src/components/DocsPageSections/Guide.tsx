import Link from "next/link";
import Image from "next/image";

interface guideProps {
  guideName: string;
  link: string;
  image: string;
  description: string;
}

/**
 * A component to render a card that shows a guide. Clicking on the guide takes you to a Google Doc. All info for guides is currently in TechGuides.tsx
 * @param props Should follow the interface above, guideProps
 * @returns A Guide React component
 */
const Guide = (props: guideProps) => (
  <Link
    className="relative mb-10 block text-gray-900 transition-all duration-200 ease-in-out hover:translate-y-[-7px] focus:translate-y-[-7px]"
    href={props.link}
    target="_blank"
  >
    <div className="flex h-[270px] flex-col items-center rounded bg-[#f8f8f8] p-5 transition-all duration-200 ease-in-out hover:shadow-lg focus:shadow-lg dark:bg-[rgb(36,37,37)]">
      <header className="py-2.5 text-xl text-white">{props.guideName}</header>
      <Image
        alt=""
        className="h-[100px] w-[200px] rounded shadow-md"
        height={100}
        src={props.image}
        width={200}
      />
      <p className="my-4 w-[250px] text-sm text-docs-page-black opacity-100 dark:text-white">
        {props.description}
      </p>
    </div>
  </Link>
);

export default Guide;
