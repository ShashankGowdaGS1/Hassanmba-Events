import { CORE_SERVICE_CATEGORIES } from "./services";

export interface NavItem {
  title: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ServiceDropdownItem {
  title: string;
  href: string;
  slug: string;
}

/**
 * Locked primary navigation links for Hassanmba Events
 */
export const MAIN_NAVIGATION: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services", hasDropdown: true },
  { title: "Our Work", href: "/our-work" },
  { title: "Contact", href: "/contact" },
];

/**
 * The 7 locked service categories for the Services dropdown and mobile drawer
 */
export const SERVICES_DROPDOWN_ITEMS: ServiceDropdownItem[] = CORE_SERVICE_CATEGORIES.map(
  (service) => ({
    title: service.title,
    href: `/services#${service.id}`,
    slug: service.id,
  })
);

export const LEGAL_NAVIGATION = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
];
