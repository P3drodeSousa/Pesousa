import { useCallback, useImperativeHandle, forwardRef, useState } from "react";
import NextLink from "next/link";
import {RiCloseFill } from 'react-icons/ri'
import { useTheme } from "next-themes";


const Menu = ({menus, href},ref) => {
    const [visible, setVisible] = useState(false);
    const { theme,} = useTheme();


    const CloseMenu = useCallback(() => {
        setVisible(false);
      }, []);
    
      useImperativeHandle(
        ref,
        () => {
          return { openMenu };
        },
        []
      );
    
      const openMenu = useCallback(() => {
        setVisible(true);
      }, []);
    
    const handleDarkIcons = (theme) => (theme === "dark" ? "black" : "white");

    if(!visible) return null;

    return (
    <div className="h-screen w-screen bg-black dark:bg-white absolute inset-0 -left-8 flex flex-col items-center justify-between py-20 z-50 ">
      <RiCloseFill
        size={60}
        color={handleDarkIcons(theme)} 
        className="absolute top-4 left-4"
        onClick={CloseMenu}
      />

      {menus.map((item, index) => {
        return (
          <NextLink key={item} href={`/${href[index]}`}>
            <a className="dark:text-gray-900 text-gray-100 text-5xl font-extrabold">
              {item}
            </a>
          </NextLink>
        );
      })}
    </div>
  );
}

export default forwardRef(Menu)