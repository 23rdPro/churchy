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
  faChildren,
  faFemale,
  faMale,
  faUsers,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

export const mobile = "+ 234 803 502 3574"

export const alt1 = `Bishop Bankole Jefferson, presiding bishop in Mercy Tabernacle, Ogba Lagos State Nigeria`;

export const alt2 = `Teachings of Bishop Bankole Jefferson`;
export const meta = {
  title: "Mercy Tabernacle | Bishop Bankole Jefferson",
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
    "Oke-ira Modupe Bus stop",
  ],
  openGraph: {},
  twitter: {},
};
export const pages = [
  { name: "MercyWorld", url: "/" },
  { name: "About", url: "/pages/about" },
  { name: "Discipleship", url: "/pages/discipleship" },
  { name: "Serve", url: "/pages/serve" },
  { name: "Give", url: "/pages/give" },
  { name: "Library", url: "/pages/blog" },
];
export const helpfulLinks = [
  { name: "Live stream", link: "" },
  { name: "Sound cloud", link: "" },
  { name: "Publications", link: "" },
  { name: "Instagram", link: "" },

]
export const address = "100 Ajayi Road, Oke-ira Modupe, Ogba";
export const email = "admin@mercyworldonline.com";
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
by relieving humanity from suffering, facilitating healing, and liberating individuals. 
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

export const del1 = `In web services, a combination of HTTP methods, response status codes, and API endpoints are all used when referencing REST architecture. Endpoints specify paths to system resources via HTTP operations with standard error reporting through status codes, where specific methods route incoming requests to specified endpoints to access system data. It is also worth noting that REST is not a specification but a set of guidelines to achieve this architecture.`;
export const del2 = `Djantic is a convenient implementation of Pydantic data modeling within the Django framework- it is a library that provides a configurable utility class to automatically create a Pydantic model instance for any Django model class. Recall that Pydantic is a data validation library for pure Python types, which, when combined with a Django web service, should validate model fields and present type representations (JSON) for respective validated fields across an interface. Layering on this, Djantic introduces custom behavior for exporting data from ORMs and thus enhances compatibility with Django.`;
export const del3 = `This article will be based on the Post model definition in this piece, allowing us to focus on serialization- converting model objects to a structured stream of bytes fit for transport over a network, which, albeit, has been handled in our case. To utilize Djantic, first, we must install the collection with pip and then present a schema class that will serialize model fields, validating these fields against specified criteria referred to in the model and transporting necessary data to and from the server. At the end of this article, you should be able to validate model fields via Djantic and combine that with FastApi as a response model to deliver data for frontend components.`;
export const p1 = `The dangers in the zone explained`;
export const p2 = `Another Heading`;
export const quote = `To utilize Djantic, first, we must install the collection with pip and then present a schema class that will serialize model fields, validating these fields against specified criteria referred to in the model and transporting necessary data to and from the server.`;

export const ministries = [
  {
    name: "Prayer Ministry",
    time: "Tuesday, 6pm",
    icon: faPersonPraying,
    description:
      "Our prayer ministry is dedicated to fostering a deep sense of community through prayer fellowship, outreach missions, and active community engagement. We come together in faith to support one another, extend our reach to those in need, and positively impact our local community.",
  },
  {
    name: "Children Ministry",
    time: "Sunday, 7am",
    icon: faChildren,
    description:
      "Our children's ministry focuses on discipleship empowerment, providing robust Biblical teaching, and promoting diversity and inclusion. We aim to nurture young hearts and minds, equipping them with a strong foundation in faith and an appreciation for the diverse world around them.",
  },
  {
    name: "Women Ministry",
    time: "Thursday, 9am",
    icon: faFemale,
    description:
      "Our women's ministry is committed to building a vibrant community that fosters spiritual growth and engages in compassionate outreach. We support and empower women to deepen their faith and extend kindness and care to those in need.",
  },
  {
    name: "Men Ministry",
    time: "Sunday, 5pm",
    icon: faMale,
    description:
      "Our men's ministry is dedicated to addressing the holistic needs of men, reflecting mercy in all interactions, and embracing diversity and inclusion. We strive to support men in their personal and spiritual growth, fostering a compassionate and inclusive community.",
  },
  {
    name: "Youth Ministry",
    time: "Sunday, 1pm",
    icon: faUsers,
    description:
      "Our youth ministry focuses on building faith resilience, nurturing discipleship, and reflecting Christ in all aspects of life. We aim to empower young people to grow in their faith, develop strong spiritual foundations, and live out Christ's teachings in their everyday lives.",
  },
  {
    name: "Music Ministry",
    time: "Saturday, 8am",
    icon: faMusic,
    description:
      "Our music ministry is dedicated to worship through music, encouraging participation, and fostering spiritual enrichment. We aim to inspire and uplift our community, inviting everyone to join in and experience the profound connection between music and faith.",
  },
];

export const aboutPage = { title: "", text: "", }