export interface BusinessAddress {
  street: string;
  landmark: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  formatted: string;
}

export interface BusinessContact {
  phonePrimary: string;
  phonePrimaryDisplay: string;
  phonePrimaryTel: string;
  phoneSecondary: string;
  phoneSecondaryDisplay: string;
  phoneSecondaryTel: string;
  whatsappPrimary: string;
  whatsappLink: string;
  instagramUrl: string;
  instagramHandle: string;
}

export interface BusinessBrand {
  name: string;
  shortName: string;
  legacyAlternativeName?: string;
  descriptor: string;
  tagline: string;
  locationLabel: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface BusinessConfig {
  brand: BusinessBrand;
  contact: BusinessContact;
  address: BusinessAddress;
}

