import Link from "next/link";

interface ItemMenuProps {
  text: string;
  icon: any;
  url?: string;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function ItemMenu(props: ItemMenuProps) {
  function linkRender() {
    return (
      <a
        className={`
                flex flex-col justify-center items-center
                h-20 box-content px-4
                ${props.className}
            `}
      >
        {props.icon}
        <span className={`text-xs font-light`}>{props.text}</span>
      </a>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`
    hover:bg-gray-100 dark:hover:bg-gray-800
    cursor-pointer
`}
    >
      {props.url ? <Link href={props.url}>{linkRender()}</Link> : linkRender()}
    </li>
  );
}
