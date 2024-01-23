/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const ClientContext = createContext({
  client: {},
  addClient: () => {},
  removeClient: () => {},
});

export function ClientProvider({ children }) {
  const [client, setClient] = useState({
    name: "",
    phone: "",
    address: "",
    sendCost: 0,
    hasClient: false,
  });

  const addClient = (newClient) => {
    setClient({
      ...newClient,
    });
  };

  const removeClient = () => {
    setClient({
      name: "",
      phone: "",
      address: "",
      sentCost: 0,
      hasClient: false,
    });
  };

  const clientContextValue = {
    client: client,
    addClient,
    removeClient,
  };

  return (
    <ClientContext.Provider value={clientContextValue}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;
