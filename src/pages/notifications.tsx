import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notifications() {
  const { toggleTheme } = useAppData();

  return (
    <Layout
      title="Notificações"
      subtitle="Aqui você irá gerenciar as suas notificações"
    >
      <h3>Conteúdo </h3>
    </Layout>
  );
}
