import { ContextProvider } from "./contextProvider";
import App from "../App";

export const AppProvider = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
};