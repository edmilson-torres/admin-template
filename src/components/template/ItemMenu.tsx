import Link from "next/link";

interface ItemMenuProps {
  text: string;
  icon: any;
  url: string;
}

export default function ItemMenu(props: ItemMenuProps) {
  return (
    <li className="hover:bg-gray-100">
      <Link href={props.url}>
        <a className="flex flex-col justify-center items-center w-full h-20">
          {props.icon}
          <span className="text-xs font-light text-gray-600">{props.text}</span>
        </a>
      </Link>
    </li>
  );
}
