import firebase from "../../firebase/config";
import { createContext, useState } from "react";
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
    provider: userFirebase.providerData[0]?.providerId,
    imageUrl: userFirebase.photoURL,
  };
}

export function AuthProvider(props) {
  const [user, setUser] = useState<User>(null);

  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (resp.user?.email) {
      const user = await userDefault(resp.user);
      setUser(user);
      route.push("/");
    }
  }

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
