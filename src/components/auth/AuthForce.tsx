import Image from "next/image";
import Router from "next/router";
import loadingGif from "../../../public/assets/images/loading.gif";
import useAuth from "../../data/hook/useAuth";
import Head from "next/head";

export default function AuthForce(props) {
  const { user, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script>
            dangerouslySetInnerHTML=
            {{
              __html: `
                if(!document.cookie?inclues("auth-logged")){
                window.location.href = "/auth"}
              `,
            }}
          </script>
        </Head>
        {props.children}
      </>
    );
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
