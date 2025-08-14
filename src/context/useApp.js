import { useContext } from "react";
import { AppContext } from "./AppContext";

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp deve ser usado dentro de <AppProvider>');
  return ctx;
};
