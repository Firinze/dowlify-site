import type { CollectionEntry } from "astro:content";

// Types derives des schemas Zod dans content.config.ts

export type Homepage = CollectionEntry<"homepage">["data"];
export type Pricing = CollectionEntry<"pricing">["data"];

export type CtaSection = CollectionEntry<"ctaSection">["data"];
export type FaqSection = CollectionEntry<"faqSection">["data"];
export type BrandsSection = CollectionEntry<"brandsSection">["data"];
export type OurStorySection = CollectionEntry<"ourStorySection">["data"];
export type TestimonialSection = CollectionEntry<"testimonialSection">["data"];
export type ComparisonRowSection =
  CollectionEntry<"comparisonRowSection">["data"];
export type BusinessNeedsSection =
  CollectionEntry<"businessNeedsSection">["data"];

export interface NavLink {
  name: string;
  url: string;
}

export interface Menu {
  main: NavLink[];
  footer_col_1_title: string;
  footer_col_2_title: string;
  footer_col_3_title: string;
  footer_primary: NavLink[];
  footer_resource: NavLink[];
  footer_legal: NavLink[];
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

export interface SocialType {
  main: SocialLink[];
}

export interface FeatureItem {
  logo: string;
  title: string;
  description?: string;
  is_starred: boolean;
}

export interface OurFeaturesSection {
  badge?: string;
  title: string;
  content?: string;
  subtitle?: string;
  items: FeatureItem[];
}
