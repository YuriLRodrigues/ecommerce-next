import { createContext, useContext, useState } from "react";


const MenuContext = createContext({ })

export const MenuProvider = ({children}: {children: React.ReactNode}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <MenuContext.Provider value={{menuIsOpen, setMenuIsOpen}}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => useContext(MenuContext)