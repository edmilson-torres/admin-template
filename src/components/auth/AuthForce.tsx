import Image from "next/image";
import Router from "next/router";
import loadingGif from "../../../public/assets/images/loading.gif";
import useAuth from "../../data/hook/useAuth";

export default function AuthForce(props) {
  const { user, loading } = useAuth();

  function renderContent() {
    return <>{props.children}</>;
  }
  function renderLoading() {
    return (
      <div className="flex justify-center items-center">
        <Image src={loadingGif} alt="loading" />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading;
  } else {
    Router.push("/auth");
    return null;
  }
}
