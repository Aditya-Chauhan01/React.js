import {createContext, useContext} from 'react'

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {            // useTheme(custom hook) ka use krke context ke data ko access kr skte hein
    return useContext(ThemeContext)
}