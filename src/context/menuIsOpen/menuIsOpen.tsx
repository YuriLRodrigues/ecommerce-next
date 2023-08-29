import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type MenuContextType = {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
