import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string().optional(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
};

const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      badge: z.string().optional(),
      title: z.string(),
      content: z.string(),
      image: z.string().optional(),
      button_primary: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      button_secondary: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    main_features: z.object({
      enable: z.boolean(),
      badge: z.string().optional(),
      title: z.string(),
      content: z.string(),
      items: z.array(z.string()),
    }),
    value_props: z.object({
      enable: z.boolean(),
      badge: z.string().optional(),
      title: z.string(),
      content: z.string(),
      items: z.array(
        z.object({
          logo: z.string(),
          title: z.string(),
          list: z.array(z.string()).optional(),
        }),
      ),
    }),
    our_features: z.object({
      enable: z.boolean(),
      badge: z.string().optional(),
      title: z.string(),
      content: z.string(),
      items: z.array(
        z.object({
          logo: z.string(),
          title: z.string(),
          description: z.string().optional(),
          is_starred: z.boolean(),
        }),
      ),
    }),
    testimonial_quote: z.object({
      enable: z.boolean(),
      badge: z.string().optional(),
      title: z.string(),
      quote: z.string(),
    }),
    single_testimonial: z.object({
      enable: z.boolean(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })),
      testimonial: z.object({
        quote: z.string(),
        avatar: z.string(),
        name: z.string(),
        company: z.string(),
      }),
    }),
    growth_process: z.object({
      enable: z.boolean(),
      badge: z.string().optional(),
      title: z.string(),
      items: z.array(
        z.object({
          logo: z.string(),
          title: z.string(),
          content: z.string(),
        }),
      ),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    integrations: z.object({
      enable: z.boolean(),
      badge: z.string().optional(),
      title: z.string(),
      items: z.array(z.object({ image: z.string(), alt: z.string() })),
    }),
    lead_generation: z.object({
      enable: z.boolean(),
      badge: z.string().optional(),
      title: z.string(),
      subtitle: z.string(),
      content: z.string(),
      list: z.array(z.string()),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    pricing: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string(),
    }),
  }),
});

const pricingCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/pricing" }),
  schema: z.object({
    ...commonFields,
    page_header: z.object({
      badge: z.string().optional(),
      title: z.string(),
      content: z.string(),
    }),
    toggler: z.object({ monthly_label: z.string(), yearly_label: z.string() }),
    plans: z.array(
      z.object({
        title: z.string(),
        price: z.string(),
        yearly_price: z.string(),
        is_featured: z.boolean(),
        offer_text: z.string().optional(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        description: z.string(),
        features: z.array(
          z.object({
            label: z.string(),
            included: z.boolean(),
            tooltip: z.string().optional(),
          }),
        ),
      }),
    ),
    comparison: z
      .object({
        enable: z.boolean(),
        badge: z.string().optional(),
        title: z.string().optional(),
        headers: z.array(z.object({ label: z.string() })).optional(),
        rows: z
          .array(
            z.object({
              feature: z.string(),
              values: z.array(z.union([z.string(), z.boolean()])),
            }),
          )
          .optional(),
      })
      .optional(),
  }),
});

const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    badge: z.string().optional(),
    title: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

const comparisonRowSectionCollection = defineCollection({
  loader: glob({
    pattern: "comparison-row.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    badge: z.string().optional(),
    title: z.string(),
    price_suffix: z.string().optional(),
    items: z.array(
      z.object({
        title: z.string(),
        price: z.string(),
        images: z.array(z.string()),
      }),
    ),
  }),
});

const faqSectionCollection = defineCollection({
  loader: glob({ pattern: "faq.{md,mdx}", base: "src/content/sections" }),
  schema: z.object({
    enable: z.boolean(),
    badge: z.string().optional(),
    title: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    items: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

const brandsSectionCollection = defineCollection({
  loader: glob({ pattern: "brands.{md,mdx}", base: "src/content/sections" }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    images: z.array(z.object({ src: z.string(), alt: z.string() })),
  }),
});

const ourStorySectionCollection = defineCollection({
  loader: glob({ pattern: "our-story.{md,mdx}", base: "src/content/sections" }),
  schema: z.object({
    enable: z.boolean(),
    badge: z.string().optional(),
    title: z.string(),
    ceo: z.object({ image: z.string(), name: z.string(), role: z.string() }),
    letter: z.string(),
    letter_points_title: z.string().optional(),
    letter_points: z.array(z.string()),
    closing_content: z.string().optional(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        poster: z.string(),
        content: z.string(),
        video: z.string().optional(),
      }),
    ),
  }),
});

const businessNeedsSectionCollection = defineCollection({
  loader: glob({
    pattern: "business-needs.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    badge: z.string().optional(),
    title: z.string(),
    items: z.array(
      z.object({
        image: z.string(),
        number: z.string(),
        title: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

export const collections = {
  homepage: homepageCollection,
  pricing: pricingCollection,
  ctaSection: ctaSectionCollection,
  faqSection: faqSectionCollection,
  brandsSection: brandsSectionCollection,
  ourStorySection: ourStorySectionCollection,
  testimonialSection: testimonialSectionCollection,
  comparisonRowSection: comparisonRowSectionCollection,
  businessNeedsSection: businessNeedsSectionCollection,
};
