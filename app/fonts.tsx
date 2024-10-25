import localFont from "next/font/local";
import { Roboto_Condensed } from "next/font/google"
import { Noto_Sans } from "next/font/google";

export const archivo_black = localFont({
    src: "./fonts/ArchivoBlack-Regular.ttf",
    display: "swap"
})

export const roboto_cond = Roboto_Condensed({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
})

export const noto = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-noto-sans',
    display: 'swap',
})