import * as en from "@/lib/content-en";
import { attachMl } from "@/lib/attach-ml";
import { mlTree } from "@/locales/ml-tree";

const merged = attachMl(en, mlTree);

export const NAV_ITEMS = merged.NAV_ITEMS;
export const FEATURES = merged.FEATURES;
export type Service = en.Service;
export const SERVICES = merged.SERVICES;
export const PHILOSOPHY_PILLARS = merged.PHILOSOPHY_PILLARS;
export const TESTIMONIALS = merged.TESTIMONIALS;
export const HOME = merged.HOME;
export const ABOUT_PAGE = merged.ABOUT_PAGE;
export const SERVICES_PAGE = merged.SERVICES_PAGE;
export const SANTHIDHAM_PAGE = merged.SANTHIDHAM_PAGE;
export const CONTACT_PAGE = merged.CONTACT_PAGE;
export const UI = merged.UI;
export const PAGE_METADATA = merged.PAGE_METADATA;
