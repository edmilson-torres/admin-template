import useAppData from "../../data/hook/useAppData";
import ButtonToggleTheme from "./ButtonToggleTheme";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, toggleTheme } = useAppData();

  return (
    <div className={"flex"}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end">
        <ButtonToggleTheme theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
