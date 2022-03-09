import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Cookies from "js-cookie";
import User from "../../model/User";

import route from "next/router";

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  login?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
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

  async function login(email: string, password: string) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await configSession(resp.user);
      route.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSession(resp.user);
      route.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
      localStorage.removeItem("theme");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("auth-logged")) {
      const cancel = firebase.auth().onIdTokenChanged(configSession);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
