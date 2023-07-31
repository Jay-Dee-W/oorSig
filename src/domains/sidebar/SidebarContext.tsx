import React, { createContext, useContext, useState } from 'react';

interface SidebarContextValue {
  sidebarVisible: boolean;
  toggleSidebar: () => void;
}

const defaultSidebarContextValue: SidebarContextValue = {
  sidebarVisible: false,
  toggleSidebar: () => {},
};

const SidebarContext = createContext<SidebarContextValue>(
  defaultSidebarContextValue
);

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ sidebarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = (): SidebarContextValue => {
  const context = useContext(SidebarContext);
  return context;
};
