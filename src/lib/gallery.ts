import type { L } from "@/lib/language";
import { l } from "@/lib/i18n";

export const GALLERY_CATEGORY_KEYS = [
  "swamikal",
  "santhidham",
  "spiritual",
  "events",
  "visitors",
] as const;

export type GalleryCategoryKey = (typeof GALLERY_CATEGORY_KEYS)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: L;
  caption: L;
  category: GalleryCategoryKey;
  aspect: string;
  tall?: boolean;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g01",
    src: "/images/gallery-10.jpg",
    alt: l(
      "Portrait of Sri. Muraleedhara Swamikal",
      "ശ്രീ. മുരളീധര സ്വാമികളുടെ ചിത്രം",
    ),
    caption: l("Sri. Muraleedhara Swamikal", "ശ്രീ. മുരളീധര സ്വാമികൾ"),
    category: "swamikal",
    aspect: "4 / 5",
    tall: true,
  },
  {
    id: "g02",
    src: "/images/gallery-01.jpg",
    alt: l(
      "Traditional pavilion in the ashram grounds at Santhidham",
      "ശാന്തിധാമിലെ ആശ്രമ മൈതാനത്തിലെ പാരമ്പരിക പവില്യൻ",
    ),
    caption: l("The ashram grounds", "ആശ്രമ മൈതാനം"),
    category: "santhidham",
    aspect: "16 / 9",
  },
  {
    id: "g03",
    src: "/images/gallery-02.jpg",
    alt: l(
      "A devotee making an offering during a spiritual observance",
      "ആത്മീയ ആചാര സമയത്ത് ഭക്തൻ അർപ്പണം നൽകുന്നു",
    ),
    caption: l("Evening observance", "സായാഹ്ന ആചാരം"),
    category: "spiritual",
    aspect: "3 / 2",
  },
  {
    id: "g04",
    src: "/images/gallery-03.jpg",
    alt: l(
      "Kerala heritage architecture lit at dusk",
      "സന്ധ്യയിൽ വെളിച്ചമുള്ള കേരള പാരമ്പര്യ വാസ്തുവിദ്യ",
    ),
    caption: l("Heritage architecture at dusk", "സന്ധ്യയിലെ പാരമ്പര്യ വാസ്തു"),
    category: "santhidham",
    aspect: "16 / 9",
  },
  {
    id: "g05",
    src: "/images/gallery-11.jpg",
    alt: l(
      "Sri. Muraleedhara Swamikal seated at Santhidham",
      "ശാന്തിധാമിൽ ശ്രീ. മുരളീധര സ്വാമികൾ",
    ),
    caption: l("In consultation", "കൺസൾട്ടേഷനിൽ"),
    category: "swamikal",
    aspect: "3 / 2",
  },
  {
    id: "g06",
    src: "/images/gallery-04.jpg",
    alt: l(
      "Traditional brass lamp lit for an observance",
      "ആചാരത്തിനായി കത്തിച്ച പാരമ്പരിക വെങ്കല വിളക്ക്",
    ),
    caption: l("The evening lamp", "സായാഹ്ന വിളക്ക്"),
    category: "spiritual",
    aspect: "16 / 9",
  },
  {
    id: "g07",
    src: "/images/gallery-05.jpg",
    alt: l(
      "Visitors gathered at Santhidham Dharma Peedom",
      "ശാന്തിധാം ധർമ്മ പീഠത്തിൽ കൂടിയെത്തിയ സന്ദർശകർ",
    ),
    caption: l("Visitors at the ashram", "ആശ്രമത്തിലെ സന്ദർശകർ"),
    category: "visitors",
    aspect: "3 / 2",
  },
  {
    id: "g08",
    src: "/images/gallery-07.jpg",
    alt: l(
      "Sacred fire lit during a traditional ceremony",
      "പാരമ്പരിക ചടങ്ങിൽ കത്തിച്ച പവിത്ര അഗ്നി",
    ),
    caption: l("Traditional ceremony", "പാരമ്പരിക ചടങ്ങ്"),
    category: "events",
    aspect: "16 / 9",
  },
  {
    id: "g09",
    src: "/images/gallery-09.jpg",
    alt: l(
      "Hands joined in blessing during a spiritual consultation",
      "ആത്മീയ കൺസൾട്ടേഷനിൽ ആശീർവാദത്തിനായി ചേർത്ത കൈകൾ",
    ),
    caption: l("A moment of blessing", "ആശീർവാദത്തിന്റെ ഒരു നിമിഷം"),
    category: "spiritual",
    aspect: "3 / 2",
  },
  {
    id: "g10",
    src: "/images/gallery-06.jpg",
    alt: l(
      "Deity adorned for worship at the ashram",
      "ആശ്രമത്തിൽ ആരാധനയ്ക്കായി അലങ്കരിച്ച ദേവതാ വിഗ്രഹം",
    ),
    caption: l("Darshan", "ദർശനം"),
    category: "events",
    aspect: "16 / 9",
  },
  {
    id: "g11",
    src: "/images/gallery-08.jpg",
    alt: l(
      "Devotees in conversation during a gathering",
      "സമൂഹ സമ്മേളനത്തിൽ സംഭാഷണത്തിലുള്ള ഭക്തർ",
    ),
    caption: l("A gathering of devotees", "ഭക്തരുടെ ഒരു സമ്മേളനം"),
    category: "visitors",
    aspect: "3 / 2",
  },
  {
    id: "g12",
    src: "/images/gallery-12.jpg",
    alt: l(
      "Wide view of the Santhidham heritage building",
      "ശാന്തിധാം പാരമ്പര്യ കെട്ടിടത്തിന്റെ വിശാല ദൃശ്യം",
    ),
    caption: l("Santhidham Dharma Peedom", "ശാന്തിധാം ധർമ്മ പീഠം"),
    category: "santhidham",
    aspect: "2 / 1",
  },
];
