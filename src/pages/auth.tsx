import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconGoogle, IconWarning } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Auth() {
  const { register, login, loginGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState(null);

  function showError(msg, timeInSeconds = 5) {
    setError(msg);
    setTimeout(() => setError(null), timeInSeconds * 1000);
  }

  async function submit() {
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (e) {
      showError(e?.message ?? "Erro desconhecido!");
    }
  }

  return (
    <div className="flex  h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3 xl:w-full">
        <img
          src="https://source.unsplash.com/random"
          alt="auth image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3 ">
        <h1 className="text-xl font-bold mb-5">
          {mode === "login"
            ? "Entre com sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
        {error ? (
          <div
            className="
        bg-red-400 text-white py-3 px-5 my-2
        border border-red-700 rounded-lg flex item-center"
          >
            {IconWarning}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          type="email"
          label="Email"
          value={email}
          valueChanged={setEmail}
          required
        />
        <AuthInput
          type="password"
          label="Senha"
          value={password}
          valueChanged={setPassword}
          required
        />
        <button
          onClick={submit}
          className="w-full bg-indigo-500
        hover:bg-indigo-400 text-white rounded-lg
        px-4 py-3 mt-6 shadow-md hover:drop-shadow"
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={loginGoogle}
          className="w-full bg-white
         text-black rounded-lg
        px-4 py-3 flex border-2 justify-center shadow-md hover:drop-shadow hover:shadown-red-500"
        >
          <IconGoogle />
          <span className="flex-grow">Entrar com o Google</span>
        </button>
        {mode === "login" ? (
          <p className="mt-8">
            Novo por aqui?{" "}
            <a
              onClick={() => setMode("register")}
              className=" text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Crie sua conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?{" "}
            <a
              onClick={() => setMode("login")}
              className=" text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Entre com a suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
