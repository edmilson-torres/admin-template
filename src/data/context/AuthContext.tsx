import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Cookies from "js-cookie";
import User from "../../model/User";

import route from "next/router";

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function userDefault(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  };
}

function cookieManager(logged: boolean) {
  if (logged) {
    Cookies.set("auth-logged", logged, { expires: 7 });
  } else {
    Cookies.remove("auth-logged");
  }
}

export function AuthProvider(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function configSession(userFirebase) {
    if (userFirebase?.email) {
      const user = await userDefault(userFirebase);
      setUser(user);
      cookieManager(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      cookieManager(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    await configSession(resp.user);
    route.push("/");
  }

  useEffect(() => {
    const cancel = firebase.auth().onIdTokenChanged(configSession);
    return () => cancel();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
