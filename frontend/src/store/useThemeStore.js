import { create } from "zustand";

export const useThemeStore=create((set,get)=>({
    theme:localStorage.getItem("preffered-theme") || "valentine",
    setTheme:(theme)=>{
        localStorage.setItem("preffered-theme",theme);
        set({theme})
    }
}))