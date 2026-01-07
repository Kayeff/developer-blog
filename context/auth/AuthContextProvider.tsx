"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type AuthContextT = {
  isAuthenticated: boolean;
  handleAuthenticated: (value: boolean) => void;
};

export type JwtPayload = {
  role: string;
  iat: number;
  exp: number;
};

const AuthContext = createContext<null | AuthContextT>(null);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleAuthenticated(value: boolean) {
    setIsAuthenticated(value);
  }

  const ctxValue: AuthContextT = {
    isAuthenticated,
    handleAuthenticated,
  };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextT {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth must be used within AuthContextProvider");

  return context;
}
