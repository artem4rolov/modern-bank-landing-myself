import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "About Us", title: "About Us" },
  { id: "Features", title: "Features" },
  { id: "Solution", title: "Solution" },
];

export const Statistics = [
  { num: "3800+", title: "user active" },
  { num: "230+", title: "trusted by company" },
  { num: "$230m+", title: "transaction" },
];

export const cardBusiness = [
  {
    title: "Rewards",
    text: "The best credit cards offer some tantalizing combinations of promotions and prizes",
    img: star,
  },
  {
    title: "100% Secured",
    text: "We take proactive steps make sure your information and transactions are secure.",
    img: shield,
  },
  {
    title: "Balance Transfer",
    text: "A balance transfer credit card can save you a lot of money in interest charges.",
    img: send,
  },
];

export const peopleCard = [
  {
    name: "Herman Jensen",
    role: "Founder & Leader",
    text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    img: people01,
  },
  {
    name: "Steve Mark",
    role: "Founder & Leader",
    text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    img: people02,
  },
  {
    name: "Kenn Gallagher",
    role: "Founder & Leader",
    text: "It is usually people in the money business, finance, and international trade that are really rich.",
    img: people03,
  },
];

export const brands = [
  { id: "airbnb", img: airbnb },
  { id: "binance", img: binance },
  { id: "coinbase", img: coinbase },
  { id: "dropbox", img: dropbox },
];

export const footerLinks = [
  {
    title: "Usefull Links",
    links: [
      { name: "Content" },
      { name: "How it Works" },
      { name: "Create" },
      { name: "Explore" },
      { name: "Terms & Services" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Help Center" },
      { name: "Partners" },
      { name: "Suggestions" },
      { name: "Blog" },
      { name: "Newsletters" },
    ],
  },
  {
    title: "Partner",
    links: [{ name: "Our Partner" }, { name: "Become a Partner" }],
  },
];

export const socialMedia = [
  { img: instagram },
  { img: facebook },
  { img: twitter },
  { img: linkedin },
];
