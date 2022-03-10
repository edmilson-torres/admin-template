import Layout from "../components/template/Layout";

import ProfileComponent from "../components/template/Profile";

export default function Profile() {
  return (
    <Layout
      title="Perfil do Usuário"
      subtitle="Aqui você irá gerenciar as suas informações"
    >
      <ProfileComponent />
    </Layout>
  );
}
