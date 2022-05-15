import { FC, createContext, ReactNode, ReactElement } from 'react';
import { rootStore, RootStore } from 'store';

export const StoreContext = createContext<RootStore>({} as RootStore);

export type StoreComponent = FC<{
  children: ReactNode;
}>;

export const ContextProvider: StoreComponent = ({
  children,
}): ReactElement => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};
