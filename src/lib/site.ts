export const SITE_URL = "https://sanjuruk.com";
export const SITE_NAME = "Sanju Lokuhitige";
export const SITE_TAGLINE = "I help creatives turn stories into franchises.";
export const SITE_DESCRIPTION =
  "Sanju Lokuhitige is Cofounder & CTO at Mythril, building AI tools for creative publishing in San Francisco.";
export const BLOG_DESCRIPTION = "Notes on building products, startup life, AI, and creative publishing.";
export const SITE_UPDATED_AT = "2026-05-18";

export const PERSON_ID = `${SITE_URL}/#sanju-lokuhitige`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const PROFILE_LINKS = [
  "https://github.com/sanjuruk",
  "https://www.linkedin.com/in/sanjuruk/",
  "https://soundcloud.com/sanjuruk",
  "https://hevy.com/user/sanjuruk",
];

export const SOCIALS = [
  { name: "Github", href: "https://github.com/sanjuruk" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sanjuruk/" },
];

export const KNOWS_ABOUT = [
  "AI product engineering",
  "creative publishing",
  "startup engineering",
  "SaaS",
  "embedded systems",
  "technical solutions",
];

export function absoluteUrl(path = "") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
