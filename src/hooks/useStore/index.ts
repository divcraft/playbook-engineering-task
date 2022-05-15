import { useContext } from 'react';
import { RootStore } from 'store';
import { StoreContext } from 'providers/contextProvider';

export const useStore = (): RootStore => useContext(StoreContext);
