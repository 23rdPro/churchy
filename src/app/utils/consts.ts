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

export const alt1 = `Bishop Bankole Jefferson, presiding bishop in Mercy Tabernacle, Ogba Lagos State Nigeria`

export const alt2 = `Teachings of Bishop Bankole Jefferson`
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
  { name: "MercyWorld", url: "/" },
  { name: "About", url: "" },
  { name: "Discipleship", url: "" },
  { name: "Serve", url: "" },
  { name: "Give", url: "" },
  { name: "Blog", url: "/pages/blog" },
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
faith whenever we gather.`;
export const blogAttr = {
  title: "",
};
export const blogs = [
  { id: "1", title: "Don't take it personal" },
  { id: "2", title: "Don't take it personal" },
  { id: "3", title: "Don't take it personal" },
];

export const del1 = `In web services, a combination of HTTP methods, response status codes, and API endpoints are all used when referencing REST architecture. Endpoints specify paths to system resources via HTTP operations with standard error reporting through status codes, where specific methods route incoming requests to specified endpoints to access system data. It is also worth noting that REST is not a specification but a set of guidelines to achieve this architecture.`
export const del2 = `Djantic is a convenient implementation of Pydantic data modeling within the Django framework- it is a library that provides a configurable utility class to automatically create a Pydantic model instance for any Django model class. Recall that Pydantic is a data validation library for pure Python types, which, when combined with a Django web service, should validate model fields and present type representations (JSON) for respective validated fields across an interface. Layering on this, Djantic introduces custom behavior for exporting data from ORMs and thus enhances compatibility with Django.`
export const del3 = `This article will be based on the Post model definition in this piece, allowing us to focus on serialization- converting model objects to a structured stream of bytes fit for transport over a network, which, albeit, has been handled in our case. To utilize Djantic, first, we must install the collection with pip and then present a schema class that will serialize model fields, validating these fields against specified criteria referred to in the model and transporting necessary data to and from the server. At the end of this article, you should be able to validate model fields via Djantic and combine that with FastApi as a response model to deliver data for frontend components.`
export const p1 = `The dangers in the zone explained`
export const p2 = `Another Heading`
export const quote = `To utilize Djantic, first, we must install the collection with pip and then present a schema class that will serialize model fields, validating these fields against specified criteria referred to in the model and transporting necessary data to and from the server.`