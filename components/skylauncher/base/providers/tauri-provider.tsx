import tauriConfJson from "@/src-tauri/tauri.conf.json";
import React, { useContext, useState } from "react";

const TauriContext = React.createContext({
  appVersion: tauriConfJson.package.version,
});

export const useTauriContext = () => useContext(TauriContext);

export function TauriProvider({ children }: { children: React.ReactNode }) {
  const [appVersion, setappVersion] = useState(tauriConfJson.package.version);

  return (
    <TauriContext.Provider value={{ appVersion }}>
      {children}
    </TauriContext.Provider>
  );
}
