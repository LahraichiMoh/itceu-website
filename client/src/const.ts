export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/logo.png";

// Generate login URL at runtime so redirect URI reflects the current origin.
// Headquarters Information
export const HQ_ADDRESS = "1234 Education Boulevard, Columbus, Ohio 43215, United States";
export const PHONE_US = "+1 (614) 555-0123";
export const PHONE_MOROCCO = "+212 660 240 023";
export const EMAIL_INFO = "info@itceu.org";
export const EMAIL_CONTACT = "contact@itceu.org";

// Founder Information
export const FOUNDER_NAME = "Prof. Badr Al-Qabbaj";
export const FOUNDER_TITLE_AR = "المؤسس الرئيسي";
export const FOUNDER_TITLE_EN = "Founder & President";

// Permanent Member Countries (One from each continent)
export const PERMANENT_COUNTRIES = [
  { name: "Morocco", continent: "Africa", flag: "🇲🇦" },
  { name: "United Arab Emirates", continent: "Asia", flag: "🇦🇪" },
  { name: "United States", continent: "North America", flag: "🇺🇸" },
  { name: "Germany", continent: "Europe", flag: "🇩🇪" },
  { name: "Australia", continent: "Oceania", flag: "🇦🇺" }
];
