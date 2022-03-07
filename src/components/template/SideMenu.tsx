import { IconHome, IconLogout, IconNotification, IconSettings } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu() {
  return (
    <aside className="flex flex-col">
      <div
        className="
        flex flex-col items-center justify-center
      h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800
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
        <ItemMenu text="Sair" icon={IconLogout} url={"/"} />
      </ul>
    </aside>
  );
}
