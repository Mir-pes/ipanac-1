import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { Globe, MapPin, Package, Archive, Briefcase, BarChart , HandshakeIcon } from "lucide-react";

// Import local images with corrected paths
import internationalRelocation from '../assets/Interantional.png';
import Corporate from '../assets/corporate.png';
import Local from '../assets/local.png';
import pau from '../assets/PAU.png';
import Storage from '../assets/storage.png';
import C from '../assets/CustomerCare.png';
import consult from '../assets/consulting.png';
import packing from '../assets/pack.png';
import f from '../assets/freight.png';
import d from '../assets/delivery.png';
import u from '../assets/unpack.png';
import Handyman from '../assets/handy.png';

// export const navItems = [
//   { label: "Features", href: "#" },
//   { label: "Workflow", href: "#" },
//   { label: "Pricing", href: "#" },
//   { label: "Testimonials", href: "#" },
// ];

// export const testimonials = [
//   {
//     user: "John Doe",
//     company: "Stellar Solutions",
//     text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
//   },
//   {
//     user: "Jane Smith",
//     company: "Blue Horizon Technologies",
//     text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
//   },
//   {
//     user: "David Johnson",
//     company: "Quantum Innovations",
//     text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
//   },
//   {
//     user: "Ronee Brown",
//     company: "Fusion Dynamics",
//     text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
//   },
//   {
//     user: "Michael Wilson",
//     company: "Visionary Creations",
//     text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
//   },
//   {
//     user: "Emily Davis",
//     company: "Synergy Systems",
//     text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
//   },
// ];

export const features = [
  {
    image: internationalRelocation,
    text: "International Relocation from UAE",
    description:
      "We simplify the complexities of moving from Dubai to a new country, handling everything from visas to customs clearance and international shipping",
  },
  {
    image: Local,
    text: "Local Relocation in Dubai & GCC",
    description:
      "Moving within Dubai, Abu Dhabi, or the GCC region? Our local moving services ensure that every detail is taken care of, from professional packing to delivery at your new doorstep in UAE.",
  },
  {
    image: pau,
    text: "Packing and Unpacking Services in UAE",
    description:
      "We offer professional packing services in Dubai to protect your valuables during transit and expert unpacking services to help you settle in quickly at your new location."
  },
  {
    image: Storage,
    text: "Storage Solutions in UAE",
    description:
      "Need temporary storage in Dubai? Our secure storage facilities in UAE ensure your items are safe and accessible whenever you need them."
  },
  {
    image: Corporate,
    text: "Corporate Relocation in UAE",
    description:
      "We cater to businesses in Dubai relocating employees, offering tailored corporate moving solutions to ensure a smooth transition for both the individual and the company across UAE."
  },
  {
    image: C,
    text: "Customer Care in UAE",
    description:
      "Dedicated customer service for Dubai residents - we keep your relocation needs as our topmost priority and ensure your moving requirements are fulfilled within the right time across UAE."
  },
  {
    image: consult,
    text: "Free Consulting Survey in UAE",
    description:
      "Expert guidance and free home survey in Dubai to help you plan your relocation efficiently.",
  },
  {
    image: packing,
    text: "Professional Packing Services in UAE",
    description:
      "High-quality packing solutions in Dubai to ensure item safety during your move.",
  },
  {
    image: f,
    text: "Freight Services in UAE",
    description:
      "Reliable freight transportation for your shipments across Dubai and international destinations."
  },
  {
    image: d,
    text: "Delivery Services in UAE",
    description:
      "Fast and secure delivery solutions to your doorstep anywhere in Dubai and UAE."
  },
  {
    image: u,
    text: "Unpacking Services in UAE",
    description:
      "Hassle-free unpacking services in Dubai to help you settle in quickly at your new home."
  },
  {
    image: Handyman,
    text: "Handyman Services in UAE",
    description:
      "Expert handyman services in Dubai for setup, installation, and maintenance at your new location"
  }
];

export const checklistItems = [
  {
    title: "International Relocation from Dubai: ",
    description:
    "We help you relocate from Dubai to anywhere you desire—within the GCC region, and more broadly across Europe, Asia and America—leveraging our network of international partners and in-depth local knowledge of UAE relocation requirements.",
  },
  {
    title: "End-to-End Moving Solutions in Dubai:",
    description:
    "From pre-move planning, logistics, professional packing, and transportation to settling into your new home in Dubai or abroad, we take care of everything so you can focus on your new beginning.",
  },
  {
    title: "Reliable and Safe Movers in Dubai:",
    description:
    "With years of experience, we ensure that your belongings are handled with the utmost care. Our commitment to safety means peace of mind every step of the way.",
  },
  {
    title: "Personalized Service: ",
    description:
      "No two moves are the same. Our team will work with you to understand your requirements and provide solutions that match your needs, timeline, and budget.",
  },
];

// export const pricingOptions = [
//   {
//     title: "Free",
//     price: "$0",
//     features: [
//       "Private board sharing",
//       "5 Gb Storage",
//       "Web Analytics",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Pro",
//     price: "$10",
//     features: [
//       "Private board sharing",
//       "10 Gb Storage",
//       "Web Analytics (Advance)",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Enterprise",
//     price: "$200",
//     features: [
//       "Private board sharing",
//       "Unlimited Storage",
//       "High Performance Network",
//       "Private Mode",
//     ],
//   },
// ];

export const resourcesLinks = [
  { href: "https://ipanacllc.com/immigration/canada-immigration-overview", text: "Canada Immigration" },
  { href: "https://ipanacllc.com/business/start-up-visa-program", text: "Visa" },
  { href: "https://ipanacllc.com/business/business-immigration-overview", text: "Business Overview" },
  { href: "https://ipanacllc.com/citizenship/who-qualifies-for-canadian-citizenship", text: "Citizenship" },
  { href: "https://ipanacllc.com/work/work-permits", text: "Work Permits" },
];

export const platformLinks = [
  { href: "https://ipanacaccounting.com/", text: "Accounting and Book Keeping" },
  { href: "https://ipanacaccounting.com/services/#Other-Services", text: "Anti Money Laundering Services" },
  { href: "https://ipanacaccounting.com/services/#Bank-Accounts-Setup", text: "Bank Account Opening" },
  { href: "https://ipanacaccounting.com/services/#Other-Services", text: "Business Set Up" },
  { href: "https://ipanacaccounting.com/our-packages/#Standard", text: "Local sponsorship" },
  { href: "https://ipanacaccounting.com/about-us/", text: "PRO services" },
];

export const communityLinks = [
  { href: "https://ipanacaccounting.com/services/Corporate-Tax", text: "Tax filing" },
  { href: "https://ipanacaccounting.com/services/Corporate-Tax", text: "Tax registration" },
  { href: "https://ipanacaccounting.com/services/#VAT", text: "VAT filing" },
  { href: "https://ipanacaccounting.com/services/#VAT", text: "VAT registration" },
  { href: "https://ipanacaccounting.com/services/#VAT", text: "VAT refund" },
  { href: "https://ipanacaccounting.com/services/#Auditing", text: "Audit – Internal and External" },
];
