import { Inter, Saira, Merriweather, Exo_2, Space_Grotesk, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({
  weight: ['400', '500', '600'], 
  subsets: ['latin'], 
  display: 'swap', 
});

export const saira = Saira({
  weight: ['500', '600', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
});

export const merriweather = Merriweather({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap"
})

export const exo2 = Exo_2({
  weight: ["300", "600"],
  subsets: [],
  display: "fallback",
})

export const spaceGrotesk = Space_Grotesk({
  weight: ["300", "600"],
  subsets: [],
  display: "fallback",
  style: "normal"
})

export const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "600"],
  subsets: ["latin"],
  display: "fallback",
  style: "italic"
})