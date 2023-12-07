import React, { createContext, useContext, ReactNode, useState } from "react";

interface AuthContextProps {
  user: string;
  roles: string[];
  accessToken: string | null;
  setAuth: (authData: AuthContextProps) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthContextProps>({
    user: "",
    roles: [],
    accessToken: null,
    setAuth: (authData) => setAuth(authData),
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
