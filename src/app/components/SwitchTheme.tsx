import { useThemeContext } from "@/context/theme/theme";
import { useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";


const SwitchTheme = () => {

  const {theme, setTheme} = useThemeContext();

  
  
  return (
    <div
      className="md:mr-4 cursor-pointer duration-500 border dark:border-zinc-400 border-black rounded-full w-10 relative"
      
    >
      <div
        className={`dark:text-black dark:-translate-x-0 duration-500 text-white -translate-x-4 duration-500"
        } `}
      >
        <div
          className={`rounded-full dark:bg-slate-600 bg-amber-400 text-white 
          w-[25px] h-[25px] text-center flex items-center justify-center relative translate-x-4`}
        >
          {theme === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </div>
      </div>
    </div>
  );
};

export default SwitchTheme;
