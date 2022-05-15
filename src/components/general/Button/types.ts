import { ReactNode, MouseEvent } from "react";

export interface ButtonModel {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}