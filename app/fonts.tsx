import localFont from "next/font/local";
import { Roboto_Condensed } from "next/font/google"

export const archivo_black = localFont({
    src: "./fonts/ArchivoBlack-Regular.ttf",
    display: "swap"
})

export const roboto_cond = Roboto_Condensed({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
})