import { FC, createContext } from 'react';
import { rootStore, RootStore } from 'store';
import { ContextProviderModel } from './types';

export const StoreContext = createContext<RootStore>({} as RootStore);

export const ContextProvider: FC<ContextProviderModel> = ({children}) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};
