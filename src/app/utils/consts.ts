import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSoundcloud,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPersonPraying,
  faDove,
  faBookBible,
} from "@fortawesome/free-solid-svg-icons";

export const meta = {
  title: "",
  description: "",
  applicationName: "Mercy World Outreach",
  authors: [
    {
      name: "Olumide Bakare",
      url: "https://github.com/23rdPro",
    },
  ],
  keywords: [
    "Bishop Bankole Jefferson",
    "Bankole Jefferson",
    "Mercy World Outreach",
    "Mercy Tabernacle",
    "Faith Based",
    "Holy Communion",
    "Ogba",
    "Lagos",
    "Okeira Modupe Bus stop",
  ],
  openGraph: {},
  twitter: {},
};
export const pages = [
  { name: "Watch online", url: "/" },
  { name: "About", url: "" },
  { name: "Discipleship", url: "" },
  { name: "Serve", url: "" },
  { name: "Give", url: "" },
  { name: "Blog", url: "/pages/blog" }
];
export const address = "100 Ajayi Street, Okeira Modupe Stop ";
export const email = "mercytabernacleogba@gmail.com";
export const socials = [
  { name: "twitter", link: "", icon: faTwitter },
  { name: "facebook", link: "", icon: faFacebook },
  { name: "soundcloud", link: "", icon: faSoundcloud },
  { name: "instagram", link: "", icon: faInstagram },
];
export const helpLinks = [
  ...socials,
  { name: "linkedin", icon: faLinkedin, link: "" },
];
export const name = "Bishop Bankole Jefferson";
export const welcomeCharge = `At The Mercy Tabernacle, our vision is to make a profound impact 
by relieving humanity from poverty and suffering, facilitating healing, and liberating individuals. 
We aim to transform lives, shaping them to mirror Christ's image, and raising individuals as 
pacesetters, role models, and achievers through the teachings of Jesus Christ. Join us on our 
mission to uphold a model of exemplary Christianity that emphasizes integrity, dedicated 
service to God and humanity, righteous living, strong family values, success in life, 
and an unwavering fear of God.`;
export const factBoxes = [
  // { icon: faChurch },
  // { icon: faHandsPraying },
  { icon: faPersonPraying, title: "Holy Spirit" },
  { icon: faDove, title: "Holy Spirit" },
  { icon: faBookBible, title: "Holy Spirit" },
  // { icon: faStarAndCrescent },
];
export const newStuff = `There's always something new at The Mercy World. 
Whether it's community outreach, dedicated study of the word of God, holy 
communion, or fervent prayers, we continually encourage one another in our most holy 
faith whenever we gather.`
export const blogAttr = {
  title: "",

}
export const blogs = [1, 2, 3]