import Layout from "../components/template/Layout";
import useAuth from "../data/hook/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <Layout
      title="Perfil do Usuário"
      subtitle="Aqui você irá gerenciar as suas informações"
    >
      <img src={user?.imageUrl} alt="imagem avatar" className="w-20 h-20" />
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.provider}</p>
      <p>{user?.uid}</p>
    </Layout>
  );
}
