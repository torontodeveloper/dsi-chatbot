import { ReactNode } from "react";

interface TabButtonProps {
  children: ReactNode;
}

const TabButton = ({ children }: TabButtonProps) => {
  return <button>{children}</button>;
};
export default TabButton;
