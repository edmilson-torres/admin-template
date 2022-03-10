import useAuth from "../../data/hook/useAuth";
import { IconHome, IconLogout, IconCollection, IconUsers } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu() {
  const { logout } = useAuth();

  return (
    <aside
      className="flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900 dark:text-gray-200"
    >
      <div
        className="
        flex flex-col items-center justify-center
      h-20 w-full bg-gradient-to-r from-yellow-500 to-orange-800
      "
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemMenu text="Início" icon={IconHome} url={"/"} />
        <ItemMenu text="Usuários" icon={IconUsers} url={"/users"} />
        <ItemMenu text="Produtos" icon={IconCollection} url={"/products"} />
      </ul>
      <ul>
        {" "}
        <ItemMenu
          text="Sair"
          icon={IconLogout}
          className={
            "text-red-600 dark:text-red-500 hover:bg-red-400 hover:text-white dark:hover:text-white"
          }
          onClick={logout}
        />
      </ul>
    </aside>
  );
}
