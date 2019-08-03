import * as React from 'react';
import { Backend } from './Backend';

const BackendContext = React.createContext<Backend | undefined>(undefined);

interface BackendProviderProps {
  backend: Backend;
  children: React.ReactNode;
}

export function BackendProvider({ backend, children }: BackendProviderProps) {
  return (
    <BackendContext.Provider value={backend}>
      {children}
    </BackendContext.Provider>
  );
}

export function useBackend() {
  const context = React.useContext(BackendContext);

  if (context === undefined) {
    throw new Error('useBackend must be used within a BackendProvider');
  }

  return context;
}
