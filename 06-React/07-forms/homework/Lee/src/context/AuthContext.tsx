import React, { createContext, useContext, ReactNode, useState } from "react";

interface AuthData {
  user: string | null;
  id: string | null;
  token: string | null;
}

interface AuthContextProps extends AuthData {
  setAuth: (authData: AuthData) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuthState] = useState<AuthContextProps>({
    id: null,
    user: null,
    token: null,
    setAuth: (authData: AuthData) => {
      console.log("Setting auth data:", authData);
      setAuthState((prevAuth) => ({
        ...prevAuth,
        ...authData,
      }));

      sessionStorage.setItem("userDetails", JSON.stringify(authData));
      sessionStorage.setItem("accessToken", authData.accessToken || "");
    },
  });

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
