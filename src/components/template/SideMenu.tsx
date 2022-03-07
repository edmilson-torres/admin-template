import { IconHome, IconLogout, IconNotification, IconSettings } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu() {
  return (
    <aside
      className="flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900 dark:text-gray-200"
    >
      <div
        className="
        flex flex-col items-center justify-center
      h-20 w-full bg-gradient-to-r from-indigo-500 to-purple-800
      "
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemMenu text="Início" icon={IconHome} url={"/"} />
        <ItemMenu text="Configurações" icon={IconSettings} url={"/settings"} />
        <ItemMenu
          text="Notificações"
          icon={IconNotification}
          url={"/notifications"}
        />
      </ul>
      <ul>
        {" "}
        <ItemMenu
          text="Sair"
          icon={IconLogout}
          className={
            "text-red-600 dark:text-red-500 hover:bg-red-400 hover:text-white dark:hover:text-white"
          }
          onClick={() => console.log("logout")}
        />
      </ul>
    </aside>
  );
}
